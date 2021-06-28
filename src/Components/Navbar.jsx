import React from "react";
import logo from "../logo.svg";

const Navbar = ({ onSearchQuery }) => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContent">
        <img style={{ width: 120 }} src={logo} alt="React-Logo" />
        <h1>React Todo</h1>
      </div>
      <div className="SearchInputContainer">
        <input
          onChange={onSearchQuery}
          className="InputItem"
          placeholder="Suche"
        />
      </div>
    </div>
  );
};

export default Navbar;
