import React from 'react';

const Loading = () => {
    return (
        <div className='container'>
            <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;