import React from 'react'
import { UilShoppingCartAlt } from "@iconscout/react-unicons";

const Card = (props) => {
  return (
    <div className="product_card">
    <div className="col">
      <div className="card shadow-sm border-0">
        <div className="top-img position-relative bg-light">
          <img
            src={props.image_link}
            className="card-img-top img-fluid"
            style={{ height: "150px" }}
            alt="..."
          />
        </div>
        <div className="card-body position-relative">
          <h5 className="card-title text-center">{props.name}</h5>
          <h5 className="text-secondary text-center">{props.category}</h5>
          <p className="card-text text-center">{props.description}</p>
        </div>
        <span className="text-center">${props.price_per_kg}/Kg</span>
        <a
          href="#"
          className="btn text-light m-4"
          style={{ backgroundColor: "#02CA89" }}
        >
          <UilShoppingCartAlt /> Add
        </a>
      </div>
    </div>
  </div>
  )
}

export default Card