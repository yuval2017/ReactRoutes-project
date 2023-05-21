import React from "react";
import './HostVans.css'
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../util";

export async function loader({request}) {
  await requireAuth(request)
  return getHostVans()
}
export default function HostVans(){
  const vans = useLoaderData()
 
  
  const vansData = vans.map(van =>
    <Link
      to={van.id}
      key={van.id}
      >
      <div className="host-van-preview">
        <div className="host-van-detalis">
          <div className="host-van-image-container">
            <img className="host-van-image" src={van.imageUrl} alt="Not Found"/>
          </div>
          <h3 className="host-van-price">{van.name}<br/><span style = {{fontWeight: 'none', fontSize: '14px'}}>{`${van.price}$/day`}</span></h3> 
          
        </div>
        <div className="host-van-edit-text">Edit</div>
      </div>
    </Link>
    )


  return(
    <div className="host-vans-container">
      <div className="host-van-top-content">
        <h1>Welcome!</h1>
        <div className="income-container">
          <div>Income last 30 days</div>
          <div className="detail-text">Details</div>
          <div>price here</div>
        </div>
        
      </div>

      <div className="host-van-middle-content">
        <h2>
          <span style={{ marginRight: "10px" }}>{`Review score ${"score-here"}`}</span>
          <img src="../images/Star 3.png" alt="Not Found"/>
          <span style={{ marginLeft: "10px" }}>{`/`}</span>
        </h2>
        <div className="detail-text">Details</div>
      </div>

      <div className="host-van-bottom-content">
        <div className="topic-list-vans-container" >
          <h2>Your listed vans</h2>
          <div className="view-all-text">View all</div>
        </div>
        <div className="host-vans-container">
          {vansData && vansData}
        </div>
      </div>
      
    </div>
  );
}