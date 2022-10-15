import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link, useNavigate} from 'react-router-dom'




const Cards = ({movie}) => {
    let IMG_BASEURL = "https://image.tmdb.org/t/p/w500";
    const navigate = useNavigate();
    return(
    <>
    <Card style={{ width: '18rem'}}  key={movie.id}>
        <Card.Img variant="top" src={IMG_BASEURL+movie.poster_path} onClick={()=>navigate(`/${movie.id}`)}/>
    </Card>
    </>
    )
}

export default Cards

