import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../Data";
import "./Search.css"

function Search() {

  const[filter,setfilter] = useState('')

  const searchText = (event) => {
    setfilter(event.target.value)
  }

  let dataSearch = data.cardData.filter(item => {
    return Object.keys(item).some(key => 
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  })

  
  return (
    <div>
     <p><NavLink to="/">Go to Home</NavLink></p>
      <input type="search" name="" id="" className="srch" value={filter} onChange={searchText.bind(this)}/>
      <div className="main">
      {dataSearch.map((item) => {
        return (
            <div className="card">
              <div>
                <img src={item.img} alt="" className="card_img" />
              </div>
              <div className="card_p">
                <p>{item.title}</p>
                <p>{item.describe}</p>
              </div>
            </div>
            );
          })}
        </div>
    </div>
  );
}

export default Search;
