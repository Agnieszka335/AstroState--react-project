import zodiacData from "../data/zodiacData";
import { useState } from "react";

function AboutZodiac() {


    return (
    <div className="container zodiac-flex start-animation">
      {zodiacData.map((sign) => (
        <div className="sign-container" key={sign.name}>
          <img className="sign-img" src={sign.image} alt={sign.name} />
          <h4 className="sign-header">{sign.name}</h4>
          <div className="sign-date">{sign.date}</div>

          <div className="sign-description">{sign.description}</div>
        </div>
      ))}
    </div>
    )
}

export default AboutZodiac;