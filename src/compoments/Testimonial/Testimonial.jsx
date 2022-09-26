import React from 'react'
import "./testimonial.scss"
import { data } from "../DataPortforlio/dataTestimonial"
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          data.map((item, index) => {

            return (

              <SwiperSlide className='testimonial' key={index}>
                <div className="client_avatar">
                  <img src={item.avatar} alt="avartar1" />

                </div>
                <h5 className="client__name">{item.name}</h5>
                <small className='client__review'>{item.review} </small>
              </SwiperSlide>

            )
          })

        }


      </Swiper>
    </section>
  )
}

export default Testimonial
