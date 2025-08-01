import { useState, useEffect } from "react";

function DailyHoroscope() {
  const userName = localStorage.getItem("userName");

  const [horoscope, setHoroscope] = useState(null);
  const [sign, setSign] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!sign) return;
    setIsLoading(true);

    fetch(`https://api.api-ninjas.com/v1/horoscope?zodiac=${sign}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to get data");
        }
      })
      .then((data) => {
        setHoroscope(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [sign]);

  function handleSignChange(e) {
    setSign(e.target.value);
  }

  return (
    <section className="daily">
      <div className="container start-animation">
        <h3 className="horoscope-header">
          Hello, {userName}, choose your zodiac sign ♑
        </h3>

        <section className="horoscope-main">
          <select
            value={sign}
            onChange={handleSignChange}
            className="horoscope-select primary-button"
          >
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

          <article className="horoscope-results start-animation">
            {isLoading && <p>Loading...</p>}

            {horoscope && (
              <div className="horo-api">
                <div className="horoscope-date">Today's date: {horoscope.date}</div>
                <div className="horoscope-sign">{horoscope.sign}</div>
                <div className="horoscope-description start-animation">
                  {horoscope.horoscope}
                </div>
              </div>
            )}
          </article>
        </section>
      </div>
    </section>
  );
}

export default DailyHoroscope;
