import { useState } from "react";
import { NavLink } from "react-router-dom";


function HomePage() {


  return (
    <header>
      <nav>
        <div>Logo</div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/horoscope">Daily Horoscope</NavLink></li>
          <li><NavLink to="/compatibility">Compatiblity</NavLink></li>
          <li><NavLink to="/signs">About Signs</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default HomePage;
