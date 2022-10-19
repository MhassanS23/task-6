import React from 'react'
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselfilms from './components/Carouselfilm.jsx'
import Cards from './components/Card.jsx'
import Navbars from './components/Navbar.jsx'
import Headers from './components/Header'
import Swipers from './components/Swiper'
import Categories from './components/Category'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import Genres from './components/Genre.jsx'

function App() {
  const [movie, setMovie] = useState([])
  // const [filtered, setFiltered] = useState([])
  // const [activeGenre, setActivegenre] = useState(0)
  const navigate = useNavigate();

  const loadMovie = async () => {
    try {
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie?&api_key=8c60b3b49802b54dd5f23e9f9e0d92b6");
    setMovie(res.data.results)
    // setFiltered(res.data.results)
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    loadMovie();
  }, [])

  // const functionSearch = async() => {
  //   try {
  //     const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=8c60b3b49802b54dd5f23e9f9e0d92b6&query=${query}`);
  //     setMovie(res.data.results)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   functionSearch();
  // }, [query])

  // const updateQuery = (e) => {
  //   e.preventDefault();
  //   setQuery(search)
  // }


  return (
    <div className="App">
    <GoogleOAuthProvider clientId="414434174427-nic0jjfbcvqaubflqajvvs5gedceip02.apps.googleusercontent.com">
    <Navbars/>
    <Carouselfilms
        movie = {movie}
      />
    <Headers/>
    <Swipers movie={movie}/>
    <Categories/>
    {/* <Categories movie={movie} setFiltered={setFiltered} activeGenre={activeGenre} setActivegenre={setActivegenre}/>
    <div className="containerHome">
      <div className="card-grid">
        {filtered.map((mov)=>{
          return<Cards movie={mov}/>
        })}
      </div>
    </div> */}
    <Swipers movie={movie}/>
    </GoogleOAuthProvider>
    </div>
  );
}

export default App;
