import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import banner_0 from '../../images/banners/0.jpg';
import banner_1 from '../../images/banners/1.jpg';
import banner_2 from '../../images/banners/2.jpg';
import banner_3 from '../../images/banners/3.jpg';
import banner_4 from '../../images/banners/4.jpg';
import banner_5 from '../../images/banners/5.jpg';

export default () => (
  <Carousel 
    autoPlay
    swipeable
    showIndicators={false} 
    showThumbs={false} 
    showArrows={false}
  >
		<div>
			<img alt='home-banner' src={banner_0} />
		</div>
		<div>
			<img alt='home-banner' src={banner_1} />
		</div>
		<div>
			<img alt='home-banner' src={banner_2} />
		</div>
		<div>
			<img alt='home-banner' src={banner_3} />
		</div>
		<div>
			<img alt='home-banner' src={banner_4} />
		</div>
		<div>
			<img alt='home-banner' src={banner_5} />
		</div>
	</Carousel>
);
