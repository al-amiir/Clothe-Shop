import React from "react";
import "../styles/main.css";
import ImageGallery from "react-image-gallery";

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
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E5E5E5", paddingTop: "20px", marginBottom: "20px" }}>
      {/* Left */}
      <div>
        <div style={{ fontSize: "30px", fontWeight: "600", marginBottom: "20px" }}>Apollo</div>
        <div style={{ fontSize: "30px" }}>Running Short</div>
        <div style={{ fontSize: "24px", fontWeight: "600", marginTop: "10px", marginBottom: "12px" }}>$50.00</div>
        <div>
          <button style={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px", fontSize: "16px" }}>M</button>
          <button style={{ color: "black", border: "1px solid black", width: "63px", height: "45px", borderRadius: "0px", marginRight: "5px", fontSize: "16px" }}>L</button>
        </div>
      </div>
      {/* Right */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: "12px" }}>
          <div
            style={{
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
            <img src="https://img.icons8.com/windows/24/000000/plus-math.png" />
          </div>
          <div style={{ fontSize: "24px" }}>1</div>
          <div
            style={{
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
            <img src="https://img.icons8.com/material-sharp/22/000000/minus.png" />
          </div>
        </div>
        <div style={{ width: "300px" }}>
          <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showNav={true} showThumbnails={false} />
        </div>
      </div>
    </div>
  );
};

export default CartSingleComponent;
