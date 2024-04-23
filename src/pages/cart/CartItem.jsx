import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartItem = (props) => {
  const { increaseQty,decreaseQty } = useContext(CartContext);
  return (
    <div className="row align-items-center p-3">
      <div className="col-lg-3">
        <Link
          to={`/products/${props.items.id}`}
          style={{ textDecoration: "none" }}
        >
          <img
            className="img-fluid w-70 cart-image"
            src={props.items.image_url}
            alt=""
          />
        </Link>
      </div>

      <div className="col-lg-3 text-start py-1">
        <Link
          to={`/products/${props.items.id}`}
          style={{ textDecoration: "none" }}
        >
          <h5 className="text-secondary">{props.items.name}</h5>
          <h5 className="text-dark">{props.items.category.name}</h5>
        </Link>
      </div>
      <div className="col-lg-2 d-flex gap-2">
        <button
          onClick={() => increaseQty(props.items.id)}
          className="btn btn-sm btn-success rounded-circle"
          type="button"
        >
          +
        </button>
        <span>{props.items.qty}</span>
        {/* <input
          value={4}
          className="form-control form-control-sm shadow-none border-0"
          type="text"
        /> */}
        <button onClick={() => decreaseQty(props.items.id)} className="btn btn-sm btn-success rounded-circle" type="button">
          -
        </button>
      </div>
      <div className="col-lg-2 d-flex gap-2 text-lg-center align-items-center py-2">
        <span className="fs-5">Price</span>
        <div className="price">${props.items.amount}</div>
      </div>

      <div className="col-lg-2 text-md-end">
        <button
          className=" w-100 btn btn-md bg-light text-dark"
          type="button"
          onClick={() => props.removeFromCart(props.items.id)}
        >
          X
        </button>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default CartItem;
