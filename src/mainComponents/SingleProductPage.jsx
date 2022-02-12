import React, { useEffect, useState } from "react";
import "../styles/main.css";
import ImageGallery from "react-image-gallery";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const SingleProductPage = ({ currency, singleProductData }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    singleProductData.gallery.map((image) => setImages((prev) => [...prev, { original: image, thumbnail: image }]));
    return () => {
      setImages([]);
    };
  }, [singleProductData]);
  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <Box sx={{ display: "flex", marginTop: "73px", height: "90vh", paddingRight: "100px" }}>
      <Box sx={{ width: "500px" }}>
        <ImageGallery items={images} thumbnailPosition={"left"} showFullscreenButton={false} showPlayButton={false} showNav={false} />
      </Box>
      <Box sx={{ width: "300px", marginLeft: "70px" }}>
        <Box style={{ fontSize: "30px", fontWeight: "600", marginBottom: "20px" }}>{singleProductData.brand}</Box>
        <Box sx={{ fontSize: "30px" }}>{singleProductData.name}</Box>
        <Box>
          <Box sx={{ fontSize: "18px", fontWeight: "600", marginTop: "43px", marginBottom: "10px" }}>SIZE:</Box>
          <Box>
            {singleProductData.attributes[0].items.map((item) => (
              <Button sx={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px" }}>{item.displayValue}</Button>
            ))}
          </Box>
        </Box>
        <Box>
          <Box sx={{ fontSize: "18px", fontWeight: "600", marginTop: "43px" }}>PRICE:</Box>
          <Box sx={{ fontSize: "24px", fontWeight: "600", marginTop: "10px" }}>{singleProductData.prices.map((price) => (price.currency.symbol === currency ? price.amount : ""))}</Box>
        </Box>
        <Button sx={{ marginTop: "20px", width: "100%", height: "52px", backgroundColor: "#5ECE7B", color: "white" }}> ADD TO CART</Button>
        <Box sx={{ marginTop: "40px", fontSize: "16px" }}>{singleProductData.description.replace(/<[^>]+>/g, "")}</Box>
      </Box>
    </Box>
  );
};

export default SingleProductPage;
