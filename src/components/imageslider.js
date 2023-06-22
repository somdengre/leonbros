import React from "react";
import "./imageslider.css";
import { useState, useEffect } from "react";
import slide1 from "../Assets/slide1.png";
import slide2 from "../Assets/slide2.png";
import slide3 from "../Assets/slide3.png";
import slide4 from "../Assets/slide4.png";
// import hub from '../Assets/hub.svg'
// import engine from '../Assets/engine.svg'
import water from "../Assets/water.svg";
// import suspenssion from '../Assets/suspension.svg'
// import engineparts from '../Assets/engineparts.svg'
import brake from "../Assets/brake.svg";
// import coming from '../Assets/coming.svg'
// import ignition from '../Assets/ignition.svg'
// import drive from '../Assets/drive.svg'
function Imageslider() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [slide1, slide2, slide3,slide4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="imageslider">
      <div className="about">
        <div className="text">
          WELCOME TO LEON AND BROTHERS INC.
          <br />
          AUTO PARTS FOR OE & AFTERMARKET SOLUTION.
        </div>
        <button className="btn">CONTACT US</button>
      </div>
      <img className="image" src={images[currentImage]} alt="Slider" />
    </div>
  );
}

export default Imageslider;
