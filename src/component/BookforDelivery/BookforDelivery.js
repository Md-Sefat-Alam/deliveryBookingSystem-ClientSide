import axios from 'axios';
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import useAuth from '../../hooks/useAuth';
import './BookforDelivery.css'



const BookforDelivery = (props) => {
    const { offerSelect } = props;
    document.title = 'Book for Delivery || Delivery Booking System';
    if (offerSelect?._id) {
        document.title = 'Order With Offer || Delivery Booking System';
    }

    const { user } = useAuth();

    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data, e) => {
        data.orderPerson = {
            userEmail: user.email,
            userName: user.displayName
        };
        data.orderStatus = 'pending';
        data.identifyUser = user.uid;
        if (offerSelect._id) {
            data.offerSelectedData = offerSelect;
        }

        console.log(data);

        // const URI = 'https://gentle-beyond-97539.herokuapp.com/'
        const URI = 'https://gentle-beyond-97539.herokuapp.com/'

        axios.post(`${URI}booking`, data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added successfully');
                }
            })
        e.target.reset();
    }

    return (
        <div className='container bookForDelivery'>
            <div>
                <h2 className='heading'>Book For Delivery</h2>
                <div className='d-flex justify-content-center'>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex flex-column flex-md-row'>
                            <div className='d-flex flex-column w-100 w-md-100'>
                                {/* <div className='inputWrap'>
                                    <span>Service Type</span>
                                    <input required id='serviceType' {...register("serviceType")} />
                                </div> */}
                                <div className='inputWrap'>
                                    <span>Service Type</span>
                                    <Controller
                                        name="serviceType"
                                        control={control}
                                        render={({ field }) => <Select
                                            {...field}
                                            options={[
                                                { value: "parcel", label: "PSL" }
                                            ]}
                                        />}
                                    />
                                </div>

                                <div className='inputWrap'>
                                    <span>Cost</span>
                                    <input required {...register("cost")} type='number' />
                                </div>

                                <div className='inputWrap'>
                                    <span>Image URL</span>
                                    <input required {...register("img_url")} />
                                </div>

                                <div className='inputWrap'>
                                    <span>Order Date</span>
                                    <input required type="date" {...register('orderDate')} />
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='inputWrap'>
                                    <span>Quantity</span>
                                    <input required {...register("quantity")} type='number' />
                                </div>
                                <div className='inputWrap'>
                                    <span>Description</span>
                                    <textarea className='d-inline' required {...register('description')} cols="30" rows="10"></textarea>
                                </div>
                            </div>

                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>

                                <div className='inputWrap'>
                                    <span>From</span>
                                    <input required {...register("from")} />
                                </div>

                                <div className='inputWrap'>
                                    <span>Address</span>
                                    <input required {...register("addressFrom")} />
                                </div>

                                <div className='inputWrap'>
                                    <span>Name</span>
                                    <input defaultValue={user.displayName} required {...register("nameClient")} />
                                </div>

                                <div className='inputWrap'>
                                    <span>Phone</span>
                                    <input required {...register("phoneFrom")} />
                                </div>
                            </div>
                            <div>

                                <div className='inputWrap'>
                                    <span>To</span>
                                    <input required {...register("to")} />
                                </div>


                                <div className='inputWrap'>
                                    <span>Address</span>
                                    <input required {...register("addressTo")} />
                                </div>

                                <div className='inputWrap'>
                                    <span>Name</span>
                                    <input defaultValue="" required {...register("nameClient")} />
                                </div>
                                <div className='inputWrap'>
                                    <span>Phone</span>
                                    <input required {...register("phoneTo")} />
                                </div>
                            </div>
                        </div>
                        <div className='py-3 mt-5'>
                            <input className='btn btn-primary' type="submit" value="Submit" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookforDelivery;