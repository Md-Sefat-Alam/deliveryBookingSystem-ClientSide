import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='container'>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>google Sign In</button>
        </div>
    );
};

export default Login;