import React from 'react';
import './Advantage.css'
import { FaRegBuilding } from 'react-icons/fa';
import { BsDoorClosed } from 'react-icons/bs';
import { GiWorld } from 'react-icons/gi';
import { RiTeamLine } from 'react-icons/ri';

const Advantage = () => {
    return (
        <div style={{ backgroundColor: '#01151F' }}>
          <div className="container pb-5">
          <h1 className='pt-5 text-white pb-3'>Our Advantages</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div style={{ backgroundColor: '#042131' }} className="card">
                           <div className='text-center fs-1 text-white'>
                           <FaRegBuilding></FaRegBuilding>
                           </div>
                            <div className="card-body text-center text-white">
                                <h5 className="card-title">Factory Scale</h5>
                                <p className="card-text">Strict inspection on important aspect of production. Precisely analyze and estimate different markets</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div style={{ backgroundColor: '#042131' }} className="card">
                           <div className="text-center fs-1 text-white">
                           <BsDoorClosed></BsDoorClosed>
                           </div>
                            <div className="card-body text-center text-white">
                                <h5 className="card-title">Product Quality</h5>
                                <p className="card-text">Well control and 100% solid in the whole process of manufacturing with quality products.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div style={{ backgroundColor: '#042131' }} className="card">
                          <div className="text-center fs-1 text-white">
                          <GiWorld></GiWorld>
                          </div>
                            <div className="card-body text-center text-white">
                                <h5 className="card-title">Scope of Business</h5>
                                <p className="card-text">Extensive experience in marketing. Provide quality products meet customer demands.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div style={{ backgroundColor: '#042131' }} className="card">
                          <div className="text-center fs-1 text-white">
                          <RiTeamLine></RiTeamLine>
                          </div>
                            <div className="card-body text-center text-white">
                                <h5 className="card-title">Our Team</h5>
                                <p className="card-text">Complete supply chain system, Well control in the whole process of manufacturing products.</p>
                            </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Advantage;