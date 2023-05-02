import React from "react";
import '../pages/About.css'
import { Link } from "react-router-dom";
export default function About(){
  return (
    <div className="about">
      <div className="img-container">
      <img src="/images/image 54 v2.png" alt="nothing"/>
      </div>
      <div className="about-main-container">
        <h1 className="about-topic">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <div className="about-content">
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br />
            (Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="van-explore-container">
          <div className="van-explore">
            <div className="about-dest-van-container">
              <div>Your destination is waiting.</div>
              <div>Your van is ready.</div>
            </div>
            <Link className="explore-vans-button" to="/vans">Explore our vans</Link>     
          </div>
        </div>
      </div>
      <button className="van-life-button">Ⓒ 2022 #VANLIFE</button>

    </div>
    
  );
}