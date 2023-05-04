import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
  return (
    <header className='header'>
    <div className = 'left-section'>
      <Link className='site-logo' to="/">#VANLIFE</Link>
    </div>
    <nav className='nav-bar'>
      <Link className='about-nav' to="/about">About</Link>
      <Link className='vans-nav' to="/vans">Vans</Link>
    </nav>    
  </header>
  );
}