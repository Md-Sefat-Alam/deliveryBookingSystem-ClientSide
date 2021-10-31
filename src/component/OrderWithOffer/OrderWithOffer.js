import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookforDelivery from '../BookforDelivery/BookforDelivery';


const OrderWithOffer = () => {
    const [selectedOffer, setSelectedOffer] = useState({});

    const { id } = useParams();
    const url = `http://localhost:7000/user-offer/${id}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedOffer(data))
            .catch(error => {

            })
    }, [])

    console.log(selectedOffer);
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
                                        <img style={{ maxHeight: '300px' }} src={imgURL} alt="" />
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