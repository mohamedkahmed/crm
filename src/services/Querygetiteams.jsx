import authFetch from "../utils/axiosAuthfetch"
import {useQuery } from "@tanstack/react-query"
const useQuerygetiteams = (endpoint  , key ) => {
    const {isError , data, isLoading} = useQuery({
            queryKey:[`${key}`],
        queryFn: async () => await authFetch(`/${endpoint}/` ),
   
    })
  return{ 
 isError , isLoading , data
}
}

export default useQuerygetiteams