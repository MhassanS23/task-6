import React from 'react'
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselfilms from './components/Carouselfilm.js'
import Navbars from './components/Navbar.jsx'
import Headers from './components/Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Thumbs, Pagination} from 'swiper'
import 'swiper/css';
import Card from 'react-bootstrap/Card';
import Categories from './components/Category'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovies, fetchGenre} from './features/movies/moviesSlice'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'


function App() {
  const movies = useSelector(state=> state.movies.movies)
  const [search, setSearch] = useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchMovies());
  }, [dispatch]);
  let IMG_BASEURL = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  const submit = () => {
    navigate(`/search/${search}`)
}


  return (
    <div className="App">
    <GoogleOAuthProvider clientId="414434174427-nic0jjfbcvqaubflqajvvs5gedceip02.apps.googleusercontent.com">
    <Navbars/>
    <div className="home-background">
      <img src="https://image.tmdb.org/t/p/original/r17jFHAemzcWPPtoO0UxjIX0xas.jpg"/>
      <h1>JOHN WICK</h1>
      <h5>Never stab the devil in the back</h5>
          <form className="container-form" >
                <input 
                type="text" 
                placeholder="What Do You Want To Watch?" 
                className="search"
                value = {search.original_title}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button  className="btn-search" onClick={submit}><FontAwesomeIcon icon={faSearch} /></button>
            </form>
      <div className="swiper-home">
          <Swiper
          modules={[Navigation, Thumbs, Pagination]}
          slidesPerView={2}
          spaceBetween={1}
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          key={movies.id}
        >
          {movies.length > 0 && movies.map(film =>{
              return<SwiperSlide ><Card key={film.id}>
              <Card.Img variant="top" src={IMG_BASEURL+film.backdrop_path} onClick={()=>navigate(`/${film.id}`)}/>
          </Card></SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
    </GoogleOAuthProvider>
    </div>
  );
}

export default App;
