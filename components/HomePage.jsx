import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const [name, setName] = useState('');
    const navigate = useNavigate();
    
    function handleSubmit(e) {
   e.preventDefault();


   if (name.length < 3) {
    alert("Your name should be at least 3 characters long");
   } else {
          localStorage.setItem("userName", name);
  navigate("horoscope");
   }
 }

    return (
        <div className="container">
            <i class="fa-regular fa-star"></i>
     <h2 className="homepage-header">Welcome to AstroState</h2>
     <div className="homepage-text">Your personalized daily horoscopes, compatibility meter, and zodiac wisdom — all in one place. <br/>
         Let's see what the universe has in store for you today! </div>
     <label>Enter your name</label>
     <form onSubmit={handleSubmit}>
     <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
     <button type="submit">Begin</button>
     </form>
     </div>
    )
}

export default HomePage;