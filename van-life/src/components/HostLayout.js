import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function HostLayout(){
  return(
    <>
      <nav className="host-nav">
        {/* . say i want to link where is the HostLayout was rendered */}
        {/*? if more nested routs meets it will not set active*/}
        <NavLink end activeclassname="active" to='.'>Dashboard</NavLink>
        <NavLink activeclassname="active" to='income'>Income</NavLink>
        <NavLink activeclassname="active" to='vans'>Vans</NavLink>
        <NavLink activeclassname="active" to='reviews'>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}