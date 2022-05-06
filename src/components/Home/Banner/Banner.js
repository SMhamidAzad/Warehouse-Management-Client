import React from 'react';
import './Banner.css'
import { BsArrowRight } from 'react-icons/bs';
import banner from '../../../img/banner/door-banner.png'

const Banner = () => {
  return (
    <div className='row banner ps-3 m-0'>
      <div className="col-md-6">
        <div className='d-flex align-items-center h-100'>
          <div>
          <div className='text-white'>
            <h1 className='banner-title'>Welcome to the Best</h1>
            <h1 className='banner-title'> Prime Door Pro.</h1>
          </div>
          <p className='text-white py-3'>Our door warehouse is one of the best warehouse in our country . We provide the best product in the country. Thank you for choosing us.</p>
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