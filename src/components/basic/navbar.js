import React,{useState} from "react";
import "./navbar.css";
import homeImage from "../../Assets/home.svg";
import search from "../../Assets/Vector.svg";
import { Link } from "react-router-dom";

function Navbar( {data,setData}) {

  const [keyword,setKeyword] = useState("");

  const searchItems =async ()=>{
      const currPageData = await fetch(`http://localhost:7000/v1/items/getItems?keyword=${keyword}`)
      .then((res) => res.json())
      setData(currPageData.data);
      console.log(currPageData)
  }
  

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
            value={keyword}
            onChange={(e)=>{
              setKeyword(e.target.value)
            }}
            className="in"
            type="text"
            placeholder="Search by part number"
          />
          <div className="search-icon">
            {" "}
            <img onClick={searchItems} src={search} className="icon" />{" "}
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
