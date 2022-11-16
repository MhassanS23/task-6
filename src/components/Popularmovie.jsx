import React from 'react'
import Cards from './Card.jsx'
import Navbars from './Navbar.jsx'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from './back1.jpg'
import {useDispatch, useSelector} from 'react-redux'
import {getPopular} from '../features/movies/moviesSlice'
import Categories from './Category.jsx'


const Popularmovies = () => {
  const movies = useSelector(state=> state.movies.popular)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPopular());
  }, [dispatch]);
    
    return(
    <>
    <div className="navAtas">
        <Navbars/>
        <Categories/>
    </div>

    <div className="containerHome">
        <div className="tulisan-pojok">
            <h1>Popular Movies</h1>
        </div>
        <div className="card-grid">
        {movies.length > 0 && movies.map(film =>{
            return<Cards movie = {film} />
        })}
        </div>
    </div>
    </>
    )
}

export default Popularmovies