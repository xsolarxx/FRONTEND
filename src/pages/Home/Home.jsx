import './Home.css';

import { NavLink } from 'react-router-dom';
import { SeeCompanies } from '../../components/SeeCompanies/SeeCompanies';
import { ImageHome } from '../../components/ImageHome/ImageHome';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <section className="hero-section">
        <div className="herobox">
          <h1> Connecting conscious consumers with renewable companies </h1>
          <h4>Explore renewable companies and connect with industry professionals</h4>
          <button
            className="button--blue"
            onClick={() => {
              user ? navigate('/dashboard') : navigate('/register');
            }}
          >
            {user ? 'Your Dashboard' : 'Join us'}
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

      <section className="section-consumer">
        <div className="section-consumer__image"></div>
        <div className="section-consumer__text">
          <h3>Discover, connect and transform your relationship with renewable energy</h3>
          <h4>Your gateway to a greener future </h4>
          <p>
            At xSolar.com, we are dedicated to empowering individuals on their sustainable
            journey. Through our platform, you can discover, connect, and transform your
            relationship with renewable energy. Whether you are exploring solar, wind, or
            other forms of renewable energy.
          </p>
        </div>
      </section>

      <div className="grid-title-with-subtitle">
        <h1>What you will find inside our platform</h1>
        <h5>
          A community of like-minded people and a platform to learn and grow your interest
          in renewables.
        </h5>
      </div>

      <div className="services-parent-container">
        <div className="services-container">
          <div className="service1"></div>
          <div className="Blue-box-title">
            <h1>Companies</h1>
            <p>Companies that fit with your idea of sustainability</p>
            <SeeCompanies />
          </div>
        </div>
        <div className="services-container">
          <div className="Blue-box-title">
            <h1>News</h1>
            <p>Learn and grow your knolwedge</p>
            <NavLink className="link-news" to="/news">
              <button className="button--green">See news</button>
            </NavLink>
          </div>
          <div className="service4"></div>
          <div className="service5"></div>
        </div>
        <div className="services-container">
          <div className="service6"></div>
          <div className="Blue-box-title">
            <h1>Forum</h1>
            <p>A platform to share your thoughts</p>
            <button
              className="button--green"
              onClick={() => {
                user ? navigate('/ForumPage') : navigate(`/register`);
              }}
            >
              {user ? 'Explore forums' : 'Register to see forums'}
            </button>
          </div>
        </div>
      </div>

      <section className="section-banner">
        <h1 className="solarbynature">Solar by Nature</h1>
        <div className="div-banner">
          <h4>
            xSolarx is increasingly recognized in the European market as a major player in
            the promotion and development of renewable energy
          </h4>
          <NavLink to="/register">
            <button className="button--green">Discover more</button>
          </NavLink>
        </div>
      </section>

      <div>
        <section className="section-image">
          <div className="section-image-box">
            <h2>
              By valuing forestry and agroforestry resources and taking advantage of the
              sun’s rays, we believe in green and renewable energy
            </h2>
          </div>
        </section>
      </div>

      <ImageHome />
    </>
  );
};
