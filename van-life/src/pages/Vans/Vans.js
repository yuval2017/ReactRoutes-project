import React from "react";
import './Vans.css'
import { Await, Link, defer, useLoaderData, useSearchParams } from "react-router-dom";
import './VanDetail.css'
import { getVans } from "../../api";

export async function loader() {
  return defer({
    vans: getVans(),
  });
}
export default function Vans(){
  
  const [searchParams, setSearchParams] = useSearchParams()
  const dataPromise = useLoaderData()
  const typeFilter = searchParams.get("type")

  function handleFilter(key, value){
      //clear all filtering
    if(key === 'clear-all'){
      setSearchParams(new URLSearchParams());
    }

    setSearchParams(prevParams => {
      //filter all the keys
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
  

function getVans(vansData){
    const displayVans = !typeFilter ? vansData: vansData.filter(van => van.type.toLowerCase() === typeFilter)
    return displayVans.map(vanData => (<div key={vanData.id} className="van-preview">
    {/* state goes inside uselocation to goes inside useParams */}
    <Link to= {vanData.id} state = {{search: `?${searchParams.toString()}`, type: typeFilter}}>
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
  }



  
  return (
    <div className="vans-container"> 
      <div className="explore-vans">
          Explore our van options
        </div>
    <React.Suspense fallback = {<h2>Loading vans...</h2>} >
    <Await resolve={dataPromise.data.vans}>
      {vans => {
        return (  
    <div className="vans-page-content"> 
      <div className="vans-top">
        
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
      {getVans(vans)}
      </div>
    </div>
      );
    }}
    </Await>
    </React.Suspense>
    </div>
  );
}