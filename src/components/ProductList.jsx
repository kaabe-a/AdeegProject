import React, { useContext, useEffect, useState } from "react";
import Card from "./ProductCard";
import { vegetables, fruits, best_sales } from "./product";
import { UilAngleRight } from "@iconscout/react-unicons";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  function fetchFruits() {
    return fetch(
      "https://adeeg-oragnic.onrender.com/api/product/report/new_four_fruit_products"
    ).then((res) => res.json());
  }
  function fetchVegetables() {
    return fetch(
      "https://adeeg-oragnic.onrender.com/api/product/report/new_four_vegetable_products"
    ).then((res) => res.json());
  }
  const fetchLastProducts = () => {
    return fetch(
      "https://adeeg-oragnic.onrender.com/api/product/report/last_new_four_products"
    ).then((res) => res.json());
  };

  const { status, error, data } = useQuery({
    queryKey: ["fruitData"],
    queryFn: fetchFruits,
  });
  const {
    vstatus,
    verror,
    data: vdata,
  } = useQuery({
    queryKey: ["vegData"],
    queryFn: fetchVegetables,
  });
  const {
    lstatus,
    lerror,
    data: ldata,
  } = useQuery({
    queryKey: ["lastData"],
    queryFn: fetchLastProducts,
  });

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  if (vstatus === "pending") {
    return <span>Loading...</span>;
  }

  if (vstatus === "verror") {
    return <span>vError: {verror.message}</span>;
  }

  if (lstatus === "pending") {
    return <span>Loading...</span>;
  }

  if (lstatus === "verror") {
    return <span>vError: {lerror.message}</span>;
  }

  // console.log(vdata,"hellow");

  return (
    <div className="container py-5" style={{marginTop:"9rem"}}>
      <div className="product_header py-5 d-flex justify-content-between position-relative">
        <h3 className="text-start">Fruits</h3>
        <span className="section_title"></span>
        <a href="#" className="section_link">
          View All <UilAngleRight />
        </a>
      </div>
      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data["data"]?.map((product) => (
           <div className="product_card">
           <div className="col">
             <div className="card shadow-sm border-0">
               <div className="top-img position-relative bg-light">
                 <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                   <img
                     src={product?.image_url}
                     className="card-img-top img-fluid"
                     style={{ height: "150px" }}
                     alt="..."
                   />
                 </Link>
               </div>

               <div className="card-body position-relative">
                 <h5 className="card-title text-center short-title">
                   {product.name}
                 </h5>
                 <h5 className="text-secondary text-center">
                   {product.category.name}
                 </h5>
                 <p className="card-text text-center short-description">
                   {product.description}
                 </p>
               </div>
               <div className="d-flex justify-content-center gap-4">
                 <span className="text-center">${product.amount}/Kg</span>
                 <span className="text-center">{product?.quantity}/qty</span>
               </div>
               <button
                 className="btn btn-light text-white m-4"
                 style={{ backgroundColor: "#02CA89" }}
                 onClick={() => addToCart(product, product.id)}
               >
                 <UilShoppingCartAlt color="white" /> Add
               </button>
             </div>
           </div>
         </div>
        ))}
      </div>
      <div className="product_header py-5 d-flex justify-content-between position-relative">
        <h3 className="text-start">Vegetables</h3>
        <span className="section_title"></span>
        <a href="#" className="section_link">
          View All <UilAngleRight />
        </a>
      </div>
      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data["data"]?.map((product) => (
          <div className="product_card">
          <div className="col">
            <div className="card shadow-sm border-0">
              <div className="top-img position-relative bg-light">
                <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                  <img
                    src={product?.image_url}
                    className="card-img-top img-fluid"
                    style={{ height: "150px" }}
                    alt="..."
                  />
                </Link>
              </div>

              <div className="card-body position-relative">
                <h5 className="card-title text-center short-title">
                  {product.name}
                </h5>
                <h5 className="text-secondary text-center">
                  {product.category.name}
                </h5>
                <p className="card-text text-center short-description">
                  {product.description}
                </p>
              </div>
              <div className="d-flex justify-content-center gap-4">
                <span className="text-center">${product.amount}/Kg</span>
                <span className="text-center">{product?.quantity}/qty</span>
              </div>
              <button
                className="btn btn-light text-white m-4"
                style={{ backgroundColor: "#02CA89" }}
                onClick={() => addToCart(product, product.id)}
              >
                <UilShoppingCartAlt color="white" /> Add
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>

      <div className="product_header py-5 d-flex justify-content-between position-relative">
        <h3 className="text-start">Last 4 Products</h3>
        <span className="section_title"></span>
        <a href="#" className="section_link">
          View All <UilAngleRight />
        </a>
      </div>
      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data["data"]?.map((product) => (
          <div className="product_card">
            <div className="col">
              <div className="card shadow-sm border-0">
                <div className="top-img position-relative bg-light">
                  <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                    <img
                      src={product?.image_url}
                      className="card-img-top img-fluid"
                      style={{ height: "150px" }}
                      alt="..."
                    />
                  </Link>
                </div>

                <div className="card-body position-relative">
                  <h5 className="card-title text-center short-title">
                    {product.name}
                  </h5>
                  <h5 className="text-secondary text-center">
                    {product.category.name}
                  </h5>
                  <p className="card-text text-center short-description">
                    {product.description}
                  </p>
                </div>
                <div className="d-flex justify-content-center gap-4">
                  <span className="text-center">${product.amount}/Kg</span>
                  <span className="text-center">{product?.quantity}/qty</span>
                </div>
                <button
                  className="btn btn-light text-white m-4"
                  style={{ backgroundColor: "#02CA89" }}
                  onClick={() => addToCart(product, product.id)}
                >
                  <UilShoppingCartAlt color="white" /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
{
  /* <Card
  image_link={last.image_url ? last.image_url : thumnail}
  name={last.name}
  description={last.description}
  amount={last.amount}
  quantity={last.quantity}
  category={last.category.name}
/>; */
}
