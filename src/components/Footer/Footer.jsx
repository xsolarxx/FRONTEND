import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="column-center">
          <h2>Síguenos</h2>
          <p>Linkedin</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>PodCast</p>
        </div>
        <div className="column-center">
          <h2 className="contacto">Contacto</h2>
          <strong><p>Email:</p></strong><p>xsolarxcompany@gmail.com</p>
         <strong>Dirección:</strong><p>Plaza Jose Rinaldo,18882, Madri</p>
        </div>
        <div className="column-center">
          <h2 className="navegacion">Navegación</h2>
        </div>
      </div>
      <p>2024 © All rights reserved</p>
    </footer>
  );
};