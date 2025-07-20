import { useState, useEffect } from "react";

function DailyHoroscope() {
  const userName = localStorage.getItem("userName");

  const [horoscope, setHoroscope] = useState(null);
  const [sign, setSign] = useState("");

  useEffect(() => {
    if (!sign) return;

    fetch('https://horoscope-app-api.vercel.app/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to get data");
        }
      })
      .then((data) => {
        setHoroscope(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [sign]);

  function handleSignChange(e) {
    setSign(e.target.value);
  }

  return (
    <section className="daily">
      <div className="container">
        <h3 className="horoscope-header">Hello, {userName}, choose your zodiac sign</h3>

<section className="horoscope-main">
        <select value={sign} onChange={handleSignChange} className="horoscope-select primary-button">
          <option value="">Choose your sign</option>
          <option value="taurus">Taurus</option>
          <option value="aries">Aries</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>

        <article className="horoscope-results">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente delectus repudiandae molestiae adipisci quos quo magni facere provident temporibus voluptate esse, dolores, blanditiis incidunt. Natus consectetur ut illum quaerat.
    </div>
        </article>
        </section>

      </div>
    </section>
  );
}

export default DailyHoroscope;
