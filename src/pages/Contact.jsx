import React from "react";
import {
  UilLocationPoint,
  UilEnvelopeEdit,
  UilPhoneAlt,
} from "@iconscout/react-unicons";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row d-flex align-items-center gap-5">
        <div className="col-md-7">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="lead text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            voluptatibus aliquam magnam a, expedita enim perspiciatis nam velit
            laudantium consequuntur veritatis quaerat iure. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit.
          </p>
          <div className="text-center">
            <img
              className="img-fluid rounded-circle w-50"
              style={{ objectFit: "cover" }}
              src="../images/contact.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 text-center">
          <form action="">
            <div class="mb-3">
              <input
                type="text"
                class="form-control "
                id="formGroupExampleInput"
                placeholder="Fullname"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Phone"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button
              className="btn btn-lg bg-success shadow-none w-100 text-white"
              type="button"
            >
              submit
            </button>
          </form>
        </div>
      </div>

      <div className="p-5 border border-success my-5">
        <ul className="list-unstyled d-lg-flex justify-content-between text-success align-items-center">
          <li className="mb-2">
            <UilLocationPoint size="80" />
            <span className="fs-3">Hargeisa Somaliland</span>
          </li>
          <li className="mb-2">
            <UilEnvelopeEdit size="80" />{" "}
            <span className="fs-3">adeegorganicmarket@gmail.com</span>
          </li>
          <li className="mb-2">
            <UilPhoneAlt size="80" />{" "}
            <span className="fs-3">+25263-4845776</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
