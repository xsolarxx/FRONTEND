import { NavLink } from "react-router-dom";
import "./Nav.css";
export const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        <button> Dashboard </button>
      </NavLink>
      <NavLink to="/company">
        <button> Company </button>
      </NavLink>
      <NavLink>
        <button>News</button>
      </NavLink>
      <NavLink>
        <button>Forum</button>
      </NavLink>
    </nav>
  );
};
