import React from 'react';
import './Card.css'; // Asegúrate de crear un archivo CSS para este componente

const Card = ({ image, description }) => {
  return (
    <div className="card">
      <img src={image} alt="Descripción" className="card-image" />
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
