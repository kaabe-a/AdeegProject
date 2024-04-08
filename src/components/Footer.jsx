import React from 'react'
import { UilInstagram,UilTwitterAlt,UilFacebook,UilSnapchatAlt,UilLocationPoint,UilEnvelopeEdit,UilPhoneAlt } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <footer className='bg-light py-5 text-dark'>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="footer">
              <h4 className="mb-4">About</h4>
              <img className='img-fluid' style={{width:"50px"}} src="../images/logo.jpeg" alt="" />
              <p className="lead pe-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, 
                ipsa! Accusantium deleniti sint, iste, aliquid atque magni dolor aliquam.
              </p>
              <div className="social d-flex  gap-3">
              <UilInstagram/>
              <UilTwitterAlt/>
              <UilFacebook/>
              <UilSnapchatAlt/>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="category">
              <h4 className="mb-4">Categories</h4>
              <ul class="list-unstyled text-light">
              <li class="mb-2" style={{color: "#999"}}>Featured</li>
              <li class="mb-2" style={{color: "#999"}}>Latest</li>
              <li class="mb-2" style={{color: "#999"}}>New</li>
              <li class="mb-2" style={{color: "#999"}}>Specials</li>
            </ul>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="usefull_links">
              <h4 className="mb-4">Usefull Links</h4>
              <ul class="list-unstyled">
              <li class="mb-2" style={{color: "#999"}}>Home</li>
              <li class="mb-2" style={{color: "#999"}}>Best Sales</li>
              <li class="mb-2" style={{color: "#999"}}>New Products</li>
              <li class="mb-2" style={{color: "#999"}}>About Us</li>
            </ul>
            </div>
          </div>
          <div className="col mb-3">
            <div className="about_us">
              <h4 className="mb-4">About Us</h4>
              <ul className="list-unstyled">
                <li className="mb-2"> <UilLocationPoint/> <span>Hargeisa Somaliland</span></li>
                <li className="mb-2"> <UilEnvelopeEdit/> <span>adeegorganicmarket@gmail.com</span></li>
                <li className="mb-2"> <UilPhoneAlt/> <span>+25263-4845776</span></li>
              </ul>
              <div class="input-group mb-3">
              <input type="email" placeholder="Enter Your Email" class="form-control shadow-none"/>
              <button class="btn btn-success btn-sm shadow-sm text-light ">subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-5">
        <div class="col">
          <hr/>
          <br/>
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-sm-8 text-center">
              <span> created by <a class="text-info text-decoration-none" href="#">Zitintern developers</a> with
                &hearts;, All right is reserved &copy; Adeeg Organic.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer