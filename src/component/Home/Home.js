import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Home = () => {
    const [offerData, setOfferData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    document.title = 'Home || Delivery Booking System';


    useEffect(() => {
        setIsLoading(true);
        // const URI = 'https://gentle-beyond-97539.herokuapp.com/'
        const URI = 'https://gentle-beyond-97539.herokuapp.com/'

        const url = `${URI}user-offer`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOfferData(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleMessage = (e) => {
        e.preventDefault();
        alert('Thanks for message')
        e.target.reset()
    }

    return (
        <div>
            {/* banner part */}
            <div>
                <img src="https://image.freepik.com/free-vector/delivery-track-with-cardboard-boxes_134830-859.jpg" class="d-block w-100" alt="..." />
            </div>

            {/* main offering */}
            <div style={{ overflow: 'hidden' }} className='container'>
                <div>
                    <h3 className='heading'>Get Exclusive Services?</h3>
                </div>
                <div>

                    {
                        offerData.map(singleOffer => {
                            const { _id, offerName, description, imgURL, offer } = singleOffer
                            const url = `/order-with-offer/${_id}`
                            return (
                                <div className='d-flex flex-column flex-md-row justify-content-around py-3 border-bottom'>
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
                                    <div className='d-md-block d-sm-none'>
                                        <div>
                                            <img style={{ maxHeight: '300px' }} className='img-fluid' src={imgURL} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* why chose us section */}
            <div className='container py-5'>
                <div>
                    <h3 className='heading'>Why <NavLink to="/home" className="navbar-brand text-secondary fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink></h3>
                </div>
                <div className=''>
                    <div className='py-3'>
                        <p><NavLink to="/home" className="navbar-brand text-secondary fs-6 fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink> is a household name to all in Bangladesh for having been the pioneer of Courier and Parcel Services in this country. From the Corporate Clients to the average person all the persons have been availing the services of <NavLink to="/home" className="navbar-brand text-secondary fs-6 fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink>.</p>
                    </div>
                    <div className='py-3'>
                        <p>
                            It is reliable and the label is a trustworthy name to all who have taken, taking and will take the services of this Company. The many years of service to the mass and to the corporates have made it the service for all to take.
                        </p>
                    </div>
                    <div className='py-3'>
                        <p>
                            We balance all the clients in a democratic manner and therefore there is no bias and that has itself encouraged repeat clients with similar wants for services.
                        </p>
                    </div>
                    <div className='py-3'>
                        <p>Due to its presence in every remote pocket throughout this country many have found it to be very convenient to send and receive with ease and harmony and this has tempted all to use <NavLink to="/home" className="navbar-brand text-secondary fs-6 fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink> against many competitors who are in the similar trade.</p>
                    </div>
                    <div className='py-3'>
                        <p>Single point of contact for the many services. It is catering to multiple services from a one point and that also includes its own logistics fleet.</p>
                    </div>
                </div>
            </div>
            {/* Why Chose us */}

            <div className='container py-5'>
                <div>
                    <h3 className='heading'>Why Chose <NavLink to="/home" className="navbar-brand text-secondary fw-bold" >Delivery <span className='text-warning'>Booking</span> System</NavLink></h3>
                </div>
                <div className=''>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Our Speed
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    Why use a Courier Service if the item won’t arrive quickly? Our streamlined network ensures the fastest possible movement of documents and packages.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Reliability
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
                                    The SCS system of security checks and emergency back-ups is absolutely complete. Thanks to computerized administration and a staff that is second to none.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Low Cost
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    All rates are quite reasonable, even for heavy/lightweight items, fragile items, articles or bulky printed materials.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    Simplicity
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                <div class="accordion-body">
                                    One telephone call is all it takes to set the process in motion. After that you can leave everything to us, including customs clearance and any last minute details.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enter Message for Delivery Booking System */}
            <div className='container py-5'>
                <div>
                    <h3 className='heading'>Have any Message for us?</h3>
                </div>

                <form onSubmit={handleMessage} class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input required type="text" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Email</label>
                        <input required type="email" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Message</label>
                        <textarea required type="text" class="form-control" id="inputAddress" placeholder="" />
                    </div>

                    <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Subscribe with this Email?
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Home;