import React from "react";
import HeaderProductsPage from "../subComponents/HeaderProductsPage";
import { Box } from "@mui/system";
import CardProductPage from "../subComponents/CardProductPage";

// Cart

const ProductsPage = () => {
  return (
    <Box>
      {/* Header */}
      <p style={{ fontSize: "42px", fontFamily: "Raleway" }}>Category Name</p>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        <CardProductPage />
        <CardProductPage />
        <CardProductPage />
        <CardProductPage />
        <CardProductPage />
        <CardProductPage />
      </Box>
    </Box>
  );
};

export default ProductsPage;
