import axios from 'axios';
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const BookforDelivery = () => {
    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        axios.post('http://localhost:7000/booking', data)
            .then(res => {
                console.log(res);
                // if (res.data.insertedId) {
                //     alert('Added successfully')
                // }
            })
        e.target.reset();
    }
    return (
        <div className='container bookForDelivery'>
            <div>
                <h2>Book For Delivery</h2>
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder='Service Name' />
                        <textarea {...register("description")} placeholder='Description' defaultValue="Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa." />
                        <input {...register("price")} placeholder='Price' />
                        <input {...register("img")} placeholder='img url' />
                        <input type="submit" />

                        <Controller
                            name="iceCreamType"
                            control={control}
                            render={({ field }) => <Select
                                {...field}
                                options={[
                                    { value: "chocolate", label: "Chocolate" },
                                    { value: "strawberry", label: "Strawberry" },
                                    { value: "vanilla", label: "Vanilla" }
                                ]}
                            />}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookforDelivery;