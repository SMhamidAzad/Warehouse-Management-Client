import React from 'react';
import recommanded1 from '../../../img/recommanded/recommanded-1.jpg'
import recommanded2 from '../../../img/recommanded/recommanded-2.jpg'
import recommanded3 from '../../../img/recommanded/recommanded-3.jpg'
import './Recommanded.css'

const Recommanded = () => {
    return (
        <div style={{ backgroundColor: '#042131' }}>
            <div className="container py-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-6 recommanded-img">
                                    <img  className='w-75' src={recommanded1} alt="" />
                                </div>
                                <div style={{ backgroundColor: '#01151F' }} className="col-md-6 ps-5 pe-3">
                                    <h1 className='text-white py-5'>Highly Recommanded</h1>
                                    <p className='text-white '>Brand customized Hot in South America House Door Interior Plain White Door</p>
                                    <div className='recommanded-btn '>
                                        <small className='btn me-1'>Wholesale</small>
                                        <small className='btn me-1'>Project</small>
                                        <small className='btn me-1'>Construction</small>
                                    </div>
                                    <div className='price-div'>
                                        <small className='price-first-part'>$53.00 - $60.00</small>
                                        <small className='price-last-part'> /Piece</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6 recommanded-img">
                                    <img className='w-75 ' src={recommanded2} alt="" />
                                </div>
                                <div style={{ backgroundColor: '#01151F' }} className="col-md-6 ps-5 pe-3">
                                    <h1 className='text-white py-5'>Highly Recommanded</h1>
                                    <p className="text-white">China Manufacturer House Front Door Designs Steel  Entry Exterior Security Steel Door</p>
                                    <div className='recommanded-btn '>
                                        <small className='btn me-1'>Wholesale</small>
                                        <small className='btn me-1'>Project</small>
                                        <small className='btn me-1'>Construction</small>
                                    </div>
                                    <div className='price-div'>
                                        <small className='price-first-part'>$45.00 - $80.00</small>
                                        <small className='price-last-part'> /Piece</small>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6 recommanded-img">
                                    <img className='w-75' src={recommanded3} alt="" />
                                </div>
                                <div style={{ backgroundColor: '#01151F' }} className="col-md-6 ps-5 pe-3">
                                    <h1 className='text-white py-5'>Highly Recommanded</h1>
                                    <p className="text-white">
                                        Wholesale Cheap Price Commercial Apartment Morden Front Steel Entry Door
                                    </p>
                                    <div className='recommanded-btn '>
                                        <small className='btn me-1'>Wholesale</small>
                                        <small className='btn me-1'>Project</small>
                                        <small className='btn me-1'>Construction</small>
                                    </div>
                                    <div className='price-div'>
                                        <small className='price-first-part'>$33.00 - $70.00</small>
                                        <small className='price-last-part'> /Piece</small>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recommanded;