import {  useEffect ,useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import './HostVanDetail.css'



export function HostVanDetail(){
  const {id} = useParams()
  const [currentVan, setCurrentVan] = useState(null)
  useEffect(()=>{
    fetch(`/api/host/vans/${id}`)
          .then(result => result.json())
          .then(data => setCurrentVan(data.vans))
  }, [id])
  if(!currentVan){
    return <h1>Loading...</h1>
  }

  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
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
          <NavLink to="." end style={({isActive}) => isActive ? activeStyles: null}>Details</NavLink>
          <NavLink style={({isActive}) => isActive ? activeStyles: null} to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        <Outlet context={{currentVan}}/>
      </div>
    </section>
  );
}