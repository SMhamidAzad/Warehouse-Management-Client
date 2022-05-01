import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

  
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })

    const handleEmailField = e => {
        const emailInput = e.target.value;
        const emailRegx = /\S+@\S+\.\S+/;
        if (emailRegx.test(emailInput)) {
            setUserData({ ...userData, email: emailInput });
            setErrors({ ...errors, emailError: "" })
        }
        else {
            setErrors({ ...errors, emailError: "Invalid Email!" })
            setUserData({ ...userData, email: "" })
        }
    }
    const handlePasswordField = e => {
        const passwordInput = e.target.value;
        if (passwordInput.length >= 6) {
            setUserData({ ...userData, password: passwordInput });
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password should container minimum 6 characters!" });
            setUserData({ ...userData, password: "" })
        }
    }

    const handleSubmitLogin = e => {
        e.preventDefault();
        console.log(userData.email, userData.password);
        signInWithEmailAndPassword(userData.email, userData.password)
    }

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    
    return (
        <div className='ms-5'>
            <h2>Login</h2>
            <form onSubmit={handleSubmitLogin}>
                <input onChange={handleEmailField} type="email" name="email" id="" placeholder='name' />
                <br />
                {errors?.emailError && <p className='text-danger'>❌ {errors.emailError}</p>}
                <br />
                <input onChange={handlePasswordField} type="password" name="password" id="" placeholder='password' />
                <br />
                {errors?.passwordError && <p className='text-danger'>❌{errors.passwordError}</p>}
                <br />
                <input type="submit" value="Login" />
            </form>
            <p>New in website? Please <Link to='/signup'>Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;

