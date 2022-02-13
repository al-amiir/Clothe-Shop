import React from "react";
import { Link } from "react-router-dom";
import CartSingleComponent from "../subComponents/CartSingleComponent";

const CartPage = ({ cartData, setCartData, currency }) => {
  return (
    <div style={{ paddingRight: "100px", paddingBottom: "54px" }}>
      <div style={{ fontSize: "30px", fontWeight: "600", marginBottom: "60px" }}>CART</div>
      {Object.keys(cartData).map((data) => (
        <CartSingleComponent key={data} cartData={cartData[data]} setCartData={setCartData} currency={currency} />
      ))}
    </div>
  );
};

export default CartPage;
