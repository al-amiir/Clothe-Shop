import { Box } from "@mui/system";
import React from "react";
import ProductsPage from "./mainComponents/ProductsPage";
import SingleProductPage from "./mainComponents/SingleProductPage";
import HeaderProductsPage from "./subComponents/HeaderProductsPage";

const App = () => {
  return (
    <Box sx={{ padding: "0px 10px 10px 101px", fontFamily: "Raleway" }}>
      <HeaderProductsPage />
      {/* <ProductsPage /> */}
      <SingleProductPage />
    </Box>
  );
};

export default App;
