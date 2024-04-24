import React from "react";

const Checkout = () => {
  return (
    <div className="container py-5" style={{marginTop:"9rem"}}>
      <div className="row">
        <div className="col-md-8 py-5 border">
          <h4 className="text-center py-2">Billing Information</h4>
          <form action="">
            <div class="mb-3 row">
              <div className="col">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  class="form-control "
                  id="formGroupExampleInput"
                  //   placeholder="First Name"
                />
              </div>
              <div className="col">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  //   placeholder="Last Name"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <div className="col">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  class="form-control "
                  id="formGroupExampleInput"
                  //   placeholder="First Name"
                />
              </div>
              <div className="col">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  //   placeholder="Last Name"
                />
              </div>
              <div className="col">
                <label htmlFor="">district</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  //   placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                //   placeholder="Last Name"
              />
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <h4 className="text-center">Order Summary</h4>
          <hr className="mt-5" />
          <div className="d-flex justify-content-between">
            <span className="d-flex gap-3">
              <span>Items</span>
              <span>{}</span>
            </span>
            <span>${}</span>
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
            <span>${}</span>
          </div>
          <button className="btn btn-lg btn-success w-100 border-0 shadow-none mt-5">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
