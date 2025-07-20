import { NavLink, Outlet } from "react-router-dom";
import "../styles/_main.scss";
import Footer from "./Footer";


function Navigation() {

  return (
    <section className="layout">
    <header className="header">
      <div className="inner-header">
       <NavLink to="/" className="logo nav-link">
        <img src="../assets/logo.png" alt="logo" />    
            <h1>AstroState</h1>
        </NavLink>
      <nav>
        <ul className="navigation-list">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/horoscope" className="nav-link">Daily Horoscope</NavLink></li>
          <li><NavLink to="/compatibility" className="nav-link">Compatiblity</NavLink></li>
          <li><NavLink to="/signs" className="nav-link">About Signs</NavLink></li>
        </ul>
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
