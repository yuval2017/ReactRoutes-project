import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import './VanDetail.css'
export default function VanDetail(){  
  const params = useParams()
  const location = useLocation()

  const [van, setVan] = React.useState(undefined)
  React.useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
          .then(res=>res.json())
          .then(data => setVan(data.vans))
  },[params])
  const search = location.state?.search || ""
  const type = location.state?.type || "all"

  return (
    <div className="van-detail-container">
        <Link to={`..${search}`} relative="path" className="back-to-all-vans-button">
          &larr; <span>Back to {type} vans</span>
        </Link>
      {van ? ( 
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
      ): <div>Load...</div>}

    </div>
   );
}