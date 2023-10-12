import {  useQuery,useQueryClient } from "react-query";

import axios from "axios";

const fetchSuperHeroesDetail = (heroId) => {
 
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
 
};

export const useDetail = (heroId) => {
  const QueryClient=useQueryClient();
return useQuery(
   [ "superheroes",heroId],()=>fetchSuperHeroesDetail(heroId),{
    initialData:()=>{
      const hero=QueryClient.getQueryData('superheroes')?.data?.find((hero)=>hero.id===parseInt(heroId))
      if(hero){
        return {
           data:hero
          }
      }else{
        return undefined;
      }
    }
   }
  );
}