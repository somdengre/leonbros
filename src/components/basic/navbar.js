import React from "react";
import "./navbar.css";
import homeImage from "../../Assets/home.svg";
import search from "../../Assets/Vector.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="ubox">
      <div className="nav-row">
        <div>
          <a href="/" className="logo">
            {" "}
            <img src={homeImage} />{" "}
          </a>
        </div>
        <div>
          <a href="/product">PRODUCT</a>
        </div>
        <div>
          <a href="/news">NEWS</a>
        </div>
        <div className="input-class navbar-input">
          <input
            className="in"
            type="text"
            placeholder="Search by part number"
          />
          <div className="search-icon">
            {" "}
            <img src={search} className="icon" />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
{
  /* <div className='input-class'><input className = 'in' name='Search By part Number' type='text' placeholder='Search by part number'/><div className='search-icon'>space</div></div> */
}
