import './Home.css';
import '../../main';
import AnimatedHeading from '../../components/AnimationScroll/AnimationScroll';
import { ImageHome } from '../../components/ImageHome/ImageHome';

export const Home = () => {
  return (
    <>
      <section className="hero-section p-35">
        <h1> Connecting conscious consumers with renewable companies </h1>
        <p className="p-1 p-l">
          Explore renewable companies and connect with industry professionals
        </p>
        <button className="button--white button--large p-l">Get Started</button>
      </section>

      <section className="big-titel-section">
        <h1>
          Solarx operates in the renewable energies market. We were born green, not made
          green.
        </h1>
      </section>

      <section className="section-consumer p-35 gap-35">
        <span className="section-consumer__image"></span>

        <span className="section-consumer__text">
          <h2>Discover, connect and transform your relationship with renewable energy</h2>
          <h4>Your gateway to a greener future. </h4>
          <p className="p-l">
            At xSolar.com, we're dedicated to empowering individuals on their sustainable
            journey. Through our platform, you can discover, connect, and transform your
            relationship with renewable energy. Whether you're exploring solar, wind, or
            other forms of renewable energy.
          </p>
        </span>
      </section>
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
