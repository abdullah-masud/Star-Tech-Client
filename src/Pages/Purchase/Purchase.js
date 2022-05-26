import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from 'react-toastify';

const Purchase = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const [user] = useAuthState(auth);

    const [disabled, setDisabled] = useState(false);

    const quantityRef = useRef();

    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();

    useEffect(() => {
        fetch(`https://powerful-anchorage-68667.herokuapp.com/parts/${partId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [part])

    const { name, price, minOrder, available, img } = part
    const [orderTotal, setOrderTotal] = useState('')
    const [error, setError] = useState('')

    const errorElement = <p className='text-red-500 text-semibold'>Please Order within the Range</p>

    const handleChangeAmount = () => {
        const quantiy = quantityRef.current.value;
        console.log(quantiy)
        if (parseInt(quantiy) >= parseInt(minOrder) && parseInt(quantiy) <= parseInt(available)) {
            console.log("hello")
            setOrderTotal(quantiy)
            setError("")
            quantityRef.current.value = ""
        }
        else {
            console.log("not")
            setError(errorElement)
        }
    }

    const onSubmit = data => {
        const totalOrder = orderTotal || minOrder;
        const totalPrice = (!orderTotal ? price * minOrder : orderTotal * price).toString()
        const userName = user?.displayName;
        const email = user?.email;
        const phoneNumber = data.phone;
        const productName = name;
        const address = data.address


        // order info. 
        const order = {
            userName: userName,
            email: email,
            productName: productName,
            phoneNumber: phoneNumber,
            totalPrice: totalPrice,
            totalOrder: totalOrder,
            address
        }

        fetch('https://powerful-anchorage-68667.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                reset()
                toast.success('Added to cart')
            })



    };

    const handleChange = event => {
        const value = parseInt(event.target.value)
        console.log(value, typeof value)
        if ((value + 1) <= parseInt(minOrder) || (value - 1) >= parseInt(available) || isNaN(value)) {
            setDisabled(true)
            setError(errorElement)
        }
        else {
            setDisabled(false)
            setOrderTotal(value)
            setError("")
            quantityRef.current.value = ""
        }

    }


    return (
        <div className='max-w-7xl mx-auto h-screen lg:flex flex-col justify-center items-center px-6 lg:px-0'>
            <h2 className='lg:text-2xl font-bold text-2xl text-center text-primary mb-4'>Hello {user?.displayName}</h2>
            <div className='lg:flex justify-center items-center'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl lg:mr-6 mb-5 lg:mb-0" >
                    <figure className="px-5 pt-5">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <div className='flex w-full justify-between  flex-col items-center'>
                            <div>
                                <p className='text-xl font-semibold mb-2'>Min Order: {minOrder}</p>
                                <p className='text-xl font-semibold mb-2'>Available: {available}</p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Price: ${price}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl px-6">
                    <div className="card-body">
                        <h2 className="uppercase font-bold text-3xl mb-5">Checkout</h2>
                        <div className='flex items-center'>
                            <h2 className="card-title mr-2 lg:text-2xl">Total Order: {!orderTotal ? minOrder : orderTotal}</h2>

                        </div>

                        <h2 className="card-title  lg:text-2xl mb-5">Total Price: ${!orderTotal ? price * minOrder : orderTotal * price}</h2>
                        <div>
                            <label className='label-text'>Enter Quantity</label>
                            <input type="number"
                                defaultValue={minOrder}
                                onChange={handleChange}
                                className="input input-bordered w-full max-w-xs mb-3  text-black font-bold" />
                            <p>{error}</p>

                            <input type="text" value={user?.displayName} disabled className="input input-bordered w-full max-w-xs mb-3 text-black font-bold mt-4" />
                            <input type="text" value={user?.email} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Phone Input */}
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    className="input input-bordered w-full max-w-xs mt-3"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters of longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                                {/* Phone Input Ends*/}

                                {/* Address input starts */}
                                <div className="form-control w-full max-w-xs">
                                    <textarea
                                        type="text"

                                        placeholder="Address"
                                        className="input input-bordered w-full max-w-xs h-20"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                    </label>
                                </div>
                                {/* Address input ends */}

                                <div className='flex lg:justify-end justify-center max-w-xs'>
                                    <button type='submit'
                                        disabled={disabled}
                                        className="btn btn-primary text-white btn-sm mt-3" ><span className='mr-2'>
                                            Add to Cart</span><MdOutlineShoppingCart /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;