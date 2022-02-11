import { Box } from "@mui/system";
import React from "react";
import CartPage from "./mainComponents/CartPage";
import ProductsPage from "./mainComponents/ProductsPage";
import SingleProductPage from "./mainComponents/SingleProductPage";
import HeaderProductsPage from "./subComponents/HeaderProductsPage";

const App = () => {
  return (
    <Box sx={{ fontFamily: "Raleway" }}>
      <HeaderProductsPage />
      <Box sx={{ padding: "80px 10px 10px 101px" }}>
        <ProductsPage />
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
      </Box>
    </Box>
  );
};

export default App;
