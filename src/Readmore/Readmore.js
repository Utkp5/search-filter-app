import React from "react";
import data from "../Data";
import "./Readmore.css";
import useCollapse from "react-collapsed";
import { useState } from "react";

function Readmore() {
  
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className="first_div">
      {data.cardData.map((item) => {
        return (
          <div className="card">
            <div><img src={item.img} alt="" className="card_img" /></div>
            <div className="card_p">
              <p>{item.title}</p>
              <p>{item.describe}</p>
              <section {...getCollapseProps()}>Collapsed content 🙈</section>
              <button {...getToggleProps({ onClick: () => 
                setExpanded((prevExpanded) => !prevExpanded),})}>{isExpanded ? 'Collapse' : 'Expand'}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Readmore;
