import './Home.css';
import '../../components/Buttons/button.css';
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

      <section className="big-titel-section p-35">
        <h2>
          Solarx operates in the renewable energies market. We were born green, not made
          green.
        </h2>
      </section>

      <section className="section-consumer p-35 gap-35">
        <span className="section-consumer__image"></span>

        <span className="section-consumer__text">
          <h2>Discover, connect and transform your relationship with renewable energy</h2>
          <h4>Your gateway to a greener future. </h4>
          <p className="p-l">
            `At xSolar.com, we are dedicated to empowering individuals on their
            sustainable journey. Through our platform, you can discover, connect, and
            transform your relationship with renewable energy. Whether you are exploring
            solar, wind, or other forms of renewable energy.`
          </p>
        </span>
      </section>

      <section className="grid gap-35">
        <div className="grid-item1"></div>
        <div className="grid-item2"></div>
        <div className="grid-item3"></div>
        <div className="grid-item4"></div>
        <div className="grid-item5"></div>
      </section>

      <section className="section-banner p-50">
        <h1 className="p-35">Solar by Nature</h1>
        <div className="div-banner gap-15">
          <p>
            xSolarx is increasingly recognized in the European market as a major player in
            the promotion and development of renewable energy projects
          </p>
          <button className="button--white button--large">Discover more</button>
        </div>
      </section>

      <ImageHome />

      <div className="section3">
        <AnimatedHeading />
      </div>
    </>
  );
};
