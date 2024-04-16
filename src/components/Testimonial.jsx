import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { UilStar } from '@iconscout/react-unicons'
// import { UisStarHalfAlt } from '@iconscout/react-unicons-solid'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div class="col text-center py-5">
            <div class="section-title">
              <h2>What Our Customers Say</h2>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper py-5"
          >
            <div className="row">
              <div className="col-md-4">
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/23.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-md-4">
                <SwiperSlide>
                <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/24.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-md-4">
                <SwiperSlide>
                <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/23.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-md-4">
                <SwiperSlide>
                <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/23.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-md-3">
                <SwiperSlide>
                <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/25.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-md-3">
                <SwiperSlide>
                <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/26.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-md-3">
                <SwiperSlide>
                <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/27.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-md-3">
                <SwiperSlide>
                <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/28.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-md-4">
                <SwiperSlide>
                <div className="card">
                    <div className="card-body p-4">
                      <span className="rating">
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UisStar/> */}
                      {/* <UilStar/> */}
                      </span>
                      <p className="card-text fs-6 text-start">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        Provident.Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit Provident
                      </p>
                      <div className="d-flex justify-content-start gap-2 align-items-center px-4">
                        <img
                          style={{ width: "60px" }}
                          className="rounded-circle"
                          src="https://randomuser.me/api/portraits/men/29.jpg"
                          alt=""
                        />
                        <div className="card_footer-info">
                          <h6>Maxamed j.</h6>
                          <span className="fs-6">adeeg customers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
