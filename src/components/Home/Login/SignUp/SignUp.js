import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BsArrowLeft } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Loading/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
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
    const handleConfirmPasswordField = e => {
        const confirmPasswordField = e.target.value;
        if (confirmPasswordField === userData.password) {
            setUserData({ ...userData, confirmPassword: confirmPasswordField });
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "Password doesn't matched!" })
            setUserData({ ...userData, confirmPassword: "" })
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    useEffect(()=>{
        if(loading){
            return <Loading></Loading>
        }
    },[])
    const handleSubmitSignUp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(userData.email, userData.password)
    }
    useEffect(()=>{
        if(error){
            // console.log(error.message);
            toast.error(error.message,{
                position: "top-center",
            })
        }
    },[error])
    return (

        <div className='d-flex justify-content-center form-container'>
            <div className='form-div'>
                <div className='d-flex'>
                    <h2 className='text-white mb-5'>Signup</h2>
                    <div className='login-line'></div>
                </div>
                <form className='form-style' onSubmit={handleSubmitSignUp}>
                    <input onChange={handleEmailField} type="email" name="email" id="" placeholder='Email' />
                    <br />
                    {errors?.emailError && <p className='text-danger'>❌ {errors.emailError}</p>}
                    <br />
                    <input onChange={handlePasswordField} type="password" name="password" id="" placeholder='Password' />
                    <br />
                    {errors?.passwordError && <p className='text-danger'>❌{errors.passwordError}</p>}
                    <br />
                    <input className='mb-4' onChange={handleConfirmPasswordField} type="password" name="confirmPassword" id="" placeholder='confirm password' />
                    <br />
                    <div className='d-flex justify-content-between'>

                        <Link className='link' to='/login'>
                            <BsArrowLeft></BsArrowLeft>
                            Back To Login</Link>
                        <input className='primary-btn' type="submit" value="Signup" />
                    </div>
                </form>
                <div className='d-flex justify-content-center mt-3'>
                    <div className='line'>

                    </div>
                    <p style={{ marginTop: '-12px' }} className='mx-3 fw-bold'>Or</p>
                    <div className='line'>

                    </div>
                </div>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer
            position="top-center"
            ></ToastContainer>
        </div>
    );
};

export default SignUp;