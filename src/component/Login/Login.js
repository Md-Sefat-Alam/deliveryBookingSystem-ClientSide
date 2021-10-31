import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import googleLogo from '../../images/googleLogo/googleLogo.png'


const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { signInUsingGoogle, setUser, setMessage, setIsLoading } = useAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                setMessage('Login Successful')
                history.push(redirect_uri)
            })
            .catch(error => {
                setMessage(error.code);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div style={{ minHeight: '90vh' }} className='container d-flex flex-column align-items-center justify-content-center'>

            <div className=''>
                <div>
                    <button style={{ color: 'green', textAlign: 'left', fontWeight: 'bolder', border: 'none', backgroundColor: 'white' }} className="" onClick={handleGoogleLogin}>
                        <img style={{ width: '50px' }} src={googleLogo} alt="" />  || Sign In With Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Login;