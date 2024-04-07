import React from 'react'
import { UilArrowRight } from '@iconscout/react-unicons'
const Hero = () => {
  return (
    <div className='hero py-5'>
    <div className="container pt-5">
    <div className="d-sm-flex justify-content-between align-items-center">
        <div className="hero__info text-center text-md-start">
            <h1 className='text-success' style={{fontSize:"3rem"}}>Start Shopping and <br/> Save Your Time</h1>
            <p className='text-secondary lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
               sed ab. Ullam eos laudantium mollitia fuga aut aliquam fugit,
               Cupiditate,
               sed ab. Ullam eos laudantium mollitia fuga aut aliquam fugit,
            </p>
            <button className="btn btn-lg btn-success text-white mt-2">Shop Now <UilArrowRight/></button>
        </div>
        <img className='d-none  d-md-block img-fluid w-50' src="./images/hero_image.png" alt="" />
    </div>
    </div>
</div>
  )
}

export default Hero