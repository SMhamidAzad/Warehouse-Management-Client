import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

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

    const handleEmailField=e=>{
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
    const handlePasswordField=e=>{
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
    const handleConfirmPasswordField=e=>{
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
   
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user])
    const handleSubmitSignUp=e=>{
        e.preventDefault();
        createUserWithEmailAndPassword(userData.email,userData.password)
    }
    return (
        <div className='ms-5'>
            <h2>Signup</h2>
            <form onSubmit={handleSubmitSignUp}>
                <input onChange={handleEmailField} type="email" name="email" id="" placeholder='name'/>
                <br />
                {errors?.emailError && <p className='text-danger'>❌ {errors.emailError}</p>}
                <br />
                <input onChange={handlePasswordField} type="password" name="password" id="" placeholder='password'/>
                <br />
                {errors?.passwordError && <p className='text-danger'>❌{errors.passwordError}</p>}
                <br />
                <input onChange={handleConfirmPasswordField} type="password" name="confirmPassword" id="" placeholder='confirm password'/>
                <br />
                <br />
                <input type="submit" value="Signup" />
            </form>
            <p>Already have an account? Please <Link to='/login'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;