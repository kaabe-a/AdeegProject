import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import Featured from '../components/Featured'
import WhyUs from '../components/WhyUs'
import Testimonial from '../components/Testimonial'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <ProductList/>
      <WhyUs/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default Home