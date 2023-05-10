import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header(){
  return (
    <header className='header'>
    <div className = 'left-section'>
      <NavLink className='site-logo' to="/">#VANLIFE</NavLink>
    </div>
    <nav className='nav-bar'>
      {/* also we can use activeStyle */}
      {/* <NavLink style={({isActive}) => isActive ? style: null} className="host-nav" to="/host">Host</NavLink> */}
      <NavLink activeclassname="active" to="/host">Host</NavLink>
      <NavLink activeclassname="active" to="/about">About</NavLink>
      <NavLink activeclassname="active" to="/vans">Vans</NavLink>
      <Link to='login' className="login-link">
        <img src="/images/Icon.png" alt="Not Found" className="login-icon" />
      </Link>
    </nav>    
  </header>
  );
}