import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%'
        }}>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) => user.accessToken ? children : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                >
                </Redirect>
            }
        >
        </Route>
    );
};

export default PrivetRoute;