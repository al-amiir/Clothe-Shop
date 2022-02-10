import React from "react";
import "../styles/main.css";
import ImageGallery from "react-image-gallery";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const CartSingleComponent = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid grey", paddingTop: "20px", marginBottom: "20px" }}>
      {/* Left */}
      <Box>
        <Box style={{ fontSize: "30px", fontWeight: "600", marginBottom: "20px" }}>Apollo</Box>
        <Box sx={{ fontSize: "30px" }}>Running Short</Box>
        <Box sx={{ fontSize: "24px", fontWeight: "600", marginTop: "10px", marginBottom: "12px" }}>$50.00</Box>
        <Box>
          <Button sx={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px" }}>M</Button>
          <Button sx={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px" }}>L</Button>
        </Box>
      </Box>
      {/* Right */}
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: "12px" }}>
          <Box
            sx={{
              border: " 1px solid",
              color: "black",
              width: "45px",
              height: "45px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img src="https://img.icons8.com/ios/24/000000/plus-math.png" />{" "}
          </Box>
          <Box>1</Box>
          <Box
            sx={{
              border: " 1px solid",
              color: "black",
              width: "45px",
              height: "45px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img src="https://img.icons8.com/material-outlined/15/000000/minus-math.png" />{" "}
          </Box>
        </Box>
        <Box sx={{ width: "300px" }}>
          <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showNav={false} showThumbnails={false} />
        </Box>
      </Box>
    </Box>
  );
};

export default CartSingleComponent;
