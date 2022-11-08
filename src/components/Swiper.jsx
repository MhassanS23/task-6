import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Cards from './Card.jsx'



const Swipers = ({movie}) => {
    return(
    <>
    <Swiper
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      key={movie.id}
    >
      {movie.length > 0 && movie.map(film =>{
          return<SwiperSlide ><Cards movie = {film} /></SwiperSlide>
      })}
    </Swiper>
    </>
    )
}

export default Swipers