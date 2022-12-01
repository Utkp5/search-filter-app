import React from 'react'
import "./Freesolo.css"

function FreeSolo() {
  return (
    <div >
      <div className='navbar'></div>
      <div className='sidebar'>
      <input type="search" name="Search" id="" className='search'/>
        <div className='btn_div'>
          <button>All</button>
          <button>Science</button>
          <button>Maths</button>
          <button>History</button>
          <button>Java</button>
        </div>
      </div>
      <h2>Books On your Way</h2>


      <div class="container">
     <div class="card">
    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" />
    <div class="card-body">
      <div class="row">
        <div class="card-title">
          <h4>Nike Sneaker</h4>
          <h3>$120</h3>
        </div>
        <div class="view-btn">
          <a href="">View Details</a>
        </div>
      </div>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
        dignissimos.
      </p>
      <div class="btn-group">
        <div class="btn">
          <a href="">Buy Now</a>
        </div>
        <a href=""> Cancel</a>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default FreeSolo
