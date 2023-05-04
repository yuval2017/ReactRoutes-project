import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function HostLayout(){
  return(
    <>
      <nav className="host-nav">
        {/* if more nested routs meets it will not set active*/}
        <NavLink end activeClassName="active" to='/host'>Dashboard</NavLink>
        <NavLink activeClassName="active" to='/host/income'>Income</NavLink>
        <NavLink activeClassName="active" to='/host/vans'>Vans</NavLink>
        <NavLink activeClassName="active" to='/host/reviews'>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}