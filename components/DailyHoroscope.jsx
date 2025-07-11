function DailyHoroscope() {

  const userName = localStorage.getItem("userName");

  return (
    <h3>{userName}</h3>
  )
}

export default DailyHoroscope;