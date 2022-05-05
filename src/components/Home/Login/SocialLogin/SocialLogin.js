import React from 'react';
import Google from '../../../../img/Google.png'

const SocialLogin = () => {
    return (
        <>
            <div className='text-center'>
                <p className='text-white fw-bold'>Continue with-</p>
                <button className='px-5 border-0 rounded bg-danger'>
                    <img src={Google} alt="" />
                    <small className='fw-bold text-white'>Google</small>
                </button>
            </div>
        </>
    );
};

export default SocialLogin;