import React from 'react';
import './Banner.css'
import { BsArrowRight } from 'react-icons/bs';
import banner from '../../../img/banner/banner-tiles.png'
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
            <h1> Tiles in the country</h1>
          </div>
          <p className='text-white'>Our tiles warehouse is one of the best warehouse in our country . We provide the best product in the country. Thank you for choosing us.</p>
          <button className='explore-btn'><span className='pe-2'>Explore Now</span>
            <BsArrowRight></BsArrowRight>
          </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <img src={banner} alt="" />
      </div>
    </div>
    //   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    //   <div className="carousel-indicators">
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //   </div>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src={banner1} className="d-block w-100 banner" alt="..."/>
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src={banner2} className="d-block w-100 banner" alt="..."/>
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src={banner3} className="d-block w-100 banner" alt="..."/>
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Third slide label</h5>
    //         <p>Some representative placeholder content for the third slide.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
};

export default Banner;