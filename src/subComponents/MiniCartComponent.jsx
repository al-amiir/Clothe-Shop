import React, { useEffect, useState } from "react";
const MiniCartComponent = ({ cartData, setCartData, currency }) => {
  const [counter, setCounter] = useState(cartData.quantity);
  const [selectedSizes, setSelectedSizes] = useState(cartData.sizes || []);

  useEffect(() => {
    setCounter(cartData.quantity);
  }, [cartData.quantity]);

  function handleQuantityPlus() {
    setCounter((prev) => prev + 1);
  }
  function handleQuantityMinus() {
    setCounter((prev) => prev - 1);
  }
  useEffect(() => {
    setCartData((prev) => ({ ...prev, [cartData.id]: { ...cartData, quantity: counter } }));
  }, [counter]);
  useEffect(() => {
    setCartData((prev) => ({ ...prev, [cartData.id]: { ...cartData, sizes: selectedSizes } }));
  }, [selectedSizes]);

  if (cartData.quantity <= 0) return "";
  return (
    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", marginBottom: "20px", minHeight: "140px", height: "auto" }}>
      {/* Left */}
      <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "132px" }}>
        <div>
          <div style={{ fontSize: "16px", marginBottom: "10px" }}>{cartData.brand}</div>
          <div style={{ fontSize: "16px", marginBottom: "10px" }}>{cartData.name}</div>
          <div style={{ fontSize: "16px", marginTop: "15px", marginBottom: "12px", fontWeight: "600" }}> {cartData.prices.map((price) => (price.currency.symbol === currency ? price.amount : ""))}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          {cartData.attributes[0]?.items?.map((item) => (
            <button
              onClick={() => {
                selectedSizes.includes(item.id) ? setSelectedSizes((prev) => prev.filter((p) => p !== item.id)) : setSelectedSizes((prev) => [...prev, item.id]);
              }}
              style={{ backgroundColor: `${cartData.sizes?.includes(item.id) ? "black" : "white"}`, color: `${cartData.sizes?.includes(item.id) ? "white" : "black"}`, borderRadius: "0px", fontSize: "15px", height: "24px", border: "1px solid black", marginRight: "10px", marginTop: "4px", padding: "4px", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              {item.displayValue}
            </button>
          ))}
        </div>
      </div>
      {/* Right */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: "12px" }}>
          <button onClick={handleQuantityPlus} style={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="https://img.icons8.com/ios/15/000000/plus-math.png" />
          </button>
          <div>{cartData.quantity}</div>
          <button onClick={handleQuantityMinus} style={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="https://img.icons8.com/material-outlined/15/000000/minus-math.png" />
          </button>
        </div>
        <div>
          <img style={{ width: "105px", height: "100%", objectFit: "cover", border: "1px solid rgb(229 233 234)" }} src={cartData.gallery[0]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiniCartComponent;
