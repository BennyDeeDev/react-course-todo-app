import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../Reducer/todoSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="HeaderContainer">
      <Link to="/">
        <div className="HeaderContent">
          <img style={{ width: 120 }} src={logo} alt="React-Logo" />
          <h1>React Todo</h1>
        </div>
      </Link>
      <div className="SearchInputContainer">
        <input
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="InputItem"
          placeholder="Suche"
        />
      </div>
    </div>
  );
};

export default Navbar;
