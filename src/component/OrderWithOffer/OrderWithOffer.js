import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookforDelivery from '../BookforDelivery/BookforDelivery';
import Loading from '../Loading/Loading';


const OrderWithOffer = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [selectedOffer, setSelectedOffer] = useState({});

    const { id } = useParams();
    const url = `https://gentle-beyond-97539.herokuapp.com/user-offer/${id}`

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSelectedOffer(data)
                setIsLoading(false);
            })
            .catch(error => {

            })
    }, [])

    if (isLoading) {
        return <Loading></Loading>
    }

    const { _id, offerName, description, imgURL, offer } = selectedOffer
    const offerSelect = { offer, _id }

    return (
        <div>
            <div>
                <div className='container'>
                    <div>
                        <h3 className='heading'>Please fill up from carefully and submit we will contact you</h3>
                    </div>
                    <div>

                        {
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

                                </div>
                                <div>
                                    <div>
                                        <img style={{ maxHeight: '300px' }} className='img-fluid' src={imgURL} alt="" />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <BookforDelivery offerSelect={offerSelect}></BookforDelivery>
        </div>
    );
};

export default OrderWithOffer;