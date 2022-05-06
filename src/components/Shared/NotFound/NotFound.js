import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ height: '90vh' }} className='text-center pt-5'>
            <h1 className=' pt-5'>Oops the page you are looking is not found!!</h1>
            <h1 className='text-danger fw-bold'>404!!</h1>
            <Link to='/' className='primary-btn'>Back To Home</Link>
        </div>
    );
};

export default NotFound;