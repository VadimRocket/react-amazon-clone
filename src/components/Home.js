import React from 'react'
import banner from '../images/video_banner.jpg';
import './Home.css';

export default function Home() {
    return (
        <div className='home'>
           <img className="home__banner" src={banner} alt='' /> 
        </div>
    )
}
