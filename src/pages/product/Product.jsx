import React, { useContext } from "react";
import Card from "../../components/ProductCard";
import { best_sales } from "../../components/product";
import { useQuery } from "@tanstack/react-query";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { ShopContext } from "../../context/ShopContext";

const Product = () => {
  const { addToCart } = useContext(ShopContext);
  const thumnail = "https://via.placeholder.com/1000";
  // const { data } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () =>
  //     Axios.get(
  //       "https://adeeg-oragnic.onrender.com/api/product/list_new_products"
  //     ).then((res) => res.data),
  // });
  const { status, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://adeeg-oragnic.onrender.com/api/product/report/list_new_products"
      ).then((res) => res.json()),
  });
  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container py-5">
      <h3 className="text-center py-4">All Products</h3>

      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data["data"]?.map((product) => (
          
          <div className="product_card">
          <div className="col">
            <div className="card shadow-sm border-0">
              <div className="top-img position-relative bg-light">
                <img
                  src={product?.image_url}
                  className="card-img-top img-fluid"
                  style={{ height: "150px" }}
                  alt="..."
                />
              </div>
              <div className="card-body position-relative">
                <h5 className="card-title text-center short-title">{product.name}</h5>
                <h5 className="text-secondary text-center">{product.category.name}</h5>
                <p className="card-text text-center short-description">
                  {product.description}
                </p>
              </div>
              <div className="d-flex justify-content-center gap-4">
                <span className="text-center">${product.amount}/Kg</span>
                <span className="text-center">{product?.quantity}/qty</span>
              </div>
              <button className="btn btn-light text-white m-4" style={{ backgroundColor: "#02CA89" }} onClick=
                {() => addToCart(product.id)}> <UilShoppingCartAlt color="white"/> Add
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
//  // <Link to={product.id} style={{ textDecoration: "none" }}>
//             <Card
//               image_link={product.image_url ? product.image_url : thumnail}
//               name={product.name}
//               description={product.description}
//               amount={product.amount}
//               quantity={product.quantity}
//               category={product.category.name}
//             />
//           // </Link>