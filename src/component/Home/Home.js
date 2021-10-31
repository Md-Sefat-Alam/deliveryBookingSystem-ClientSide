import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [offerData, setOfferData] = useState([]);

    useEffect(() => {
        // const URI = 'https://gentle-beyond-97539.herokuapp.com/'
        const URI = 'http://localhost:7000/'

        const url = `${URI}user-offer`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOfferData(data))
    }, [])

    return (
        <div>
            {/* banner part */}
            <div>
                <img src="https://image.freepik.com/free-vector/delivery-track-with-cardboard-boxes_134830-859.jpg" class="d-block w-100" alt="..." />
            </div>

            {/* main offering */}
            <div className='container'>
                <div>
                    <h3 className='heading'>Get Exclusive Services?</h3>
                </div>
                <div>

                    {
                        offerData.map(singleOffer => {
                            const { _id, offerName, description, imgURL, offer } = singleOffer
                            const url = `/order-with-offer/${_id}`
                            return (
                                <div className='d-flex justify-content-around py-3 border-bottom'>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <div>
                                            <span className='text-secondary'>Offering Title</span>
                                            <h4>{offerName}</h4>
                                        </div>

                                        <div>
                                            <span className='text-secondary'>Description</span>
                                            <p>{description}</p>
                                        </div>

                                        <div>
                                            <span className='text-secondary'>Offering</span>
                                            <p>{offer}</p>
                                        </div>

                                        <Link to={url} className='btn btn-warning'>Book Now...</Link>

                                    </div>
                                    <div>
                                        <div>
                                            <img style={{ maxHeight: '300px' }} src={imgURL} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;