import React, { useState } from "react";
import "./Productview.css";

function Productview() {

    const ProductData = {
        Image : [
            "https://media.istockphoto.com/id/1440617913/photo/bunch-of-books-and-schoolboy.jpg?b=1&s=170667a&w=0&k=20&c=HgHq0wsEUtxuoRJ36viUagHzgiRtrMzyBa8PMez73u4=",
            "https://media.istockphoto.com/id/1341381732/photo/young-student-soldier-in-uniform.jpg?b=1&s=170667a&w=0&k=20&c=PXjZ58u8CFaVczUPbTLIOooNCuf4ch839auGrukDyLc=",
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ]
    }

    const [data,setdata] = useState({image : ProductData.Image[0], index:0})


  return (
    <div className="ProductViewSection">
      <div className="row">
        <div className="columnOne">
        {
            ProductData.Image.map((image,index) => {
                return (index < 4) ?
                <div key={index} classname="productrow" onClick={() => setdata({image,index})} style={{border: data.image === image ? '2px solid red' : ''}}>
                    <img src={image} alt="" className="prdct_img"/>
                </div> : null
            })
        }
        </div>
        <div className="columnTwo">
        <div className="displayproduct">
        <div className="colmTwo_div">
            <img src={data ? data.image : ProductData.Image[0]} alt="" className="prdct_img"/>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Productview;
