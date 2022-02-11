import React from "react";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
const MiniCartComponent = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", marginBottom: "20px" }}>
      {/* Left */}
      <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
        <Box>
          <Box style={{ fontSize: "16px", marginBottom: "10px" }}>Apollo</Box>
          <Box sx={{ fontSize: "16px" }}>Running Short</Box>
          <Box sx={{ fontSize: "16px", marginTop: "15px", marginBottom: "12px", fontWeight: "600" }}>$50.00</Box>
        </Box>
        <Box>
          <IconButton sx={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid", marginRight: "10px" }}>S</IconButton>
          <IconButton sx={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid", marginRight: "10px" }}>M</IconButton>
        </Box>
      </Box>
      {/* Right */}
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: "12px" }}>
          <IconButton sx={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid" }}>
            <img src="https://img.icons8.com/ios/15/000000/plus-math.png" />
          </IconButton>
          <Box>1</Box>
          <IconButton sx={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid" }}>
            <img src="https://img.icons8.com/material-outlined/15/000000/minus-math.png" />
          </IconButton>
        </Box>
        <Box>
          <img style={{ width: "105px", height: "137px", objectFit: "cover" }} src="https://picsum.photos/id/1018/1000/600/" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default MiniCartComponent;
