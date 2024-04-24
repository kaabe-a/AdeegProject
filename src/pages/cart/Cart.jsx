import React from "react";
import CartItem from "./CartItem";
import { UilArrowRight } from "@iconscout/react-unicons";
import { UilArrowLeft, UilMinusCircle } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart,total,qty } = useContext(CartContext);
  return (
    <div className="container p-5" style={{marginTop:"9rem"}}>
      <div className="row pt-5 border">
        <div className="col-md-8 cart__item">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Shopping Cart</h2>
            <span>{qty} items</span>
          </div>

          {cart.map((items) => {
            return <CartItem items={items} removeFromCart={removeFromCart} />;
          })}
          <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
            <Link to={`/products/`} style={{ textDecoration: "none" }}>
              <span className="btn btn-sm bg-light text-start">
                <UilArrowLeft /> Back To Shopping
              </span>
            </Link>
            <span
              onClick={() => clearCart()}
              className="btn btn-sm bg-danger text-white"
            >
              <UilMinusCircle size="15" /> clear cart
            </span>
          </div>
        </div>
        <div className="col-md-4 cart__detail bg-light">
          <h3>Summary</h3>
          
          <hr className="mt-5" />
          <div className="d-flex justify-content-between">
            <span className="d-flex gap-3">
              <span>Items</span>
              <span>{qty}</span>
            </span>
            <span>${total}</span>
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
            <span>${total}</span>
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
