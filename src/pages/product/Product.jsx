import React from "react";
import Card from "../../components/ProductCard";
import { best_sales } from "../../components/product";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
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
  // console.log(data["data"])
  //   for (const element of data["data"]) {
  //     console.log(element.image_url)
  // }
  return (
    <div className="container py-5">
      <h3 className="text-center py-4">All Products</h3>

      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data["data"]?.map((product) => (
          <Link to={product.id} style={{ textDecoration: "none" }}>
            <Card
              image_link={product.image_url ? product.image_url : thumnail}
              name={product.name}
              description={product.description}
              amount={product.amount}
              quantity={product.quantity}
              category={product.category.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
