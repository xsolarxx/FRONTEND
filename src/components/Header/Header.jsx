import "./Header.css";
import { Nav } from "../Navigation/Nav";

export const Header = () => {
  return (
    <header className ="header">
      <Nav />
      <div className="video-container">
        <video className="header-video" autoPlay loop muted>
          <source src="/wind.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </header>
  );
};
