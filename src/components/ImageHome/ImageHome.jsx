import './ImageHome.css';
import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';

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

export const ImageHome = (props) => {
  return (
    <section className="p-50">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        partialVisible={false}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        arrows={true}
        autoPlay={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={props.deviceType}
        itemClass="item"
      >
        {imagesMap.map((image) => (
          <img key={image.imgPath} src={image.imgPath} alt={image.altText} />
        ))}
      </Carousel>
    </section>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
