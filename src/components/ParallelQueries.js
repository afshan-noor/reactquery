import { useQuery } from "react-query";
import { fetchSuperHeroes,fetchFriends } from "../api/api";

const ParallelQueries=()=>{
    useQuery(
        "super-heroes",
        fetchSuperHeroes);
        useQuery(
            "friends",
            fetchFriends);
    return(
    <>
    <h1> ParallelQueries</h1>
    </>
    )
}
export default ParallelQueries;