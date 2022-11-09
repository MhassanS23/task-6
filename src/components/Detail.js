import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Navbars from './Navbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlayCircle, faStar
} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Detail(){
    let {id} = useParams();
    const navigate = useNavigate();   
    const [movies, setMovie] = useState([])
    const [cast, setCast] = useState([])
    let IMG_BASEURL = "https://image.tmdb.org/t/p/original";

    const loadMovie = async () => {
        try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8c60b3b49802b54dd5f23e9f9e0d92b6`);
        console.log(res)
        setMovie(res.data)
        } catch (error) {
        console.error(error)
        }
    };

    const loadCast = async () => {
      try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=8c60b3b49802b54dd5f23e9f9e0d92b6`);
      setCast(res.data.cast)
      } catch (error) {
      console.error(error)
      }
  };

    useEffect(() => {
        loadMovie();
        loadCast();
    }, [])

    return(
    <>
    <div className="container-detail">
      <div className="detail-film">
        {movies &&
        <img
          className="picFilm"
          src={IMG_BASEURL+movies.backdrop_path}
        />
        }
      <div className="detail">
        <div className="title-film">
            <h1>{movies ? movies.title : ""}</h1>
        </div>
        
      <div className="ratingDate-container">
      <div className="rating-film">
            <span className="bintang"><FontAwesomeIcon icon={faStar} /></span>
            <p>{movies && movies.vote_average ? `${(movies.vote_average).toFixed(1)} / 10` : ""}</p> 
        </div>
        <div className="release-date">
            <p>{movies && movies.release_date ? `${movies.release_date}` : "" }</p>
            <div className="languange">
            <p>{movies && movies.original_language ? `${movies.original_language}` : "" }</p>
            </div>
        </div>
      </div>

        <button className="tombol-trailer"><FontAwesomeIcon icon={faPlayCircle} /> WATCH TRAILER </button>

      <div className="container-overviewGenre">
          <div className="preview-film">
            <h4>Overview</h4>
            <p>{movies ? movies.overview : ""}</p>
          </div>

          <div className="movie-genre-container">
            <h4>Genre</h4>
            <div className="gen">
              {movies && movies.genres ? movies.genres.map(genre=>(
                  <><span className="movie-genre"  onClick={()=>{
                    navigate(`/genre/${genre.id}`)
                  }}>{genre.name}</span></>
              )) : ""}
            </div>
          </div>
      </div>

      </div>
      </div>
    </div>
  <div className="cast-background">
  <h1 className="center">Cast</h1>
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="cast-slider"
    >
      {cast.length > 0 && cast.map(caster =>{
          return<SwiperSlide >
            <div className="cast-movie">
              <img className="cast-img" src={caster.profile_path ? `https://image.tmdb.org/t/p/original/${caster.profile_path}` : "Picture"} alt={caster.name}/>
              <h4>{caster.name}</h4>
            </div>
          </SwiperSlide>
      })}
    </Swiper>
  </div>
    </>
    )
}