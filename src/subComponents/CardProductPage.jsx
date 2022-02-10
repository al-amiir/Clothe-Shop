import React from "react";
import { Box } from "@mui/system";

const CardProductPage = () => {
  return (
    <Box sx={{ padding: "16px", width: "356px", transition: ".3s", "&:hover": { boxShadow: "0px 4px 35px rgba(168, 172, 176, 0.19)" }, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Box sx={{ width: "356px", height: "338px" }} component="img" src="https://via.placeholder.com/300.png/09f/fff" alt="" />
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box sx={{ margin: "10px 0px" }}>Apollo Running Short</Box>
        <Box sx={{ margin: "10px 0px" }}>$50.00</Box>
        <Box sx={{ position: "absolute", top: "-24px", right: "12px", backgroundColor: "#5ECE7B", padding: "10px", clipPath: "circle(45%)", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
          <img src="https://img.icons8.com/material-outlined/24/FFFFFF/shopping-cart--v1.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default CardProductPage;
