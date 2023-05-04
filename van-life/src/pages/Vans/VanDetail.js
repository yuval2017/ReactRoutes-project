import React from "react";
import { Link, useParams } from "react-router-dom";
import './VanDetail.css'
export default function VanDetail(){  
  const params = useParams()
  const [van, setVan] = React.useState(undefined)
  React.useEffect(()=>{
    fetch(`/api/vans/${params.id}`)
          .then(res=>res.json())
          .then(data => setVan(data.vans))
  },[params])
  return (
    <div className="van-detail-container">
      {van ? (
        
        <div className="van-detail"> 
          <div className="vans-link">
            <Link to="/vans">Back to all vans</Link>
          </div>
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