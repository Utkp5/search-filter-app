import React from "react";
import data from "../Data";
import "./Search.css"

function Search() {
  return (
    <div>
      <input type="search" name="" id="" className="srch" />
      <div className="main">
      {data.cardData.map((item) => {
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
