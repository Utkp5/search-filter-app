import React from "react";
import data from "../Data";

function Readmore() {
  return (
    <div>
    {
      data.cardData.map((item) => {
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
        )
      })
    }
    </div>
  );
}

export default Readmore;
