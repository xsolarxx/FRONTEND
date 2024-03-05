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
// ImageHome.js

import './ImageHome.css';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
  {
    imgPath: '/6.jpg',
    altText: 'windmills and solar panels',
  },
];

export const ImageHome = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update(); // Actualiza el swiper después de cargar las imágenes
    }
  }, []);

  return (
    <div className="imageHome">
  <Swiper
  ref={swiperRef}
  spaceBetween={20}  // Espacio entre las imágenes
  slidesPerView={3}   // Mostrar tres imágenes a la vez
  navigation
  scrollbar={{ draggable: true }}
  className="swiper-container"  // Agrega la clase 'swiper-container'
>
  <div className="swiper-wrapper">  {/* Agrega el contenedor 'swiper-wrapper' */}
    {imagesMap.map((image, index) => (
      <SwiperSlide key={index} className="swiper-slide">  {/* Agrega la clase 'swiper-slide' */}
        <div className="item">
          <img src={image.imgPath} alt={image.altText} />
        </div>
      </SwiperSlide>
    ))}
  </div>
</Swiper>
    </div>
  );
};
