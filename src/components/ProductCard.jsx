import React from "react";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";

const Card = (props) => {
  return (
    <div className="product_card">
      <div className="col">
        <div className="card shadow-sm border-0">
          <div className="top-img position-relative bg-light">
            <img 
              src={props?.image_link }
              className="card-img-top img-fluid"
              style={{ height: "150px" }}
              alt="..."
            />
          </div>
          <div className="card-body position-relative">
            <h5 className="card-title text-center short-title">{props.name}</h5>
            <h5 className="text-secondary text-center">{props.category}</h5>
            <p className="card-text text-center short-description">{props.description}</p>
          </div>
          <div className="d-flex justify-content-center gap-4">
            <span className="text-center">${props.amount}/Kg</span>
            <span className="text-center">{props?.quantity}/qty</span>
          </div>
          <a
            href="/products"
            className="btn text-light m-4"
            style={{ backgroundColor: "#02CA89" }}
          >
            <UilShoppingCartAlt /> Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
