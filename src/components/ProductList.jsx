import React from "react";
import Card from "./ProductCard";
import { vegetables, fruits, best_sales } from "./product";
import { UilAngleRight } from "@iconscout/react-unicons";
import { useQuery } from "@tanstack/react-query";

const ProductList = () => {
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
    <div className="container py-5">
      <div className="product_header py-5 d-flex justify-content-between position-relative">
        <h3 className="text-start">Fruits</h3>
        <span className="section_title"></span>
        <a href="#" className="section_link">
          View All <UilAngleRight />
        </a>
      </div>
      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {data["data"]?.map((fruit) => (
          <Card
            image_link={fruit.image_url ? fruit.image_url : thumnail}
            name={fruit.name}
            description={fruit.description}
            amount={fruit.amount}
            quantity={fruit.quantity}
            category={fruit.category.name}
          />
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
        {data["data"]?.map((vegetable) => (
          <Card
            image_link={vegetable.image_url ? vegetable.image_url : thumnail}
            name={vegetable.name}
            description={vegetable.description}
            amount={vegetable.amount}
            quantity={vegetable.quantity}
            category={vegetable.category.name}
          />
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
        {ldata["data"]?.map((last) => (
          <Card
            image_link={last.image_url ? last.image_url : thumnail}
            name={last.name}
            description={last.description}
            amount={last.amount}
            quantity={last.quantity}
            category={last.category.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
