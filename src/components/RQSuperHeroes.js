
import { Link } from "react-router-dom";
import { useSuperHeroDetail, useAddSuperHeroesData } from "../api/api";
import { useState } from "react";

const RQSuperHeros = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroDetail();
  const { mutate: AddHero } = useAddSuperHeroesData();

  // console.log({ isLoading, isFetching });

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    AddHero(hero);
  };
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ SuperHeroes</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-superheroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      <button onClick={refetch}> Fetch heroes</button>
    </>
  );
};
export default RQSuperHeros;
