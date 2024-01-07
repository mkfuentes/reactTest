import React from 'react';
import Hero from './Hero';
import Card from './Card';
import './HomePage.css'; // Asegúrate de tener un archivo CSS para HomePage
//import logo from './path-to-your-logo.png'; // Reemplaza con la ruta correcta de tu logotipo

const HomePage = () => {
  const heroImages = [
    'https://wallpapercave.com/dwp2x/wp7563284.jpg',
    'https://wallpapercave.com/dwp2x/wp7563286.jpg',
    'https://wallpapercave.com/dwp2x/wp7563295.png',
    // ... más imágenes
  ];

  const cardsData = [
    {
      image: 'https://wallpapercave.com/dwp2x/wp7563357.png',
      description: 'Descripción de la imagen 1'
    },
    {
      image: 'https://wallpapercave.com/dwp2x/wp6501320.jpg',
      description: 'Descripción de la imagen 2'
    },
    {
      image: 'https://wallpapercave.com/dwp2x/wp6748547.jpg',
      description: 'Descripción de la imagen 3'
    },
    // ... más tarjetas si es necesario
  ];

  return (
    <div>
      <Hero
        title="Bienvenido a Mi Sitio Web"
        subtitle="Explora nuestro contenido increíble"
        images={heroImages}
        buttonText="Siguiente Imagen"
        //logo={logo}
      />
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} description={card.description} />
        ))}
      </div>
      {/* Otros componentes de tu página */}
    </div>
  );
};

export default HomePage;
