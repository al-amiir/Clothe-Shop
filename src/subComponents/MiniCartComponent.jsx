import React from "react";
const MiniCartComponent = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", marginBottom: "20px" }}>
      {/* Left */}
      <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
        <div>
          <div style={{ fontSize: "16px", marginBottom: "10px" }}>Apollo</div>
          <div style={{ fontSize: "16px" }}>Running Short</div>
          <div style={{ fontSize: "16px", marginTop: "15px", marginBottom: "12px", fontWeight: "600" }}>$50.00</div>
        </div>
        <div style={{ display: "flex" }}>
          <button style={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid", marginRight: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>S</button>
          <button style={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid", marginRight: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>M</button>
        </div>
      </div>
      {/* Right */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: "12px" }}>
          <button style={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="https://img.icons8.com/ios/15/000000/plus-math.png" />
          </button>
          <div>1</div>
          <button style={{ borderRadius: "0px", color: "black", fontSize: "15px", width: "24px", height: "24px", border: "1px solid", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="https://img.icons8.com/material-outlined/15/000000/minus-math.png" />
          </button>
        </div>
        <div>
          <img style={{ width: "105px", height: "100%", objectFit: "cover" }} src="https://picsum.photos/id/1018/1000/600/" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiniCartComponent;
