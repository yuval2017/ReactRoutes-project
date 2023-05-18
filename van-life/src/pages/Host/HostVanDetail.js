import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import './HostVanDetail.css'

import { requireAuth } from "../../util";
import { getHostVans } from "../../api";

export async function loader({ params }) {
  await requireAuth()
  return getHostVans(params.id)
}

export function HostVanDetail(){
  
  const currentVan = useLoaderData()
  if (currentVan === null){
    return (<div>not good</div>);
  }
  return(
    <section className="host-van-section">
      <Link to=".." relative="path" className="back-to-all-vans-button">
          &larr; <span>Back to all vans</span>
        </Link>
      <div className="host-van-container">
        {/* relative will know he will back only ones in the hirarchi and not to the parent rout */}
        
        <div className="host-van">
          <div className="host-van-img-container">

            <img src={currentVan.imageUrl} alt="Not Found"/>
          </div>
          <div className="host-van-detail">
            <button className={`van-type ${currentVan.type} selected`}>
              {currentVan.type}
            </button>
            <div>{currentVan.name}</div>
            <div>{currentVan.price}</div>
          </div>
        </div>
        <nav className="host-nav-container">
          <NavLink to="." end activeclassname = "active" >Details</NavLink>
          <NavLink to="pricing" activeclassname = "active" >Pricing</NavLink>
          <NavLink to="photos" activeclassname = "active" >Photos</NavLink>
        </nav>
        {/* sent context  */}
        <Outlet context={{currentVan}}/>
      </div>
    </section>
  );
}