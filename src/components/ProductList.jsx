import React from "react";
import Card from "./Card";
import {vegetables,fruits,best_sales} from "./product";
import { UilAngleRight } from '@iconscout/react-unicons'

const ProductList = () => {
  return (
    <div className="container py-5">
        <div className="product_header py-5 d-flex justify-content-between position-relative">
        <h3 className="text-start">Best Sales</h3>
        <span className="section_title"></span>
        <a href="#" className="section_link">View All <UilAngleRight/></a>

      </div>
      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {best_sales.map((best_sale) => (
          <Card
            image_link={best_sale.image_link}
            name={best_sale.name}
            description={best_sale.description}
            price_per_kg={best_sale.price_per_kg}
            category={best_sale.category}
          />
        ))}
      </div>
      <div className="product_header py-5 d-flex justify-content-between position-relative">
        <h3 className="text-start">Vegetables</h3>
        <span className="section_title"></span>
        <a href="#" className="section_link">View All <UilAngleRight/></a>

      </div>
      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {vegetables.map((vegetable) => (
          <Card
            image_link={vegetable.image_link}
            name={vegetable.name}
            description={vegetable.description}
            price_per_kg={vegetable.price_per_kg}
            category={vegetable.category}
          />
        ))}
      </div>


      <div className="product_header py-5 d-flex justify-content-between position-relative">
        <h3 className="text-start">Fruits</h3>
        <span className="section_title"></span>
        <a href="#" className="section_link">View All <UilAngleRight/></a>
        
      </div>
      <div className="row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {fruits.map((fruit) => (
          <Card
            image_link={fruit.image_link}
            name={fruit.name}
            description={fruit.description}
            price_per_kg={fruit.price_per_kg}
            category={fruit.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
