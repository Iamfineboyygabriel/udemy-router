import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";


import Product from "./pages/Product";
import Pricing from "../src/pages/Pricing";
import HomePage from "../src/pages/HomePage";
import AppLayout from "../src/pages/AppLayout";
import PageNotFound from "../src/pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

//we are fetching the data here because we need it in different components
const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        {/**here we created a nested Route because
         * the route we need it inside the AppLayout component
         * so basically we just closed the self closing tag and put it in btw
         * and please take note .
         *
         * we also made use of an index route which is basically the deafult child route
         *  that is going to be marched if non of the other route matched*/}
        <Route path="/app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
