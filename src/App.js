import React from 'react'
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselfilms from './components/Carouselfilm.js'
import Navbars from './components/Navbar.jsx'
import Headers from './components/Header'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from 'react-bootstrap/Card';
import Categories from './components/Category'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useDispatch, useSelector} from 'react-redux'
import {fetchMovies, getPopular, getToprated} from './features/movies/moviesSlice'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faLinesLeaning,
    faSearch
} from '@fortawesome/free-solid-svg-icons'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'


function App() {
  const [mov, setMov] = useState('')
  const [isLoading, setIsloading] = useState(true)
  const [search, setSearch] = useState([])
  const [status, setStatus] = useState('')
  useEffect(()=>{
    setTimeout(()=>{
      setIsloading(false)
    }, 1500)
  },[])

  useEffect(()=>{
    getFilms();
  }, []);

  let IMG_BASEURL = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  const submit = () => {
    navigate(`/search/${search}`)
  }

  const genFilms = async(film) => {
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${film}?api_key=8c60b3b49802b54dd5f23e9f9e0d92b6`);
        setMov(response.data.results)
    }catch(error){
        console.log(error)
    }
  }

  const getFilms = async () => {
    try{
      const response = await axios.get("https://api.themoviedb.org/3/discover/movie?&api_key=8c60b3b49802b54dd5f23e9f9e0d92b6");
      setMov(response.data.results)
    } catch(error){
        console.log(error)
    }
  }


  return (
    <div className="App">
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
      <div className="opsion">
        <span ><a onClick={()=> genFilms('popular')}>Popular Movie</a></span>
        <span ><a onClick={()=> genFilms('top_rated')}>TopRated Movie</a></span>
      </div>
      <div className="swiper-home">
      <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={1}
          navigation={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          key={mov.id}
        >
          {mov.length > 0 && mov.map(film =>{
              return<SwiperSlide >
                <>
                {isLoading ? 
                    <div>
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton width={'20rem'} height={'10rem'} duration={3} />
                    </SkeletonTheme>
                    </div>
                : 
                    <Card key={film.id}>
                      <Card.Img variant="top" src={IMG_BASEURL+film.backdrop_path}/>
                      <div className="intro" onClick={()=>navigate(`/${film.id}`)}>
                        <h4>{film.title}</h4>
                        <p>{film.overview}</p>
                      </div>
                    </Card>
                }   
                </>
              </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
    </div>
  );
}

export default App;
