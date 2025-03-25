import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <h2>
      <Link to="/">Home</Link> || <Link to="/show">Show</Link>
    </h2>
  );
}

export default Header;
