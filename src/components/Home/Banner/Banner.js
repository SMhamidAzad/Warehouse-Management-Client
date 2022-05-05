import React from 'react';
import './Banner.css'
import { BsArrowRight } from 'react-icons/bs';
import banner from '../../../img/banner/door-banner.png'
import banner1 from '../../../img/banner/banner-1.png'
import banner2 from '../../../img/banner/banner-2.png'
import banner3 from '../../../img/banner/banner-3.png'

const Banner = () => {
  return (
    <div className='row banner ps-3'>
      <div className="col-md-6">
        <div className='d-flex align-items-center h-100'>
          <div>
          <div className='text-white'>
            <h1>We Provide the Best</h1>
            <h1> Door in the country</h1>
          </div>
          <p className='text-white'>Our door warehouse is one of the best warehouse in our country . We provide the best product in the country. Thank you for choosing us.</p>
          <button className='explore-btn'><span className='pe-2'>Explore Now</span>
            <BsArrowRight></BsArrowRight>
          </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center h-100">
        <img className='img-fluid' src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;