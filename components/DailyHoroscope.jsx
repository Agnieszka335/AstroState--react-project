function DailyHoroscope() {

  const userName = localStorage.getItem("userName");

  return (
    <section className="daily">
    <div className="container">
    <h3>Hello, {userName}, choose your zodiac sign</h3>
    </div>
    </section>
  )
}

export default DailyHoroscope;