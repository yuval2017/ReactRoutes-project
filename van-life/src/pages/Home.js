import React from "react";
import "../pages/Home.css"
export default function Home(){
  return(
    <div className="home">
      <div className="home-content">
        <h1 className="home-topic">You got the travel plans, we got the travel vans.</h1>
        <div className="home-text">
          <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          <button>Find your van</button>
        </div>
      </div>
    </div>
  );
}