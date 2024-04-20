import React from "react";
import { UilPhone } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { UilAlignLeft } from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light">
        <div className="container">
          <ul className="navbar-nav d-none d-sm-none d-md-none d-lg-block ">
            <li class="nav-item dropdown">
              <a
                style={{ borderRadius: "0" }}
                class="nav-link dropdown-toggle btn btn-lg bg-success text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <UilAlignLeft /> Categories
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={"/products"} className="dropdown-item">
                    Cereals
                  </Link>
                </li>
                <li>
                  <Link to={"/products"} className="dropdown-item">
                    Fruits
                  </Link>
                </li>
                <li>
                  <Link to={"/products"} className="dropdown-item">
                    Vegetables
                  </Link>
                </li>
                <li>
                  <Link to={"/products"} className="dropdown-item">
                    Species
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <img
            className="logo d-block d-md-none"
            style={{ width: "35px" }}
            src="./images/logo.jpeg"
            alt=""
          />

          <span className="d-none d-sm-block d-md-block d-lg-none">
            <UilPhone color="#3BB77E" /> 24/7 support center{" "}
            <span style={{ color: "#3BB77E" }}>+525367</span>
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-center flex-grow-1">
              <ul className="navbar-nav d-block d-md-none pt-3 ">
                <li class="nav-item dropdown">
                  <a
                    style={{ borderRadius: "0" }}
                    class="nav-link dropdown-toggle btn btn-lg bg-success text-light"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <UilAlignLeft /> Categories
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link to={"/products"} className="dropdown-item">
                        Cereals
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products"} className="dropdown-item">
                        Fruits
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products"} className="dropdown-item">
                        Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link to={"/products"} className="dropdown-item">
                        Species
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/products"} className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <span className="d-none d-lg-block">
              <UilPhone color="#3BB77E" /> 24/7 support center{" "}
              <span style={{ color: "#3BB77E" }}>+525367</span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
