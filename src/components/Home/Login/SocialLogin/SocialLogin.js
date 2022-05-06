import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Google from '../../../../img/Google.png'
import auth from '../../../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    return (
        <>
            <div className='text-center'>
                <p className='text-white fw-bold'>Continue with-</p>
                <button onClick={()=>signInWithGoogle()} className='px-5 border-0 rounded bg-danger'>
                    <img src={Google} alt="" />
                    <small className='fw-bold text-white'>Google</small>
                </button>
            </div>
        </>
    );
};

export default SocialLogin;