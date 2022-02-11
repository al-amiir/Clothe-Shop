import React, { useEffect } from "react";
import { Box } from "@mui/system";
import MiniCartComponent from "./MiniCartComponent";
import { Button } from "@mui/material";

const MiniCart = ({ displayCart }) => {
  useEffect(() => {
    console.log("d", displayCart == true);
  }, [displayCart]);

  return (
    <Box sx={{ display: `${displayCart === false ? "none" : "block"}`, position: "fixed", width: "100vw", height: "100vh", background: "rgba(57, 55, 72, 0.22)", left: "0", top: "0", zIndex: "100" }}>
      <Box sx={{ width: "288px", height: "80vh", position: "fixed", top: "12vh", right: "46px", backgroundColor: "white", padding: "16px" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginRight: "5px", fontWeight: "600" }}>My Bag, </Box> 2 Items
        </Box>
        <MiniCartComponent />
        <MiniCartComponent />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "600", marginTop: "52px" }}>
          <Box>Total</Box>
          <Box>$100</Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "35px", marginBottom: "10px" }}>
          <Button sx={{ width: "140px", height: "43px", color: "black", border: "1px solid", borderRadius: "0px" }}>VIEW BAG</Button>
          <Button sx={{ width: "140px", height: "43px", backgroundColor: "#5ECE7B", color: "white", borderRadius: "0px" }}>CHECK OUT</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MiniCart;
