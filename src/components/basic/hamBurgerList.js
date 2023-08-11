import React, { useState } from "react";
import "./hamBurgerList.css";
import search from "../../Assets/Vector.svg";
import { localURL } from "../../constants";
function HamBurgerList({ data, setData }) {
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [hamShow, setHamShow] = useState(false);
  

  const searchItems = async () => {
    const currPageData = await fetch(
      `https://leonbros-backend.vercel.app/v1/items/getItems?keyword=${keyword}`
    ).then((res) => res.json());
    setData(currPageData.data);
    console.log(currPageData);
  };
  const handleHamModal = () => {
    setHamShow(!hamShow);
  };

  return (
    <div className="hamWrapper">
      <div className="hamContainer">
        <div className="ham-items border-class">News</div>
        <div className="ham-items">Product</div>
        {/* <div className="input-class navbar-input">
          <input
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            className="in"
            type="text"
            placeholder="Search by part number"
          />
          <div className="search-icon">
            {" "}
            <img onClick={searchItems} src={search} className="icon" />{" "}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HamBurgerList;
