import React from "react";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { UilSearch } from "@iconscout/react-unicons";

const TopNavbar = () => {
  return (
    <div className="container">
      <nav className="navbar border_top navbar-expand-lg bg-white navbar-light pt-2 d-none d-md-block d-md-flex justify-content-between align-items-center">
        <div>
          <img
            className="logo"
            style={{ width: "35px" }}
            src="./images/logo.jpeg"
            alt=""
          />
        </div>
        <div className="search w-50">
          <div class="input-group position-relative shadow-none border-0">
            <input
              type="text"
              class="form-control ps-5 shadow-none border-1"
              placeholder="Search for items"
            />
            <span
              className="position-absolute top-50 translate-middle-y"
              style={{ left: "10px" }}
            >
              <UilSearch color="#aaa" />
            </span>
            <div class="input-group-append">
              <button style={{borderRadius:"0"}} class="btn btn-success " type="button">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center gap-3">
          <span className="position-relative">
            <UilShoppingCartAlt size="40" color="#000" />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              9
            </span>
          </span>
          <span className="d-flex flex-column">
            <span className="text-suceess" style={{ fontSize: 10 }}>
              My Cart
            </span>
            <span className="primary-color">$6</span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
