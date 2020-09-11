import React from 'react'
import banner from '../../images/video_banner.jpg';
import './Home.css';
import Product from '../Product/Product';
import Button from '../Button';

export default function Home() {
    return (
        <div className='home'>
           <img className="home__banner" src={banner} alt='home-banner' /> 
           <div className="home__row">
                    <Product
                        id='1'
                        title={`The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses`}
                        price={29.99}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                        rating={5}
                    />
                    <Product
                        id='2'
                        title={'KenWood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Doug Hook and Whisk, 5 Litre Glass Bowl'}
                        price={239.0}
                        image={'https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SX679_.jpg'}
                        rating={4}
                    />
                    <Product
                        id='3'
                        title={'Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)'}
                        price={1094.98}
                        image={'https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg'}
                        rating={4}
                    />
           </div>
           <div className="home__row">
                    {/* Product */}
                    <Product
                        id="7"
                        title="AmazonBasics Electric Glass and Steel Kettle - 1.7-Liter"
                        price={27.71}
                        rating={4.1}
                        image="https://images-na.ssl-images-amazon.com/images/I/812C5q3i5%2BL._AC_SL1500_.jpg"
                    />
                     <Product
                        id="8"
                        title="AmazonBasics Steel, Security Safe Lock Box, Black - 1.2 Cubic Feet & AA Performance Alkaline Batteries - Pack of 20"
                        price={70.41}
                        rating={4.5}
                        image="https://images-na.ssl-images-amazon.com/images/I/718l03qCcJL._AC_SL1000_.jpg"
                    />
            </div>
           <div className='home__row'>
                <Product
                    id='4'
                    title={'Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor'}
                    price={199.99}
                    image={'https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg'}
                    rating={3}
                />
                <Product
                    id='5'
                    title={'Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Sandstone'}
                    price={59.99}
                    image={'https://m.media-amazon.com/images/I/51hZ1Ix1bdL._AC_UL320_.jpg'}
                    rating={5}
                />
                <Product
                    id='6'
                    title={'Apple iPad Pro (2017) 12.9in 64GB Wi-Fi Tablet, Space Gray (Renewed)'}
                    price={799.77}
                    image={'https://m.media-amazon.com/images/I/61jpKblMqtL._AC_UY218_.jpg'}
                    rating={4}
                />
            </div>   
       </div>  
    )
}
