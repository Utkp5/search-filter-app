import React from "react";
import data from "../Data";
import "./Readmore.css"
import useCollapse from 'react-collapsed'

function Readmore() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className="first_div">
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
