import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "../src/pages/Pricing";
import HomePage from "../src/pages/HomePage";
import AppLayout from "../src/pages/AppLayout";
import PageNotFound from "../src/pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
