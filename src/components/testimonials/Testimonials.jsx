import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/avatar.jpg'
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR,
    name: 'Young Thug',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo consequatur ratione fugit nihil! Neque porro labore fugiat incidunt ipsa.'
  },
  {
    avatar: AVTR,
    image: AVTR,
    name: 'Doja Cat',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo consequatur ratione fugit nihil! Neque porro labore fugiat incidunt ipsa.'
  },
  {
    avatar: AVTR,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo consequatur ratione fugit nihil! Neque porro labore fugiat incidunt ipsa.'
  },
  {
    avatar: AVTR,
    name: 'John Jacobs',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo consequatur ratione fugit nihil! Neque porro labore fugiat incidunt ipsa.'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"        // install Swiper modules
        modules={[Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar user" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
export default Testimonials