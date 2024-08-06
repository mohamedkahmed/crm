import authFetch from "../utils/axiosAuthfetch"
import {useMutation , useQueryClient} from "@tanstack/react-query"
import { toast } from 'react-hot-toast';
const useQueryadditeam = (endpoint  , key ) => {
    const queryClient = useQueryClient();
    const {isError , mutate:addIteam , isLoading} = useMutation({
        mutationFn: async (data) => await authFetch.post(`/projects` , data),
        onSuccess:(response) => {
            console.log(response);
            queryClient.invalidateQueries({queryKey:[`${key}`]})
            toast.success("iteam add")
        } ,
        onError:() => {
            toast.error("there is an errro ")
        }
    })
  return{ 
 isError , isLoading , addIteam
}
}

export default useQueryadditeam