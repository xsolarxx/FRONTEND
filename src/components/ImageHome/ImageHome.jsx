/**
 * Importamos la libraria de motion
 * Asignados clases a las div
 * Percorremos con el array de image con el map
 * WhileTap ativando de la mano si moviendo con el grabbing
 * drag hace que la foto se movimenta el eixo x grabbing tipo slide
 * importamos el useState , useEffect, useRef
 * useEffect es usado para calcular la largura total del carrossel cuando el componente es montado
 * useEffect calcula la diferencia entre la largura total e a largura visible do carrossel y actualiza el estado width con esse valor.
 * carrosel.current?.scrollWidth es el total de largura  (2140)
 * carrosel.current?.offsetWidth es el total de largura que vemos (1280)
 * Creamos un useState para armacenar la largura
 * en setWidth haciemos la largura total - o que tenemos en la pag
 * DragConstraints empieza en right 0 left -width (o que estamos haciendo: passando la largura que el puede hacer el scroll hasta que llegue al final)
 * -width (la cuantidad que falta de el scroll)
 */

import './ImageHome.css';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import image1 from '/1.webp';
import image2 from '/2.jpg';
import image3 from '/3.jpg';
import image4 from '/4.jpg';
import image5 from '/5.jpg';

const images = [image1, image2, image3, image4, image5];

export const ImageHome = () => {
  const carrosel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth);
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  return (
    <div className="imageHome">
      <motion.div ref={carrosel} className="carrosel" whileTap={{ cursor: 'grabbing' }}>
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Placas" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
