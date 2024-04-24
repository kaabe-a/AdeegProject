import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UilHeartAlt } from "@iconscout/react-unicons";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { UilFavorite } from "@iconscout/react-unicons";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { CartContext } from "../../context/CartContext";


export default function ProductDetail() {
 const {addToCart,decreaseQty,increaseQty,qty} = useContext(CartContext)

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
    return <div className="container text-center py-5">Loading..</div>;
  }
  if (productByCategoryQuery.isLoading) {
    return <div className="container text-center py-5">Loading...</div>;
  }

  return (
    <>
      <div className="container py-5" style={{marginTop:"9rem"}}>
        <div className="row">
          <div className="col-md-2">Slide</div>
          <div className="col-md-4">
            <img
              className="img-fluid w-100 product_detail_image"
              src={productQuery.data["data"][0].image_url}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="title d-flex justify-content-start gap-3 text-center text-md-start">
              <h3>{productQuery.data["data"][0].name}</h3>
              <input
                type="button"
                className="btn btn-light disabled"
                value="in Stock"
              />
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
                    className="btn btn-sm rounded-circle bg-light fs-3 text-dark"
                    type="button"
                    onClick={() => increaseQty(productQuery.data["data"][0].id)}>
                    +
                  </button>
                  <span>7</span>
                  <button
                    className="btn btn-sm rounded-circle bg-light fs-3 text-dark"
                    type="button"
                    onClick={() => decreaseQty(productQuery.data["data"][0].id)}>
                    -
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn bg-success btn-lg text-white w-100" onClick={() => addToCart(productQuery.data["data"][0], productQuery.data["data"][0].id)}>
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
    </>
  );
}

{/* <Card
  image_link={product.image_url ? product.image_url : thumnail}
  name={product.name}
  description={product.description}
  amount={product.amount}
  quantity={product.quantity}
  category={product.category.name}
/>; */}
