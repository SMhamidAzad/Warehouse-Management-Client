import React from 'react';
import fb from '../../../img/social/Facebook.png'
import twiter from '../../../img/social/Twitter.png'
import insta from '../../../img/social/instagram.png'
import likedin from '../../../img/social/LinkedIn.png'

const Footer = () => {
    return (
        <div style={{backgroundColor: '#042131'}} className='text-center text-white py-5'>
            <p>Prime Door Pro.</p>
            <p>All reserved Copyright, &copy;2022</p>
            <img src={fb} alt="" />
            <img src={twiter} alt="" />
            <img src={insta} alt="" />
            <img src={likedin} alt="" />

        </div>
    );
};

export default Footer;