import React from 'react'

const Featured = () => {
  return (
    <div className='container'>
      <div className="d-sm-flex justify-content-between align-items-center gap-5 py-5">

      <div className="feature d-sm-flex justify-content-between align-items-center gap-3 p-5 shadow-sm bg-light">
        <div className="feature_info text-center text-sm-start">
          <h3 className="discount text-warning"> Upto 50% OFF</h3>
          <h1>Fresh Fruits Collection</h1>
          <button className=" btn btn-success">shop now</button>
        </div>
        <img className='img-fluid w-50 d-none d-md-block'  src="../images/product_pack.png" alt="" />
      </div>

      <div className="feature d-sm-flex justify-content-between align-items-center gap-3 p-5 shadow-sm primary-bg-color">
        <div className="feature_info text-center text-sm-start">
          <h3 className="discount text-warning"> Upto 50% OFF</h3>
          <h1>Fresh Vegetable Collection</h1>
          <button className=" btn btn-success">shop now</button>
        </div>
        <img className='img-fluid w-50 d-none d-md-block' src="../images/product_pack.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Featured