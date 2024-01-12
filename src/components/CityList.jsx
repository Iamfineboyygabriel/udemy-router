// import styles from "./CityList.module.css";
// import Cityitem from "./Cityitem";
// import Spinner from "./Spinner";

// function CityList({ cities, isLoading }) {
//   if (isLoading) return <Spinner />;

//   return (
//     <ul className={styles.cityList}>
//       {cities.map((city) => (
//         <Cityitem city={city} key={city.id} />
//       ))}
//     </ul>
//   );
// }

// export default CityList;

import styles from "./CityList.module.css";
import Cityitem from "./Cityitem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  
  console.log("Cities:", cities);

  if (isLoading) return <Spinner />;
  if (!cities.length)
  
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
