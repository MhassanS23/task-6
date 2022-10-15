import React from 'react'
import Cards from './Card.jsx'
import Navbars from './Navbar.jsx'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import logo from './back1.jpg'


const Allmovies = () => {
  const [movie, setMovie] = useState([])
  const navigate = useNavigate();

  const loadMovie = async () => {
    try {
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie?&api_key=8c60b3b49802b54dd5f23e9f9e0d92b6");
    setMovie(res.data.results)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    loadMovie();
  }, [])
    
    return(
    <>
    <div className="search-header">
      <Navbars/>
      <img src={logo}/>
      <div className="tulisan-pojok-img">
        <h1>ALL MOVIES</h1>
      </div>
    </div>

    <div className="tulisan-pojok">
        <h1>All Movies</h1>
    </div>

    <div className="containerHome">
        <div className="card-grid">
        {movie.length > 0 && movie.map(film =>{
            return<Cards movie = {film} />
        })}
        </div>
    </div>
    </>
    )
}

export default Allmovies