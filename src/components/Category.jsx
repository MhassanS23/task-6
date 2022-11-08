import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useDispatch, useSelector} from 'react-redux'
import {fetchGenre} from '../features/movies/moviesSlice'



const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = useSelector(state=> state.movies.genre)

  useEffect(()=>{
    dispatch(fetchGenre());
  }, [dispatch]);
  
  const enter = (gen) => {
      navigate(`/genre/${gen}`)
  }
    
    return(
    <>
    <div className="header-listMovie">
            <div className="navbars">
                <div className="category-movie">
                    <h2>Browse by Category</h2>
                </div>
                <div className="allMovie">
                    <Link to='/all-movie' className="link-allMovie" >See All Movie</Link>
                </div>
            </div>
    </div>
    <div className="container-category">
    <Swiper
      slidesPerView={8}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {genres.length > 0 && genres.map(list =>{
          return<SwiperSlide ><button  onClick={()=> enter(list.id)} className="btn-category"
          >{list.name}</button></SwiperSlide>
      })}
    </Swiper>
    </div>
    </>
    )
}

export default Categories

