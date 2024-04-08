import React from 'react'
import { UilClock,UilTruck,UilCommentAltQuestion } from '@iconscout/react-unicons'

const WhyUs = () => {
  return (
    <section className="primary-bg-color py-5">
      <div className="container">
        <h3 class="text-center py-5">Why Us</h3>
        <div className="row">
          <div className="col-md-4">
          <div className="whyus_info d-md-flex justify-content-between gap-3 align-items-start text-center text-md-start">
            <span className='rounded bg-white'>
              <UilClock size="80"/>
            </span>
            <div>
              <h3>Save Time</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sit iste dolorem perferendis asperiores suscipit, 
                voluptatem assumenda quis iure est quaerat.
              </p>
            </div>
          </div>
          </div>
          <div className="col-md-4">
          <div className="whyus_info d-md-flex justify-content-between gap-3 align-items-start text-center text-md-start">
            <span className='rounded bg-white'>
              <UilTruck size="80"/>
            </span>
            <div>
              <h3>Fast Delivery</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sit iste dolorem perferendis asperiores suscipit, 
                voluptatem assumenda quis iure est quaerat.
              </p>
            </div>
          </div>
          </div>
          <div className="col-md-4">
          <div className="whyus_info d-md-flex justify-content-between gap-3 align-items-start text-center text-md-start">
            <span className='rounded bg-white'>
              <UilCommentAltQuestion size="80"/>
            </span>
            <div>
              <h3>Customer Support</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sit iste dolorem perferendis asperiores suscipit, 
                voluptatem assumenda quis iure est quaerat.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default WhyUs