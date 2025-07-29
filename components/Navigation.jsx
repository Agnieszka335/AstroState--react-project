import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "../styles/_main.scss";
import logo from "../assets/logo.png";
import Footer from "./Footer";


function Navigation() {

const [menu, setMenu] = useState(false);

const toggleMenu = () => {
  setMenu(!menu);
}

  return (
    <section className="layout">
    <header className="header">
      <div className="inner-header">
       <NavLink to="/" className="logo nav-link">
        <img src={logo} alt="logo" />    
            <h1>AstroState</h1>
        </NavLink>
      <nav>
        <ul className={`navigation-list ${menu ? "mobile-menu" : ""}`}>
          <li><NavLink to="/" className="nav-link" onClick={() => setMenu(false)}>Home</NavLink></li>
          <li><NavLink to="/horoscope" className="nav-link" onClick={() => setMenu(false)}>Daily Horoscope</NavLink></li>
          <li><NavLink to="/compatibility" className="nav-link" onClick={() => setMenu(false)}>Compatibility</NavLink></li>
          <li><NavLink to="/signs" className="nav-link" onClick={() => setMenu(false)}>About Signs</NavLink></li>
        </ul>
        <button onClick={toggleMenu} className="nav-burger">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
      </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
</section>
  );
}

export default Navigation;
