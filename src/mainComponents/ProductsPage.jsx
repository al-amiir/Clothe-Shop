import React from "react";
import HeaderProductsPage from "../subComponents/HeaderProductsPage";
import { Box } from "@mui/system";
import CartProductPage from "../subComponents/CartProductPage";

// Cart

const ProductsPage = () => {
  return (
    <Box>
      {/* Header */}
      <p style={{ fontSize: "42px", fontFamily: "Raleway" }}>Category Name</p>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        <CartProductPage />
        <CartProductPage />
        <CartProductPage />
        <CartProductPage />
        <CartProductPage />
        <CartProductPage />
      </Box>
    </Box>
  );
};

export default ProductsPage;
