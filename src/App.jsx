import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import CartPage from "./mainComponents/CartPage";
import ProductListingPage from "./mainComponents/ProductListingPage";
import ProductDescriptionPage from "./mainComponents/ProductDescriptionPage";
import HeaderProductsPage from "./subComponents/HeaderProductsPage";

// React Router
import { Routes, Route, Link } from "react-router-dom";
import CartSuccessMessage from "./subComponents/CartSuccessMessage";

const App = () => {
  const [categoryType, setCategoryType] = useState("");
  const [singleProductData, setSingleProductData] = useState({});
  const [cartData, setCartData] = useState({});
  const [cartSuccessMessage, setCartSuccessMessage] = useState("none");
  const [currency, setCurrency] = useState("$");

  return (
    <Box sx={{ fontFamily: "Raleway" }}>
      <HeaderProductsPage setCurrency={setCurrency} currency={currency} setCategoryType={setCategoryType} setCartData={setCartData} cartData={cartData} />
      <CartSuccessMessage cartSuccessMessage={cartSuccessMessage} setCartSuccessMessage={setCartSuccessMessage} />
      <Box sx={{ padding: "80px 10px 10px 101px" }}>
        <Routes>
          <Route path="/" element={<ProductListingPage setSingleProductData={setSingleProductData} currency={currency} categoryType={categoryType} setCartData={setCartData} setCartSuccessMessage={setCartSuccessMessage} />} />
          <Route path={`/${singleProductData.id}`} element={<ProductDescriptionPage singleProductData={singleProductData} currency={currency} setCartData={setCartData} setCartSuccessMessage={setCartSuccessMessage} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
