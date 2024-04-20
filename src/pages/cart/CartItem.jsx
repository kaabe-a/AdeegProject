import React from "react";

const CartItem = () => {
  return (
    <div className="row align-items-center p-3">
      <div className="col-sm-4">
        <img
          className="img-fluid w-70 cart-image"
          src="../images/carrot.png"
          alt=""
        />
      </div>
      <div className="col-sm-2 text-start py-1">
        <h5 className="text-secondary">Carrot</h5>
        <h5 className="text-dark">Vegetables</h5>
      </div>
      <div className="col-sm-2 d-flex gap-3">
        <button className="btn btn-sm btn-success rounded-circle" type="button">
          +
        </button>
        <input
          value={4}
          className="form-control form-control-sm shadow-none border-0"
          type="text"
        />
        <button className="btn btn-sm btn-success rounded-circle" type="button">
          -
        </button>
      </div>
      <div className="col-sm-2 d-flex gap-3 text-lg-center align-items-center py-2">
        <span className="fs-5">Price</span>
        <div className="price">$4</div>
      </div>

      <div className="col-sm-2 text-md-end">
        <button  className=" w-100 btn btn-md bg-light text-dark" type="button">X</button>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default CartItem;
