import React from 'react'
import banner from '../images/video_banner.jpg';
import './Home.css';
import Product from '../components/Product';
import productOne from '../images/startup.jpg';

export default function Home() {
    return (
        <div className='home'>
           <img className="home__banner" src={banner} alt='' /> 
           <div className="home__row">
                <Product  id="1" title="Title Product" price={1111} rating={5} image={productOne} />
                <Product  id="1" title="Title Product" price={1111} rating={5} image={productOne} />
                <Product  id="1" title="Title Product" price={1111} rating={5} image={productOne} />
           </div>
        </div>
    )
}
