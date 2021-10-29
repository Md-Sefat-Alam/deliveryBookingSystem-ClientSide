import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [offerData, setOfferData] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:7000/user-offer';
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

                                        <Link to='/booking' className='btn btn-warning'>Book Now...</Link>

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

                    {/* <div className='d-flex justify-content-around'>
                        <div className='d-flex flex-column justify-content-center'>
                            <div>
                                <span>Offering</span>
                                <h4>Delivery in 12h</h4>
                            </div>

                            <div>
                                <span>Description</span>
                                <p>if you select this offer we will delivery your product in 12h!</p>
                            </div>

                            <Link to='/' className='btn btn-warning'>Go...</Link>

                        </div>
                        <div>
                            <div>
                                <img src="https://image.freepik.com/free-vector/delivery-track-with-cardboard-boxes_134830-859.jpg" alt="" />
                            </div>
                        </div>
                    </div> */}



                    {/* <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src="https://image.freepik.com/free-vector/delivery-track-with-cardboard-boxes_134830-859.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Delivery in 12h</h5>
                                    <p class="card-text">if you select this offer we will delivery your product in 12h!</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default Home;