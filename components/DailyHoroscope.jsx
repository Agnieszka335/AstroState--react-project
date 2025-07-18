import { useState, useEffect } from "react";

function DailyHoroscope() {
  const userName = localStorage.getItem("userName");

  const [horoscope, setHoroscope] = useState(null);
  const [sign, setSign] = useState("");

  useEffect(() => {
    if (!sign) return;

    fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
      method: "POST"
    })
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
        <h3>Hello, {userName}, choose your zodiac sign</h3>

        <select value={sign} onChange={handleSignChange}>
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

       
      
      </div>
    </section>
  );
}

export default DailyHoroscope;
