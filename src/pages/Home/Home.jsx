import './Home.css';
import '../../main';
import AnimatedHeading from '../../components/AnimationScroll/AnimationScroll';
import { ImageHome } from '../../components/ImageHome/ImageHome';

export const Home = () => {
  return (
    <>
      <div className="videoSection">
        <video className="video" autoPlay loop muted>
          <source src="/wind.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="section1">
        <h1>Transformando el Futuro con Energía Renovable </h1>
        <h5>Conéctate con la Innovación Sostenible en xSolar</h5>
        <button>Find out more</button>
      </div>
      <ImageHome />
      <div className="section2">
        <h2>¿Alguna vez te has preguntado sobre las energías renovables? </h2>
      </div>

      <div className="section3">
        <AnimatedHeading />
      </div>

      <div className="section4">
        <div className="column1">
          <h1> Global by Nature </h1>
        </div>
        <div className="column2">
          <h6>
            Greenvolt is increasingly recognised in the European market as a major player
            in the promotion and development of renewable energy projects
          </h6>
          <button className="button2"> Sustainability </button>
        </div>
      </div>
    </>
  );
};
