import React,{ useState } from 'react'
import Cards from './Cards'
import "./Filter.css"

function Filter() {

  const [shoes,setshoes] = useState(Cards)

// allShoes
  const allShoes = () => {
    const finalShoes = Cards.filter((value) => { //here filter is a not a file name its a inbuilt fun
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

//niviaShoes
const niviaShoes = (productTitles) => {
  const finalShoes = Cards.filter((value) => {
    return value.productTitle == productTitles
  })

  setshoes(finalShoes)
}

//jordanShoes
const jordanShoes = (productTitles) => {
  const finalShoes = Cards.filter((value) => {
    return value.productTitle == productTitles
  })

  setshoes(finalShoes)
}

//campusShoes
const campusShoes = (productTitles) => {
  const finalShoes = Cards.filter((value) => {
    return value.productTitle == productTitles
  })

  setshoes(finalShoes)
}









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
          <a href="">Go to search page</a>
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

export default Filter
