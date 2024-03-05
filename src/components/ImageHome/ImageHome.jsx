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

const imagesMap = [
  {
    imgPath: '/wind.jpg',
    altText: 'windmills in a field',
  },
  {
    imgPath: '/hidraulica.webp',
    altText: 'Water flowing through a dam',
  },
  {
    imgPath: '/1.webp',
    altText: 'windmills and solar panels',
  },
  {
    imgPath: '/naturaleza.jpg',
    altText: 'windmills for the sunset',
  },
  {
    imgPath: '/naturaleza2.jpg',
    altText: 'mountains and pine trees',
  },
  {
    imgPath: '/perro.jpg',
    altText: 'A dog chilling',
  },
  {
    imgPath: '/2.jpg',
    altText: 'windmills and solar panels',
  },
  {
    imgPath: '/installing.png',
    altText: 'An engineer with solar panels',
  },
];

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
          {imagesMap.map((image) => (
            <motion.div className="item" key={image.imgPath}>
              <img src={image.imgPath} alt={image.altText} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
