import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Cards from './Card.jsx'
import {useParams} from 'react-router-dom'
import Navbars from './Navbar'
import logo from './back1.jpg'
import Categories from './Category.jsx'


const Searchs = () => {
    const {name} = useParams()
    const [search, setSearch] = useState([])

    const functionSearch = async(e) => {
        try {
          const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=8c60b3b49802b54dd5f23e9f9e0d92b6&query=${name}`);
          setSearch(res.data.results)
        } catch (error) {
          console.error(error)
        }
      }

      useEffect(() => {
        functionSearch();
      }, [])
    return(
    <>
    <div className="navAtas">
        <Navbars/>
        <Categories/>
    </div>

    {search.length == 0 ? 
    <h3 className="notfound">FILM NYA GK ADA BANG</h3>
    : 
    <div className="containerHome">
      <div className="tulisan-pojok-search">
        <h1>{`Search Result ${name.toUpperCase()}`}</h1>
      </div>
     <div className="card-grid">
      {search.length > 0 && search.map(film =>{
        return<Cards movie = {film}/>
      })}
     </div>
    </div>}
    </>
    )
}

export default Searchs