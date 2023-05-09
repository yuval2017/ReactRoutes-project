import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function HostLayout(){
  return(
    <>
      <nav className="host-nav">
        {/* . say i want to link where is the HostLayout was rendered */}
        {/*? if more nested routs meets it will not set active*/}
        <NavLink end activeClassName="active" to='.'>Dashboard</NavLink>
        <NavLink Name="active" to='income'>Income</NavLink>
        <NavLink activeClassName="active" to='vans'>Vans</NavLink>
        <NavLink activeClassName="active" to='reviews'>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}