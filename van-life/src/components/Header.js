import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header(){
  function fakeLogOut(){
    localStorage.removeItem("loggedin")
  }
  return (
    <header className='header'>
      <div className = 'left-section'>
        <Link className='site-logo' to="/">#VANLIFE</Link>
      </div>
      <nav className='nav-bar'>
        {/* also we can use activeStyle */}
        {/* <NavLink style={({isActive}) => isActive ? style: null} className="host-nav" to="/host">Host</NavLink> */}
        <NavLink activeclassname="active" to="host">Host</NavLink>
        <NavLink activeclassname="active" to="about">About</NavLink>
        <NavLink activeclassname="active" to="vans">Vans</NavLink>
        <NavLink activeclassname="active" to="test">Test</NavLink>

        <Link to='login' className="login-link">
          <img src="/images/Icon.png" alt="Not Found" className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>log-out</button>
      </nav>    
  </header>
  );
}