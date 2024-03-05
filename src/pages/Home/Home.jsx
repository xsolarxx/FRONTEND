import './Home.css';
import '../../components/Buttons/button.css';

import { ImageHome } from '../../components/ImageHome/ImageHome';

export const Home = () => {
  return (
    <>
      <section className="hero-section p-35">
        <div className="herobox p-35">
          <h1> Connecting conscious consumers with renewable companies </h1>
          <p className="p-1 p-xl">
            Explore renewable companies and connect with industry professionals
          </p>
          <button href="http://localhost:5173/register" className="button--green">
            Join us
          </button>
        </div>
      </section>

      <section className="big-title-section">
        <p>XSOLARX</p>
        <h2>
          xSolarx operates in the renewable energies market. We were born green, not made
          green.
        </h2>
      </section>

      <section className="section-consumer gap-25">
        <span className="section-consumer__image"></span>
        <span className="section-consumer__text">
          <h3>Discover, connect and transform your relationship with renewable energy</h3>
          <h4>Your gateway to a greener future. </h4>
          <p className="p-l">
            At xSolar.com, we are dedicated to empowering individuals on their sustainable
            journey. Through our platform, you can discover, connect, and transform your
            relationship with renewable energy. Whether you are exploring solar, wind, or
            other forms of renewable energy.
          </p>
        </span>
      </section>

      <div className="grid-title-with-subtitle">
        <h3>What you will find inside our platform</h3>
        <p className="p-xl">
          A community of like-minded people and a platform to learn and grow your interest
          in renewables.
        </p>
      </div>

      <section className="grid p-35 gap-15">
        <div className="grid-item1">
          <h3>News</h3>
          {/* <p>Empresas que encajen con tu idea de sostenibilidad</p> */}
        </div>
        <div className="grid-item2"></div>
        <div className="grid-item3">
          <h3>Forum</h3>
          {/* <p>Empresas que encajen con tu idea de sostenibilidad</p> */}
        </div>
        <div className="grid-item4">
          <h3>Companies</h3>
          {/* <p>Empresas que encajen con tu idea de sostenibilidad</p> */}
        </div>
        <div className="grid-item5"></div>
      </section>

      <section className="section-banner p-50">
        <h1 className="p-35">Solar by Nature</h1>
        <div className="div-banner gap-15">
          <p className="p-l">
            xSolarx is increasingly recognized in the European market as a major player in
            the promotion and development of renewable energy projects
          </p>
          <button className="button--green">Discover more</button>
        </div>
      </section>

      <div className="p-50">
        <section className="section-image">
          <h3 className="p-35">
            By valuing forestry and agroforestry resources and taking advantage of the
            sun’s rays, we believe in green and renewable energy.
          </h3>
          <button></button>
        </section>
      </div>

      <ImageHome />
    </>
  );
};
