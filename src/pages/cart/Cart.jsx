import React from "react";
import CartItem from "./CartItem";
import { UilArrowRight } from '@iconscout/react-unicons'
import { UilArrowLeft } from '@iconscout/react-unicons'

const Cart = () => {
  return (
    <div className="container p-5">
      <div className="row pt-5 border">
        <div className="col-md-8 cart__item">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Shopping Cart</h2>
            <span>7 items</span>
          </div>

          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          
          <div className="btn btn-sm btn-light text-start mb-3"> <UilArrowLeft/> Back To Shopping</div>
        </div>
        <div className="col-md-4 cart__detail bg-light">
          <h3>Summary</h3>
          <hr className="mt-5" />
          <div className="d-flex justify-content-between">
            <span className="d-flex gap-3">
              <span>Items</span>
              <span>7</span>
            </span>
            <span>$456</span>
          </div>
          <div className="coupon pt-5">
            <h5 className="mb-4">Shipping</h5>
            <input
              type="text"
              className="form-control form-control-sm w-100 bg-white border-0 shadow-none"
            />
          </div>
          <div className="coupon pt-5">
            <h5 className="mb-4">Coupon Code</h5>
            <input
              type="text"
              className="form-control form-control-sm w-100 bg-white border-0 shadow-none"
            />
          </div>
          <hr className="my-4" />
          <div className="d-flex justify-content-between">
            <h5>Total Price</h5>
            <span>$355</span>
          </div>
          <button className="btn btn-lg btn-success w-100 border-0 shadow-none mt-5">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
