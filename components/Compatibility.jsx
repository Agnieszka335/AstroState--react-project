import zodiacCompatibility from "../compData/zodiacCompatibility";
import { useState } from "react";


function Compatibility() {


  const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer",
  "Leo", "Virgo", "Libra", "Scorpio",
  "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];


const [sign1, setSign1] = useState(null);
const [sign2, setSign2] = useState(null);

const data = sign1 && sign2 && zodiacCompatibility[sign1][sign2];


function handleSign1Change(e) {
setSign1(e.target.value);
}
function handleSign2Change(e) {
setSign2(e.target.value);
}

    return (
   <section className="compatibility">
    <div className="container start-animation">
        <div className="comp-description">Unlock the secrets of the stars ✨
          <br/> Select two zodiac signs and explore the romantic energy between them.</div>
        <article className="comp-article">
            <div className="comp-zodiac">
            <span>Choose your zodiac sign</span>
        <form className="comp-form">
           <select value={sign1} onChange={handleSign1Change} className="comp-select primary-button">
            <option value="">Select sign</option>
          {zodiacSigns.map((sign, i) => (
            <option key={i} value={sign}>{sign}</option>
          ))}
        </select>
        </form>
        </div>

<div className="comp-zodiac">
   <span>Choose your partner's zodiac sign</span>
      <form className="comp-form">
        <select value={sign2}  onChange={handleSign2Change} className="comp-select primary-button">
          <option value="">Select sign</option>
         {zodiacSigns.map((sign, i) => (
            <option key={i} value={sign}>{sign}</option>
          ))}
        </select>
        </form>
        </div>
        </article>

  
        {sign1 && sign2 && (
          <div className="comp-result start-animation">
            {data ? (
              <>
                <h2>{sign1} ❤️ {sign2}</h2>
                <p>Compatibility: {data.compatible}</p>
                <p>{data.description}</p>
              </>
            ) : (
              <p>No compatibility data found</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Compatibility;