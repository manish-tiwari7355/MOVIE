import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "rgb(189, 10, 40)",
        color: "black",
        fontWeight: "bolder",
        height: "72px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p> Manish Tiwari - {new Date().getFullYear()} </p>
    </div>
  );
}

export default Footer;
