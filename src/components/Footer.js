import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const Footers = () => {
    
    return(
    <>
    <div className='footer'>
        <p>Copyright© 2000-2020 MV Films, Inc - All Rights Reserved</p>
    </div>
    </>
    )
}

export default Footers

