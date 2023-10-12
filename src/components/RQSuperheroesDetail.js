
import { useParams } from "react-router-dom";

import {useDetail} from '../hooks/useDetail'


const RQSuperHeros = () => {
    const{heroId}=useParams();
 const{isLoading,isError,error,data}= useDetail(heroId)

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h1>RQSuperheroesDetail</h1>
      <div>
        {data?.data.name}-{data?.data.alterEgo}
      </div>
    </>
  );
};
export default RQSuperHeros;
