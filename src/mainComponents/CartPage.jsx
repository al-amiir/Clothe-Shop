import React from "react";
import CartSingleComponent from "../subComponents/CartSingleComponent";
import { Box } from "@mui/system";

const CartPage = () => {
  return (
    <Box sx={{ marginTop: "80px", paddingRight: "100px" }}>
      <Box style={{ fontSize: "30px", fontWeight: "600", marginBottom: "60px" }}>Cart</Box>
      <CartSingleComponent />
      <CartSingleComponent />
    </Box>
  );
};

export default CartPage;
