import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const Cards = ({movie}) => {
    let IMG_BASEURL = "https://image.tmdb.org/t/p/original";
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
          setIsloading(false)
        }, 1500)
      },[])
    return(
    <>
    {isLoading ? 
        <div>
        <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton width={'10rem'} height={'14rem'} duration={2} />
        </SkeletonTheme>
        </div>
    : 
        <Card style={{ width: '10rem'}}  key={movie.id}>
            <Card.Img variant="top" src={IMG_BASEURL+movie.poster_path} onClick={()=>navigate(`/${movie.id}`)}/>
        </Card>
    }   
    </>
    )
}

export default Cards

