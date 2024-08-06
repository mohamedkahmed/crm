import authFetch from "../utils/axiosAuthfetch"
import {useQuery } from "@tanstack/react-query"
// import { toast } from 'react-hot-toast';
const useQuerygetSpacficIteam = (endpoint  , key  , id) => {
    const {isError , data, isLoading } = useQuery({
            queryKey:[key , id],
        queryFn: async () => {
            
        const {data} =     await authFetch(`/${endpoint}/${id}` )
        console.log(data);
        return data
        },
    })
  return{ 
 isError , isLoading , data
}
}

export default useQuerygetSpacficIteam