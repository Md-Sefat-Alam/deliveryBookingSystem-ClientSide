import React from 'react';
import useAuth from '../../hooks/useAuth';

const UserData = () => {
    const { user, logOut } = useAuth();
    const { displayName, photoURL, email, emailVerified } = user;
    return (
        <div className='w-100'>
            <div className="modal fade modal-dialog modal-dialog-centered" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex flex-column align-items-center">
                            <div style={{
                                borderRadius: '50%',
                                overflow: 'hidden'
                            }}>
                                <img className='img-fluid' src={photoURL} alt="" />
                            </div>
                            <h3>{displayName}</h3>
                            <p>{email}</p>
                            <span>{emailVerified ? 'Email Verified' : "Email Not Verified"}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={logOut} data-bs-dismiss="modal" type="button" className="btn btn-danger">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserData;