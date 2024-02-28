import './Home.css';

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
      </div>

      <div className="section2">
        <h2>¿Alguna vez te has preguntado sobre las energías renovables? </h2>
      </div>

      <div className="section3">
        <h2>¿Que encontraras? </h2>
        <h4>Descubre tu Socio Energético: Encuentra Empresas Renovables</h4>
        <h4>Descubre tu Socio Energético: Encuentra Empresas Renovables</h4>
      </div>
    </>
  );
};
