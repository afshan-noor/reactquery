import axios from "axios";
import {  useQuery } from "react-query";
import { useMutation ,useQueryClient} from "react-query";

export const fetchSuperHeroes=()=>{
    return axios.get('http://localhost:4000/superheroes');
}
 const addSuperHeroes=(hero)=>{
    return axios.post('http://localhost:4000/superheroes',hero);
}
export const useSuperHeroDetail = () => {
  return useQuery(
    "super-heroes",
    fetchSuperHeroes
  );
  }

export const fetchFriends=()=>{
    return axios.get('http://localhost:4000/friends');
}
export const useAddSuperHeroesData=()=>{
    const queryClient=useQueryClient();
    return useMutation(addSuperHeroes,{
        onSuccess:(data)=>{
            // queryClient.invalidateQueries('super-heroes')
            queryClient.setQueryData('super-heroes',(oldQueryData)=>{
                return{
                    ...oldQueryData,
                    data:[...oldQueryData.data,data.data],
                }
            })
        }
    });
}