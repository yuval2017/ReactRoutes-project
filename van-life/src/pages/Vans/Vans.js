import React from "react";
import './Vans.css'
import { Link, useSearchParams } from "react-router-dom";
import './VanDetail.css'
export default function Vans(){


  const [searchParams, setSearchParams] = useSearchParams()
  const [vansData, setVansData] = React.useState([])

  const typeFilter = searchParams.get("type")

  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])
  function handleFilter(key, value){
      //clear all filtering
    if(key === 'clear-all'){
      setSearchParams(new URLSearchParams());
    }

    setSearchParams(prevParams => {
      // const filterParams = Array.from(prevParams.entries());
      // const existingFilter = filterParams.find(([paramKey]) => paramKey === key);
      //cear current filter
      if (value == null){
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }
  const displayVans = !typeFilter ? vansData: vansData.filter(van => van.type.toLowerCase() === typeFilter)
  const vans = displayVans.map(vanData => (<div key={vanData.id} className="van-preview">
                                            <Link to={`/vans/${vanData.id}`}>
                                              <div className="van-image-container">
                                                <img className="van-picture" src={vanData.imageUrl} alt="Not Found"/>
                                              </div>
                                               <div className="van-details">
                                                <div className="left-detail"> 
                                                  <div className="van-name">
                                                    {`${vanData.name}`}
                                                  </div>
                                                  <button className={`van-type ${vanData.type}`}>{vanData.type}</button>
                                                </div>
                                              
                                                <div className="right-detail">
                                                    <div className="van-price">
                                                      {`$${vanData.price}`}
                                                    </div>
                                                    <div className="van-per-day">
                                                        /day
                                                    </div>
                                                </div>
                                              </div> 
                                              </Link>
                                            </div>))
  
  return (
    <div className="vans-container">
      <div className="vans-top">
        <div className="explore-vans">
          Explore our van options
        </div>
        <div className="search-vans">
          <div className="buttons-search-container">
            {/* <button onClick={() => setSearchParams({type:'simple'})} className={`simple-filter ${typeFilter === "simple" ? "selected": ""}`}>Simple</button>
            <button onClick={() => setSearchParams({type:'luxury'})} className={`luxury-filter ${typeFilter === "luxury" ? "selected": ""} ` }>Luxury</button>
            <button onClick={() => setSearchParams({type:'rugged'})} className={`rugged-filter ${typeFilter === "rugged" ? "selected": ""}`}>Rugged</button> */}
            <button onClick={() => handleFilter("type", "simple")} className={`simple-filter ${typeFilter === "simple" ? "selected": ""}`}>Simple</button>
            <button onClick={() => handleFilter("type", "luxury")} className={`luxury-filter ${typeFilter === "luxury" ? "selected": ""} ` }>Luxury</button>
            <button onClick={() => handleFilter("type", "rugged")} className={`rugged-filter ${typeFilter === "rugged" ? "selected": ""}`}>Rugged</button>
          </div>
          { typeFilter ? (
          <button onClick={() => handleFilter("type", null)} className="clear-filters"> Clear filters</button>    
          ) : null}
        </div>
      </div>
      <div className="vans-grid">
      {vans}
      </div>
    </div>
  );
}