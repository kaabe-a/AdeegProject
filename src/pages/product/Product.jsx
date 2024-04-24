import React, { useContext, useState } from "react";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";

const Product = () => {
  const { products } = useContext(ProductContext);
  const thumnail = "https://via.placeholder.com/1000";
  const { addToCart } = useContext(CartContext);

  // const { status, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch(
  //       "https://adeeg-oragnic.onrender.com/api/product/report/list_new_products"
  //     ).then((res) => res.json()),
  // });
  // if (status === "pending") {
  //   return <span>Loading...</span>;
  // }

  // if (status === "error") {
  //   return <span>Error: {error.message}</span>;
  // }

  return (
    <div className="container py-5" style={{marginTop:"9rem"}}>
      <h3 className="text-center py-4">All Products</h3>

      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products?.map((product) => (
          <div className="product_card">
            <div className="col">
              <div className="card shadow-sm border-0">
                <div className="top-img position-relative bg-light">
                  <Link to={product.id} style={{ textDecoration: "none" }}>
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

export default Product;
