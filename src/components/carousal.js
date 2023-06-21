import React, { useState, useEffect } from 'react';

const Carousal = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'http://top10tale.com/wp-content/uploads/2016/03/hd-flower-images-3.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/da/Purple_flower_(4764445139).jpg',
    'https://jooinn.com/images/closeup-of-flowers-2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <img src={images[currentImage]} alt="Slider" />
    </div>
  );
};

export default Carousal;
