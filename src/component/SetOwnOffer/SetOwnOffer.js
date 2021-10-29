import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const SetOwnOffer = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);

        axios.post('http://localhost:7000/user-offer', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added successfully');
                    history.push(redirect_uri)
                }
            })
        e.target.reset();
    }
    return (
        <div className='container'>
            <div className='text-center'>
                <h3 className='heading'>Customize and get Own Make Offer?</h3>
                <span style={{ color: 'lightgray' }}>fill up this form carefully</span>
            </div>
            <div className='d-flex justify-content-center'>
                <form className='w-50' onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputWrap'>
                        <span>Offer Name</span>
                        <input required {...register("offerName")} type='text' placeholder='Like: (Delivery Time)' />
                    </div>
                    <div className='inputWrap'>
                        <span>A suitable description</span>
                        <textarea required {...register("description")} type='text' placeholder='simple description here' />
                    </div>
                    <div className='inputWrap'>
                        <span>Image URL</span>
                        <input required {...register("imgURL")} type='text' placeholder='a suitable imgURL here' />
                    </div>
                    <div className='inputWrap'>
                        <span>Main Offer</span>
                        <input required {...register("offer")} type='text' placeholder='Like: (Delivery in 12h)' />
                    </div>
                    <div className='my-5'>
                        <input type='submit' className='btn btn-primary' value='Submit' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SetOwnOffer;