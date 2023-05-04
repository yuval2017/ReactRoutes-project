import React from "react";
import { NavLink } from "react-router-dom";
export default function Header(){
  return (
    <header className='header'>
    <div className = 'left-section'>
      <NavLink className='site-logo' to="/">#VANLIFE</NavLink>
    </div>
    <nav className='nav-bar'>
      {/* also we can use activeStyle */}
      {/* <NavLink style={({isActive}) => isActive ? style: null} className="host-nav" to="/host">Host</NavLink> */}
      <NavLink activeClassName="active" to="/host">Host</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
      <NavLink activeClassName="active" to="/vans">Vans</NavLink>
    </nav>    
  </header>
  );
}