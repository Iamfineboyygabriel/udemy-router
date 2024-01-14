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
import PropTypes from "prop-types";


function CityList() {
  const { cities, isLoading } = useCities();
  

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

Cityitem.propTypes = {
  city: PropTypes.object.isRequired, // Change this to match your data structure
};


export default CityList;
