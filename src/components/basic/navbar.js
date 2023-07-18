import React,{useState} from "react";
import "./navbar.css";
import homeImage from "../../Assets/home.svg";
import search from "../../Assets/Vector.svg";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import hamburger from '../../Assets/hamburger.png'
import HamburgerModal from './hamBurgerList';



function Navbar( {data,setData}) {

  const [keyword,setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [hamShow,setHamShow] = useState(false)

  const searchItems =async ()=>{
      const currPageData = await fetch(`https://leonbros-backend.vercel.app/v1/items/getItems?keyword=${keyword}`)
      .then((res) => res.json())
      setData(currPageData.data);
      console.log(currPageData)
  }
  const handleHamModal = () => {
    setHamShow(!hamShow)
  }

  return (
    <nav className="ubox">
      <div className="nav-row">
        <div>
          <a href="/" className="logo">
            {" "}
            <img className="logo" src={homeImage} />{" "}
          </a>
        </div>

        <div className="hx">
          <a href="/product">PRODUCT</a>
        </div>
        <div className="hx">
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

        <div onClick = {handleHamModal} className="hamImage">
          <img style={{height:"10px"}} src={hamburger} />
          <div className="hamModal">

            {hamShow &&
            <HamburgerModal />
          }
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
