import React from 'react';
import Google from '../../../../img/Google.png'

const SocialLogin = () => {
    return (
        <>
            <div className='text-center'>
                <p className='text-white fw-bold'>Continue with-</p>
                <button className='px-5 border-0 py-1 rounded'>
                    <img src={Google} alt="" />
                    Google
                </button>
            </div>
        </>
    );
};

export default SocialLogin;