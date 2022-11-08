import React from 'react'
import Cards from './Card.jsx'
import Categories from './Category'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbars from './Navbar'
import logo from './back1.jpg'
import {useParams} from 'react-router-dom'




const Genres = () => {
  const [genre, setGenre] = useState([])
  const {cat} = useParams()

  const loadMovie = async () => {
    try {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?&api_key=8c60b3b49802b54dd5f23e9f9e0d92b6&with_genres=${cat}`);
    setGenre(res.data.results)
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
      <h1>{`Search Result "${cat.toUpperCase()}"`}</h1>
      </div>
    </div>
    <div className="tulisan-pojok">
      <h1>{`Search Result "${cat.toUpperCase()}"`}</h1>
    </div>
      <div className="containerHome">
      <div className="card-grid">
        {genre.map((mov)=>{
          return<Cards movie={mov}/>
        })}
      </div>
    </div>
    </>
    )
}

export default Genres

