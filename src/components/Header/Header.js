import { Link, useLocation } from "react-router-dom";
import "./Header.css";

import Logo from "../../assets/img/logo.svg";

const Header = () => {
  const location = useLocation();
  return (
    <header className="Header">
      <div className="container">
        <div className="Header-content noselect">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="navigation">
            <div className="top"></div>
            <nav>
              <div>
                {location.pathname !== "/characters" ? (
                  <Link to="/characters">Characters</Link>
                ) : (
                  <span>Characters</span>
                )}
              </div>
              <div>
                {location.pathname !== "/comics" ? (
                  <Link to="/comics">Comics</Link>
                ) : (
                  <span>Comics</span>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>
    </header>
  );
};

export default Header;
