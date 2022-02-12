import React, { useEffect } from "react";
import { Box } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MiniCart from "./MiniCart";
const HeaderProductsPage = ({ setCurrency }) => {
  // Left Header
  const [value, setValue] = React.useState(0);

  // Right Header
  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Cart
  const [displayCart, setDisplayCart] = React.useState(false);
  function handleDisplayCart() {
    displayCart === false ? setDisplayCart(true) : setDisplayCart(false);
  }
  useEffect(() => {
    console.log({ displayCart });
  }, [displayCart]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: "200", position: "fixed", width: "100vw", top: 0, left: 0, backgroundColor: "white", paddingTop: "20px" }}>
        {/* Left */}
        <Box sx={{ marginLeft: "110px" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="WOMEN" sx={{ borderBottom: `${value === 0 ? "1px solid #5ECE7B " : "none"}`, "& span": { color: `${value === 0 ? "#5ECE7B" : "grey"}` } }} />
            <BottomNavigationAction label="MEN" sx={{ borderBottom: `${value === 1 ? "1px solid #5ECE7B" : "none"}`, "& span": { color: `${value === 1 ? "#5ECE7B" : "grey"}` } }} />
            <BottomNavigationAction label="KIDS" sx={{ borderBottom: `${value === 2 ? "1px solid #5ECE7B" : "none"}`, "& span": { color: `${value === 2 ? "#5ECE7B" : "grey"}` } }} />
          </BottomNavigation>
        </Box>
        {/* Center */}
        <Box>
          <img src="https://img.icons8.com/color/48/000000/shopify.png" />
        </Box>
        {/* Right */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "110px" }}>
          {/* Menu */}
          <Box>
            <Button sx={{ color: "black" }} id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
              $
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>$ USD</MenuItem>
              <MenuItem onClick={handleClose}>€ EUR</MenuItem>
              <MenuItem onClick={handleClose}>¥ JPY</MenuItem>
            </Menu>
          </Box>
          {/* Cart  */}
          <Button onClick={handleDisplayCart}>
            <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png" />
          </Button>
        </Box>
      </Box>
      <MiniCart displayCart={displayCart} />
    </>
  );
};

export default HeaderProductsPage;
