import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

const AnimatedHeading = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detectar si la sección está en la ventana de visualización
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('animatedSection').offsetTop;
      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Definir la animación
  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    marginTop: isVisible ? 0 : -100,
    config: { duration: 1500 },
  });

  return (
    <div id="animatedSection">
      <animated.h2 style={animationProps}>¿Qué encontrarás?</animated.h2>
      <animated.h4 style={animationProps}>
        Descubre tu Socio Energético: Encuentra Empresas Renovables
      </animated.h4>
      <animated.h4 style={animationProps}>
        Actualizate con las noticias mas recientes sobre las energías renovables
      </animated.h4>
      <animated.h4 style={animationProps}>
        Interactua en nuestro forum para debatir sobre temas energéticos
      </animated.h4>
    </div>
  );
};
export default AnimatedHeading;
