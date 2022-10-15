import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const Categories = () => {
  const [category, setCategory] = useState([])
  const navigate = useNavigate();
  
  const enter = (genres) => {
      navigate(`/genre/${genres}`)
  }
  
  const loadCategory = async () => {
      try {
      const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=8c60b3b49802b54dd5f23e9f9e0d92b6");
      setCategory(res.data.genres)
      } catch (error) {
        console.error(error)
      }
    };
  
    useEffect(() => {
      loadCategory();
    }, [])
    
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
      key={category.id}
    >
      {category.length > 0 && category.map(list =>{
          return<SwiperSlide ><button className="btn-category"
          onClick={()=> enter(list.id)}>{list.name}</button></SwiperSlide>
      })}
    </Swiper>
    </div>
    </>
    )
}

export default Categories

