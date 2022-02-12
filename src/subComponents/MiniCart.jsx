import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MiniCartComponent from "./MiniCartComponent";

const MiniCart = ({ displayCart }) => {
  useEffect(() => {
    console.log("d", displayCart == true);
  }, [displayCart]);

  return (
    <div style={{ display: `${displayCart === false ? "none" : "block"}`, width: "288px", position: "absolute", top: "12vh", right: "87px", zIndex: 2, backgroundColor: "white", padding: "16px" }}>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "5px", fontWeight: "600" }}>My Bag, </div> 2 Items
      </div>
      <MiniCartComponent />
      <MiniCartComponent />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "600", marginTop: "52px" }}>
        <div>Total</div>
        <div>$100</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "35px", marginBottom: "10px" }}>
        <Link to="/cart">
          <button style={{ width: "140px", height: "43px", color: "black", border: "1px solid", borderRadius: "0px" }}>VIEW BAG</button>
        </Link>
        <button style={{ width: "140px", height: "43px", backgroundColor: "#5ECE7B", color: "white", borderRadius: "0px" }}>CHECK OUT</button>
      </div>
    </div>
  );
};

export default MiniCart;
