import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserInfo from "../userInfo/index";
import "./index.css";

const Header = ({ isAuthenticated, setIsAuthenticated, credentials, setCredentials }) => {
  const navigate = useNavigate();
  const [menuOptions, setMenuOptions] = useState([]);
  const [toggleIcon, setToggleIcon] = useState("toggle");
  const [menuActive, setMenuActive] = useState("header__menu");
  const { pathname } = useLocation();


  const closeSession = () => {
    setIsAuthenticated(false);
    setCredentials({});
    localStorage.removeItem("user");
    navigate("/");
    navToggle();
  };



  const navToggle = () => {
    menuActive === "header__menu"
      ? setMenuActive("header__menu header__active")
      : setMenuActive("header__menu");
    toggleIcon === "toggle"
      ? setToggleIcon("toggle toggle__active")
      : setToggleIcon("toggle");
  };

  useEffect(() => {
    if (isAuthenticated) {
      setMenuOptions([
        {
          name: "Mi Cuenta",
          path: "/"
        },
        {
          name: "Mis Reservas",
          path: "/myreservations"
        }
      ]);
    } else if (pathname === "/login") {
      setMenuOptions([
        {
          name: "Crear cuenta",
          path: "/register"
        }
      ]);
    } else if (pathname === "/register") {
      setMenuOptions([
        {
          name: "Iniciar sesión",
          path: "/login"
        }
      ]);
    } else {
      setMenuOptions([
        {
          name: "Iniciar sesión",
          path: "/login"
        },
        {
          name: "Crear cuenta",
          path: "/register"
        }
      ]);
    }
  }, [pathname]);

  return (
    <nav className="gv-container-header">
      <div className="gv-container-header-position">
        <Link to="/">
          <h1 style={{ color: "#fff" }}>FAN<span style={{ color: "#ed563b" }}>TUR</span></h1>
        </Link>
        <div className={menuActive} /*Menu desplegable para version movil */>
          <div className="topMenu">
            {isAuthenticated ? (
              <div className="gv-info-position-top-menu">
                <UserInfo userName={credentials.name} />
              </div>
            ) : (
              <h2 className="gv-info-position-top-menu">Menú</h2>
            )}
          </div>
          <div className="bottomMenu" style={isAuthenticated ? { justifyContent: "space-between" } : {}}>
            {isAuthenticated ? (
              <>
                <div className="gv-menu-list-header-movil">
                  <ul>
                    {menuOptions.map((item, index) => (
                      <li key={index} className="gv-option-list-menu">
                        <Link to={item.path} onClick={navToggle}>
                          <p>{item.name}</p>
                        </Link>
                        {menuOptions.length - 1 > index && <hr />}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "100%" }}>
                  <div className="gv-logout-message">
                    <div className="gv-close-session-menu-movil">
                      <p>
                        ¿Deseas
                        <span onClick={closeSession}> cerrar sesión</span>?
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="socialMediaIcons">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="gv-social-icon"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="gv-social-icon"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="gv-social-icon"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="gv-social-icon"
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="gv-menu-list-header-movil">
                  <ul>
                    {menuOptions.map((item, index) => (
                      <li key={index} className="gv-option-list-menu">
                        <Link to={item.path} onClick={navToggle}>
                          <p>{item.name}</p>
                        </Link>
                        {menuOptions.length - 1 > index && <hr />}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="socialMediaIcons">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="gv-social-icon"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="gv-social-icon"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="gv-social-icon"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="gv-social-icon"
                  ></FontAwesomeIcon>
                </div>
              </>
            )}
          </div>
        </div>
        <div onClick={navToggle} className={toggleIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className="gv-info-desktop-size" /* Esto es donde va a ir la info del user si esta logged o las opciones de inicio de sesion o registro */
        >
          {isAuthenticated ? (
            <div>
              <UserInfo userName={credentials.name} closeSession={closeSession} />
            </div>
          ) : (
            <div>
              <ul className="buttons">
                {pathname === "/" && <li className="scroll-to-section"><a href="#top" style={{ color: "#fff" }}>Home</a></li>}
                {pathname === "/" && <li className="scroll-to-section"><a href="#features" style={{ color: "#fff" }}>Nuestros Servicios</a></li>}
                {pathname === "/" && <li className="scroll-to-section"><a href="#our-classes" style={{ color: "#fff" }}>Fases</a></li>}
                {pathname === "/" && <li className="scroll-to-section"><a href="#schedule" style={{ color: "#fff" }}>Conocenos</a></li>}
                {menuOptions.map((item, index) => (
                  <li key={index} className="button">
                    <Link to={item.path}>
                      <p>{item.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
