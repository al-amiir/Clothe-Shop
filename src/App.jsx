import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import CartPage from "./mainComponents/CartPage";
import ProductsPage from "./mainComponents/ProductsPage";
import SingleProductPage from "./mainComponents/SingleProductPage";
import HeaderProductsPage from "./subComponents/HeaderProductsPage";

// React Router
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [singleProductData, setSingleProductData] = useState({});
  const [currency, setCurrency] = useState("");

  return (
    <Box sx={{ fontFamily: "Raleway" }}>
      <HeaderProductsPage setCurrency={setCurrency} currency={currency} />
      <Box sx={{ padding: "80px 10px 10px 101px" }}>
        <Routes>
          <Route path="/" element={<ProductsPage setSingleProductData={setSingleProductData} currency={currency} />} />
          <Route path={`/${singleProductData.id}`} element={<SingleProductPage singleProductData={singleProductData} currency={currency} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
