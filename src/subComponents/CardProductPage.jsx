import React from "react";
import { Box } from "@mui/system";
// React Router
import { Routes, Route, Link } from "react-router-dom";

const CardProductPage = ({ currency, productData, setSingleProductData }) => {
  return (
    <Box sx={{ padding: "16px", width: "356px", transition: ".3s", "&:hover": { boxShadow: "0px 4px 35px rgba(168, 172, 176, 0.19)" }, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Link to={`/${productData.id}`} style={{ textDecoration: "none" }}>
        <Box sx={{ width: "356px", height: "338px", objectFit: "cover", objectPosition: "top" }} component="img" src={productData.gallery[0]} alt="" onClick={() => setSingleProductData(productData)} />
      </Link>
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box sx={{ margin: "10px 0px" }}>{productData.name}</Box>
        <Box sx={{ margin: "10px 0px" }}>
          <span style={{ marginRight: "5px" }}>{currency}</span>
          {productData.prices.map((price) => (price.currency.symbol === currency ? price.amount : ""))}
        </Box>
        <Box sx={{ position: "absolute", top: "-24px", right: "12px", backgroundColor: "#5ECE7B", padding: "10px", clipPath: "circle(45%)", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
          <img src="https://img.icons8.com/material-outlined/24/FFFFFF/shopping-cart--v1.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default CardProductPage;
