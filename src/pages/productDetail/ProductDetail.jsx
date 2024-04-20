import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UilHeartAlt } from "@iconscout/react-unicons";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { UilFavorite } from "@iconscout/react-unicons";
import Card from "../../components/ProductCard";

export default function ProductDetail() {
  const thumnail = "https://via.placeholder.com/1000";
  const { id } = useParams();

  function getPost(id) {
    return Axios.get(
      `https://adeeg-oragnic.onrender.com/api/product/${id}`
    ).then((res) => res.data);
  }
  function getPostByCategory(category) {
    return Axios.get(
      `https://adeeg-oragnic.onrender.com/api/product/report/related_products/${category}`
    ).then((res) => res.data);
  }

  const productQuery = useQuery({
    queryKey: ["productDetailData"],
    queryFn: () => getPost(id),
  });


  const productByCategoryQuery = useQuery({
    enabled: !!productQuery,
    queryKey: ["productByCategory", productQuery],
    queryFn: () =>
      getPostByCategory(productQuery?.data["data"][0]?.category?._id),
  });


  if (productQuery.isLoading) {
    return <span>Loading...</span>;
  }
  if (productByCategoryQuery.isLoading) {
    return <span>Loading...</span>;
  }

  console.log(productByCategoryQuery.data["data"])
 
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-2">Slide</div>
          <div className="col-md-4 product__image">
            <img
              className="img-fluid w-100 product_detail_image"
              src={productQuery.data["data"][0].image_url}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="title d-flex justify-content-start gap-3 text-center text-md-start">
              <h3>{}</h3>
              <input type="button" className="btn btn-light" value="in Stock" />
            </div>
            <div className="category d-flex gap-2 text-center text-md-start">
              <span>Category</span>
              <span className="text-secondary">
                {productQuery.data["data"][0].category.name}
              </span>
            </div>
            <div className="reviews d-flex gap-2 text-center text-md-start align-items-center">
              <span className="d-flex gap-2">
                <span>
                  <UilFavorite />
                </span>
                <span>
                  <UilFavorite />
                </span>
                <span>
                  <UilFavorite />
                </span>
                <span>
                  <UilFavorite />
                </span>
                <span>
                  <UilFavorite />
                </span>
              </span>
              <span className="text-secondary">25 Reviews</span>
            </div>
            <div className="price text-center text-md-start">
              <div className="d-flex gap-2">
                <span>Quantity</span>
                <span>{productQuery.data["data"][0].quantity}</span>
              </div>
              <span className="d-flex gap-2">
                <span>Price</span>
                <div className="discount text-secondary">
                  <del>1.5$</del>
                </div>
                <div className="price">
                  {productQuery.data["data"][0].amount}
                </div>
              </span>
            </div>
            <hr />
            <p className="lead text-center text-md-start">
              {productQuery.data["data"][0].description}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum aut
              nostrum voluptatum veritatis quidem nesciunt optio aspernatur
              dolorum consectetur exercitationem nemo, fugit nisi in modi,
              facere, doloremque molestias voluptates. Quisquam? fugit nisi in
              modi, facere, doloremque molestias voluptates. Quisquam?
            </p>
            <div className="cart_section">
              <div className="row align-items-center gap-2">
                <div className="col-md-2 d-flex gap-2 align-items-center">
                  <button
                    className="btn btn-md bg-light fs-4 text-dark"
                    type="button"
                  >
                    +
                  </button>
                  <span>5</span>
                  <button
                    className="btn btn-md bg-light fs-4 text-dark"
                    type="button"
                  >
                    -
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn bg-success btn-lg text-white w-100">
                    add cart
                  </button>
                </div>
                <div className="col-md-2">
                  <UilHeartAlt size="50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_header py-5 d-flex justify-content-center position-relative">
          <h3 className="text-center">Related Products</h3>
        </div>
        <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {productByCategoryQuery.data["data"].map((product) => (
            // <Link style={{ textDecoration: "none" }}>
            <Card
              image_link={product.image_url ? product.image_url : thumnail}
              name={product.name}
              description={product.description}
              amount={product.amount}
              quantity={product.quantity}
              category={product.category.name}
            />
            // </Link>
          ))}
        </div>
      </div>
    </>
  );
}
