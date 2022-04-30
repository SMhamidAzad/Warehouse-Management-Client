import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div className='ms-5'>
            <h2>Signup</h2>
            <form>
                <input type="email" name="email" id="" placeholder='name'/>
                <br />
                <br />
                <input type="password" name="password" id="" placeholder='password'/>
                <br />
                <br />
                <input type="password" name="confirmPassword" id="" placeholder='confirm password'/>
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
            <p>Already have an account? Please <Link to='/login'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;