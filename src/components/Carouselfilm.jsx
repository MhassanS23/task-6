import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlayCircle
} from '@fortawesome/free-solid-svg-icons'


const Carouselfilms = ({movie}) => {
    return(
    <>
    <Carousel controls={false} >
      <Carousel.Item interval={4000} >
        <img
          className="d-block w-100"
          src="https://image.tmdb.org/t/p/w500/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>AVATAR</h1>
          <p>In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.</p>
          <button className="tombol-trailer"><FontAwesomeIcon icon={faPlayCircle} /> WATCH TRAILER</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://image.tmdb.org/t/p/w500/yaze6df9AMIA9oeDEbIZ4zOTRCJ.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>PREY</h1>
          <p>When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.</p>
          <button className="tombol-trailer"><FontAwesomeIcon icon={faPlayCircle} /> WATCH TRAILER</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.tmdb.org/t/p/w500/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Thor: Love and Thunder</h1>
          <p>After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.</p>
          <button className="tombol-trailer"><FontAwesomeIcon icon={faPlayCircle} /> WATCH TRAILER</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    )
}

export default Carouselfilms