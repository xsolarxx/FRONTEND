import "./Header.css";
import { Nav } from "../Navigation/Nav";

// tenemos que hacer un conditional rendering en el header para que muestre mas cosas si el usuario esta logado

export const Header = () => {
  return (
    <header className="header">
      <Nav />
    </header>
  );
};
