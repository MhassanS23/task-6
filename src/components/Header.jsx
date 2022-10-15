import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Headers = () => {
    return(
    <>
    <div className="header-listMovie">
            <div className="navbars">
                <div className="category-movie">
                    <h2>Popular Movie</h2>
                </div>
                <div className="allMovie">
                    <Link to='/all-movie' className="link-allMovie" >See All Movie</Link>
                </div>
            </div>
    </div>
    </>
    )
}

export default Headers