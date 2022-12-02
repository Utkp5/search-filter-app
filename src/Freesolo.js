import React,{ useState } from 'react'
import Cards from './Cards'
import "./Freesolo.css"

function FreeSolo() {

  const [shoes,setshoes] = useState(Cards)
  const [text,settext] = useState()

// allShoes
  const allShoes = () => {
    const finalShoes = Cards.filter((value) => {
      return value;
    })
    setshoes(finalShoes)
  }

// nikeShoes
const nikeShoes = (productTitles) => {
  const finalShoes = Cards.filter((value) => {
    return value.productTitle == productTitles
  }) 

  setshoes(finalShoes)
}


const niviaShoes = (productTitles) => {
  const finalShoes = Cards.filter((value) => {
    return value.productTitle == productTitles
  })

  setshoes(finalShoes)
}

const jordanShoes = (productTitles) => {
  const finalShoes = Cards.filter((value) => {
    return value.productTitle == productTitles
  })

  setshoes(finalShoes)
}


const campusShoes = (productTitles) => {
  const finalShoes = Cards.filter((value) => {
    return value.productTitle == productTitles
  })

  setshoes(finalShoes)
}


// search functionality
// const changeHandle = (e) => {
//     if (text == " ") {
//       return e;
//     }
//     else {
//       const filterData = shoes.filter(item => item.productTitle.toLowerCase().startsWith(text.toLowerCase))
//       return filterData;
//     }  
// }







  return (
    <div >
      <div className='navbar'></div>
      <div className='sidebar'>
      <input type="search" name="Search" id="" className='search' />
        <div className='btn_div'>
          <button onClick={allShoes}>All</button>
          <button onClick={() => nikeShoes('Nike')}>nike</button>
          <button onClick={() => niviaShoes('Nivia')}>nivia</button>
          <button onClick={() => jordanShoes('jordan')}>jordan</button>
          <button onClick={() => campusShoes('Campus')}>campus</button>
        </div>
      </div>
      <h2>Books On your Way</h2>

      

      {
        shoes.map((prodct) => {
            return (
                <div className="container">
                <div className="card">
                <img src={prodct.productImg} alt=""/>
                <div className="card-body">
              <div className="row">
                <div className="card-title">
                  <h4>{prodct.productTitle}</h4>
                  <h3>{prodct.productprice}</h3>
                </div>
                <div className="view-btn">
                  <a href="">View Details</a>
                </div>
              </div>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
                dignissimos.
              </p>
              <div className="btn-group">
                <div className="btn">
                  <a href="">Buy Now</a>
                </div>
                <a href=""> Cancel</a>
              </div>
            </div>
        </div>
    </div>
            )
        })
      }


    </div>
  )
}

export default FreeSolo
