import React from "react";
import CartSingleComponent from "../subComponents/CartSingleComponent";

const CartPage = () => {
  return (
    <div style={{ paddingRight: "100px", paddingBottom: "54px" }}>
      <div style={{ fontSize: "30px", fontWeight: "600", marginBottom: "60px" }}>CART</div>
      <CartSingleComponent />
      <CartSingleComponent />
    </div>
  );
};

export default CartPage;
