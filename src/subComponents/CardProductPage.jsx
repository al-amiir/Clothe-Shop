import React from "react";
// React Router
import { Link } from "react-router-dom";

const CardProductPage = ({ currency, productData, setSingleProductData }) => {
  return (
    <div style={{ padding: "16px", width: "356px", transition: ".3s", "&:hover": { divShadow: "0px 4px 35px rgb(168 172 176 / 49%)" }, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "103px", marginRight: "40px" }}>
      <Link to={`/${productData.id}`} style={{ textDecoration: "none" }}>
        <img style={{ width: "356px", height: "338px", objectFit: "cover", objectPosition: "top", border: "1px solid #e5e9ea87" }} src={productData.gallery[0]} alt="" onClick={() => setSingleProductData(productData)} />
      </Link>
      <div style={{ width: "100%", position: "relative" }}>
        <div style={{ margin: "10px 0px" }}>{productData.name}</div>
        <div style={{ margin: "10px 0px" }}>
          <span style={{ marginRight: "5px" }}>{currency}</span>
          {productData.prices.map((price) => (price.currency.symbol === currency ? price.amount : ""))}
        </div>
        <div style={{ position: "absolute", top: "-24px", right: "12px", backgroundColor: "#5ECE7B", padding: "10px", clipPath: "circle(45%)", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
          <img src="https://img.icons8.com/material-outlined/24/FFFFFF/shopping-cart--v1.png" />
        </div>
      </div>
    </div>
  );
};

export default CardProductPage;
