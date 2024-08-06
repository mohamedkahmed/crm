import authFetch from "../utils/axiosAuthfetch"
import {useMutation , useQueryClient} from "@tanstack/react-query"
import { toast } from 'react-hot-toast';
const useQueryDelete = (endpoint  , key ) => {
    const queryClient = useQueryClient();
    const {isError , mutate:deleteIteam , isLoading} = useMutation({
        mutationFn: async (id) => await authFetch.delete(`/${endpoint}/${id}` ),
        onSuccess:(response) => {
            console.log(response);
            queryClient.invalidateQueries({queryKey:[`${key}`]})
            toast.success("iteam deleted")
        } ,
        onError:() => { 
            toast.error("there is an errro ")
        }
    })
  return{ 
 isError , isLoading , deleteIteam
}
}

export default useQueryDelete