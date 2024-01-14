import PropTypes from "prop-types";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../context/CitiesContext";

function CountryList() {
  const { cities = [], isLoading } = useCities(); // Provide a default value for cities

  if (isLoading ?? true) {
    // Use the nullish coalescing operator to provide a default value of `true`
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array, // Remove `isRequired` to allow `undefined`
  isLoading: PropTypes.bool, // Remove `isRequired` to allow `undefined`
  message: PropTypes.string, // Optional prop
};

export default CountryList;
