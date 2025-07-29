import zodiacData from "../data/zodiacData";
import { useState } from "react";


function AboutZodiac() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = (sign) => {
    if (sign === visible) {
      setVisible(false);
    } else {
      setVisible(sign);
    }
  };

  return (
    <div className="container zodiac-flex start-animation">
      {zodiacData.map((sign) => (
        <div className="sign-container" key={sign.name}>
          <img className="sign-img" src={sign.image} alt={sign.name} />
          <h4 className="sign-header">{sign.name}</h4>
          <div className="sign-date">{sign.date}</div>

          <button className="primary-button small-btn" onClick={() => toggleVisibility(sign.name)}>
            {visible === sign.name ? "Hide description" : "Show description"}
          </button>

          {visible === sign.name && (
            <div className="sign-description start-animation">
              {sign.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AboutZodiac;
