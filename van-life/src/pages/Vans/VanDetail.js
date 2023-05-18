import React from "react";
import { Link, useLoaderData, useLocation} from "react-router-dom";
import './VanDetail.css'
import { getVans } from "../../api";

export async function loader({ params }){
  return getVans(params.id)
}
export default function VanDetail(){  
  const location = useLocation()
  const van = useLoaderData()

  const search = location.state?.search || ""
  const type = location.state?.type || "all"

  return (
    <div className="van-detail-container">
        <Link to={`..${search}`} relative="path" className="back-to-all-vans-button">
          &larr; <span>Back to {type} vans</span>
        </Link>     
        <div className="van-detail"> 
          <div className="van-image-container"> 
            <img className="van-image" src={van.imageUrl} alt="Not Found"/>
          </div>
          <button className={`van-type ${van.type} selected` } >{van.type}</button>
          <h2>{van.name}</h2>
          <div className="van-price"><span>{`${van.price}$`}</span>/day</div>
          <p className="van-description">{van.description}</p>
          <button className="rent-button">Rent this van</button>
        </div>
    </div>
   );
}