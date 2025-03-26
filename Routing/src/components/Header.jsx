import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <h2
      style={{
        backgroundColor: "#F8F8FF",
        padding: "10px",
        textAlign: "center",
        marginBottom: "0",
      }}
    >
      <Link
        to="/"
        style={{
          backgroundColor: "#F8F8FF",
          color: "#004085",
          textDecoration: "none",
          padding: "5px 10px",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>{" "}
      ||{" "}
      <Link
        to="/show"
        style={{
          backgroundColor: "#F8F8FF",
          color: "#004085",
          textDecoration: "none",
          padding: "5px 10px",
          fontWeight: "bold",
        }}
      >
        Show
      </Link>
    </h2>
  );
}

export default Header;
