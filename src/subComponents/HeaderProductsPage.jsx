import React, { useEffect } from "react";
import Logo from "./Logo";
import MiniCart from "./MiniCart";
// Apolo
import { useQuery } from "@apollo/client";
import { CATEGORY_NAME } from "../gql";
const HeaderProductsPage = ({ setCurrency, currency, setCategoryType, cartData, setCartData }) => {
  const { loading, error, data } = useQuery(CATEGORY_NAME);

  // Left Header
  const [value, setValue] = React.useState(0);

  // Cart
  const [displayCart, setDisplayCart] = React.useState(false);
  function handleDisplayCart() {
    displayCart === false ? setDisplayCart(true) : setDisplayCart(false);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: "200", backgroundColor: "white", padding: "0px 103px 0px 110px" }}>
        {/* Left */}
        <div>
          {data?.categories?.map((category, i) => (
            <button
              style={{ fontSize: "16px", padding: "28px 30px 30px 30px", borderBottom: `${value === i ? "1px solid #5ECE7B " : "none"}`, color: `${value === i ? "#5ECE7B" : "black"}` }}
              onClick={() => {
                setValue(i);
                setCategoryType(category.name);
              }}
            >
              {category.name.toUpperCase()}
            </button>
          ))}
        </div>
        {/* Center */}
        <Logo />
        {/* Right */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Menu */}
          <div>
            <label style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "43px", fontWeight: "600" }}>
              {currency}
              <select value={currency} onChange={(e) => setCurrency(e.target.value)} style={{ width: "20px", border: "none", backgroundColor: "white", outline: "none", cursor: "pointer" }}>
                <option value="$">$ USD</option>
                <option value="£">£ GBP</option>
                <option value="A$">A$ AUD</option>
                <option value="¥">¥ JPY</option>
                <option value="₽">₽ RUB</option>
              </select>
            </label>
          </div>
          {/* Cart  */}
          <button onClick={handleDisplayCart}>
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/20/000000/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png" />
          </button>
        </div>
      </div>
      <div style={{ display: `${displayCart ? "block" : "none"}`, position: "fixed", top: "0", left: "0", zIndex: 1, width: "100vw", height: "100vh", backgroundColor: "rgba(57, 55, 72, 0.22)" }}></div>
      <MiniCart displayCart={displayCart} currency={currency} cartData={cartData} setCartData={setCartData} />
    </>
  );
};

export default HeaderProductsPage;
