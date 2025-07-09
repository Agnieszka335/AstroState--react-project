import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import DailyHoroscope from "./DailyHoroscope";
import Compatibility from "./Compatibility";
import AboutZodiac from "./AboutZodiac";
import PageNotFound from "./PageNotFound";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/horoscope" element={<DailyHoroscope />} />
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/signs" element={<AboutZodiac />} />
        <Route path="/notfound" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
