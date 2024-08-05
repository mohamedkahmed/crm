import authFetch from "../utils/axiosAuthfetch"
import {useMutation , useQueryClient} from "@tanstack/react-query"
import { toast } from 'react-hot-toast';
const useQueryupdate = (endpoint  , key ) => {
    const queryClient = useQueryClient();
    const {isError , mutate:updateiteam , isLoading  ,isPending} = useMutation({
        mutationFn: async ({data , id}) => {
            console.log(id);
            await authFetch.put(`/${endpoint}/${id}` , data)},
        onSuccess:(response) => {
            console.log(response);
            queryClient.invalidateQueries({queryKey:[`${key}`]})
            toast.success("iteam update")
        } ,
        onError:(error) => {
            toast.error(error)
        }
    })
  return{ 
 isError , isLoading , updateiteam , isPending
}
}

export default useQueryupdate