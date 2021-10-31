import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Loading from '../Loading/Loading';

const MyOrders = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [myOrders, setMyOrders] = useState([]);

    const { user } = useAuth();
    const { uid } = user;

    useEffect(() => {
        setIsLoading(true);
        const url = `http://localhost:7000/my-orders/${uid}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
                setIsLoading(false)
            })
    }, [user])

    const handleDeleteMyOrder = async (id) => {
        const confirmDelete = prompt('Are you sure you want to delete? type <delete>');
        if (confirmDelete === 'delete') {
            const res = await axios.delete(`http://localhost:7000/my-orders/${id}`);
            if (res.status === 200) {
                const removedOrder = myOrders.filter(data => data._id !== id)
                setMyOrders(removedOrder);
            }
        } else {
            alert('Conformation failed')
        }
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="container py-5">
            <h4 className='heading'>My Orders</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    uid ? <>

                        {
                            myOrders.map(order => {
                                console.log(order)
                                const { description, to, phoneTo, from, phoneFrom, cost, img_url, _id, orderStatus, offerSelectedData } = order;

                                return (
                                    <div key={_id} className="col">
                                        <div className="card">
                                            <img src={img_url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 style={{ textTransform: 'uppercase' }} className="card-title">{description} <span style={{ borderRadius: '10px', padding: '0px 10px', backgroundColor: 'orange', color: 'white', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '12px' }}>{orderStatus}</span></h5>
                                                <div className='d-flex justify-content-between py-3'>
                                                    <div>
                                                        <span>From:</span>
                                                        <p className='fs-4 fw-bold p-0 m-0'>{from}</p>
                                                        <p className='fw-bold p-0 m-0'>{phoneFrom}</p>
                                                    </div>
                                                    <div>
                                                        <span>To:</span>
                                                        <p className='fs-4 fw-bold p-0 m-0'>{to}</p>
                                                        <p className='fw-bold p-0 m-0'>{phoneTo}</p>
                                                    </div>
                                                </div>

                                                <div className='py-0'>
                                                    <span>Cost:</span>
                                                    <p className='fs-4 fw-bold'>{cost} tk</p>
                                                </div>

                                                {
                                                    offerSelectedData?._id && <div className='py-0'>
                                                        <span>Selected a offer:</span>
                                                        <p className='fs-5 fw-bold'>{offerSelectedData.offer}</p>
                                                    </div>
                                                }


                                            </div>
                                            <div className="card-footer d-flex justify-content-between">
                                                <button onClick={() => handleDeleteMyOrder(_id)} className='btn btn-danger'>Cancel Order</button>
                                                <Link to='/manage-all-orders' className='btn btn-success'>Manage All Orders</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </>
                        :
                        <div>
                            Please Login with another account
                        </div>
                }
            </div>
        </div>
    );
};

export default MyOrders;