import React from "react";
import "../styles/main.css";
import ImageGallery from "react-image-gallery";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const SingleProductPage = () => {
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
    <Box sx={{ display: "flex", marginTop: "73px", height: "90vh", paddingRight: "100px" }}>
      <Box>
        <ImageGallery items={images} thumbnailPosition={"left"} showFullscreenButton={false} showPlayButton={false} showNav={false} />
      </Box>
      <Box sx={{ width: "500px", marginLeft: "70px" }}>
        <Box style={{ fontSize: "30px", fontWeight: "600", marginBottom: "20px" }}>Apollo</Box>
        <Box sx={{ fontSize: "30px" }}>Running Short</Box>
        <Box>
          <Box sx={{ fontSize: "18px", fontWeight: "600", marginTop: "43px", marginBottom: "10px" }}>SIZE:</Box>
          <Box>
            <Button sx={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px" }}>XS</Button>
            <Button sx={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px" }}>S</Button>
            <Button sx={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px" }}>M</Button>
            <Button sx={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px" }}>L</Button>
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: "18px", fontWeight: "600", marginTop: "43px" }}>PRICE:</Box>
          <Box sx={{ fontSize: "24px", fontWeight: "600", marginTop: "10px" }}>$50.00</Box>
        </Box>
        <Button sx={{ marginTop: "20px", width: "100%", height: "52px", backgroundColor: "#5ECE7B", color: "white" }}> ADD TO CART</Button>
        <Box sx={{ marginTop: "40px", fontSize: "16px" }}>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</Box>
      </Box>
    </Box>
  );
};

export default SingleProductPage;
