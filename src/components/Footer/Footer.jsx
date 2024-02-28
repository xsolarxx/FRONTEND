import './Footer.css';
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="column-center">
          <h2>Follow us</h2>
          <p>Linkedin</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Podcast</p>
        </div>
        <div className="column-center">
          <h2 className="contacto">Contact</h2>
          <strong>
            <p>Email:</p>
          </strong>
          <p>xsolarxcompany@gmail.com</p>
          <strong>Address:</strong>
          <p>Plaza Jose Rinaldo,5 ,18882, Madrid</p>
        </div>
        <div className="column-center">
          <h2 className="navegacion">Navigation</h2>
          <p>Home</p>
          <p>News</p>
          <p>Companies</p>
          <p>Forum</p>
        </div>
      </div>
      <p className="rights">2024 © All rights reserved</p>
    </footer>
  );
};
