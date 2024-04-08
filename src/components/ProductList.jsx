import React from 'react'
import Card from './Card'
import vegetables from './product'
const ProductList = () => {
  return (
    <div className="container pt-5">
      <h3 class="text-center py-5">Our Products</h3>
    <div className='row row-cols-1 g-4 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4'>
      {vegetables.map((vegetable)=> (
         <Card image_link={vegetable.image_link}
                name={vegetable.name}
                description={vegetable.description}
                price_per_kg={vegetable.price_per_kg}
                category={vegetable.category}
         />
      ))}
    </div>
    </div>
  )
}

export default ProductList