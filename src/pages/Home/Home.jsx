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
        <button className="button--white button--large p-l button-hover">
          Get Started
        </button>
      </section>

      <section className="big-titel-section p-25">
        <h3>
          Solarx operates in the renewable energies market. We were born green, not made
          green.
        </h3>
      </section>

      <section className="section-consumer p-25 gap-25">
        <span className="section-consumer__image"></span>

        <span className="section-consumer__text">
          <h3>Discover, connect and transform your relationship with renewable energy</h3>
          <h4>Your gateway to a greener future. </h4>
          <p className="p-l">
            `At xSolar.com, we are dedicated to empowering individuals on their
            sustainable journey. Through our platform, you can discover, connect, and
            transform your relationship with renewable energy. Whether you are exploring
            solar, wind, or other forms of renewable energy.`
          </p>
        </span>
      </section>

      <section className="grid p-35 gap-25">
        <div className="grid-item1"></div>
        <div className="grid-item2"></div>
        <div className="grid-item3"></div>
        <div className="grid-item4"></div>
        <div className="grid-item5"></div>
      </section>

      <section className="section-banner p-50">
        <h2 className="p-35">Solar by Nature</h2>
        <div className="div-banner gap-15">
          <p>
            xSolarx is increasingly recognized in the European market as a major player in
            the promotion and development of renewable energy projects
          </p>
          <button className="button--white button--medium button-hover">
            <strong>Discover more</strong>
          </button>
        </div>
      </section>

      <ImageHome />
    </>
  );
};
