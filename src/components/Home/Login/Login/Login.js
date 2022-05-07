import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { BsArrowLeft } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Loading/Loading';
import axios from 'axios';

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

    const handleSubmitLogin =async e => {
        e.preventDefault();
        const email = userData.email;
        // console.log(email);
        await signInWithEmailAndPassword(userData.email, userData.password)
        const {data} =await axios.post('http://localhost:5000/gettoken',{email})
        console.log(data);
        localStorage.setItem('accessToken',data.accessToken)
        navigate(from, { replace: true });
    }

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            // navigate(from, { replace: true });
        }
    }, [user])
    useEffect(()=>{
        if(error){
            // console.log(error.message);
            toast.error(error.message,{
                position: "top-center",
            })
        }
    },[error])

    useEffect(()=>{
        if(loading){
            return <Loading></Loading>
        }
    },[])
    return (
        <div className='d-flex justify-content-center form-container'>
            <div className='form-div'>
                <div className='d-flex'>
                <h2 className='text-white mb-5'>Login</h2>
                <div className='login-line'></div>
                </div>
                <form className='form-style' onSubmit={handleSubmitLogin}>
                    <input onChange={handleEmailField} type="email" name="email" id="" placeholder='Name' />
                    <br />
                    {errors?.emailError && <p className='text-danger'>❌ {errors.emailError}</p>}
                    <br />
                    <input onChange={handlePasswordField} type="password" name="password" id="" placeholder='Password' />
                    <br />
                    {errors?.passwordError && <p className='text-danger'>❌{errors.passwordError}</p>}
                    <br />
                    <div className='d-flex justify-content-between'>

                        <Link className='link' to='/signup'>
                            <BsArrowLeft></BsArrowLeft>
                            Sign Up Here</Link>
                        <input className='primary-btn' type="submit" value="Login" />
                    </div>
                </form>
                <div className='mt-5'>
                <div className='d-flex justify-content-center mt-4'>
                    <div className='line'>

                    </div>
                    <p style={{marginTop: '-12px'}} className='mx-3 fw-bold'>Or</p>
                    <div className='line'>

                    </div>
                </div>
                <SocialLogin></SocialLogin>
                </div>
            </div>
            <ToastContainer
            position="top-center"
            ></ToastContainer>
        </div>
    );
};

export default Login;

