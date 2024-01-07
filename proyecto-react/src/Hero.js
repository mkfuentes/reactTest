import React, { useState } from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, images, buttonText, logo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-menu">
        <a href="#home">Inicio</a>
        <a href="#about">Acerca de</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className="hero-logo">
      <img src={logo} alt="Logo"/>
      </div>
      <div className="hero-container" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button onClick={nextImage}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
