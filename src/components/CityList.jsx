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

import PropTypes from "prop-types";
import styles from "./CityList.module.css";
import Cityitem from "./Cityitem";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities, isLoading }) {
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
//all of these are not neccessary buh i ust had to put it because react was complaining about the prop types
CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  message: PropTypes.string, // Optional prop
};

export default CityList;
