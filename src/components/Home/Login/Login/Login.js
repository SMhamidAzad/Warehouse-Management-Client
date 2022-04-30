import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='ms-5'>
            <h2>Login</h2>
            <form>
                <input type="email" name="email" id="" placeholder='name'/>
                <br />
                <br />
                <input type="password" name="password" id="" placeholder='password'/>
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
            <p>New in website? Please <Link to='/signup'>Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;