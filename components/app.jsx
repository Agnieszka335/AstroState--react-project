import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import DailyHoroscope from "./DailyHoroscope";
import Compatibility from "./Compatibility";
import AboutZodiac from "./AboutZodiac";
import PageNotFound from "./PageNotFound";
import HomePage from "./HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route path="/" element={<HomePage />} />
        <Route path="horoscope" element={<DailyHoroscope />} />
        <Route path="compatibility" element={<Compatibility />} />
        <Route path="signs" element={<AboutZodiac />} />
        <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
