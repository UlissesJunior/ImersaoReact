import React from 'react';
import BannerImg from '../img/banner.png'

function Banner() {
    return(
        <div className='banner'>
            <img src={BannerImg} alt='banner'/>
        </div>
    )
}

export default Banner;