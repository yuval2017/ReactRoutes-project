import React from "react";
import './Vans.css'
export default function Vans(){
  const [vansData, setVansData] = React.useState([])
  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])
  const vans = vansData.map(vanData => (<div key={vanData.id} className="van-preview">
                                              <div className="van-image-container">
                                                <img className="van-picture" src={vanData.imageUrl}/>
                                              </div>
                                              <div className="van-details">
                                                <div className="left-detail"> 
                                                  <div className="van-name">
                                                    {vanData.name}
                                                  </div>
                                                  <button>{vanData.type}</button>
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
                                            </div>))
  
  return (
    <div className="vans-container">
      <div className="vans-top">
        <div className="explore-vans">
          Explore our van options
        </div>
        <div className="search-vans">
          <div className="buttons-search-container">
            <button>Simple</button>
            <button>Luxury</button>
            <button>Rugged</button>
          </div>
          <div className="clear-container">
            <a>Clear filters</a>
          </div>
        </div>
      </div>
      <div className="vans-grid">
      {vans}
      </div>
    </div>
  );
}