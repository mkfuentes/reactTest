import React from 'react';
import Hero from './Hero';
import logo from './img/woolmarkimagelogo-1024x576.png'; // Reemplaza con la ruta correcta de tu logotipo

const HomePage = () => {
  const heroImages = [
    'https://wallpapercave.com/wp/wp6501320.jpg',
    'https://wallpapercave.com/wp/wp2088569.jpg',
    'https://wallpapercave.com/wp/wp7563482.jpg',
    // ... más imágenes
  ];

  return (
    <div>
      <Hero
        title="Bienvenido a Mi Sitio Web"
        subtitle="Explora nuestro contenido increíble"
        images={heroImages}
        buttonText="Siguiente Imagen"
        logo={logo}
      />
      {/* Otros componentes de tu página */}
    </div>
  );
};

export default HomePage;
