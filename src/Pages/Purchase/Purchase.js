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

    const quantityRef = useRef();

    const { register, formState: { errors }, handleSubmit, getValues } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${partId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [part])

    const { name, price, minOrder, available, img } = part
    const [orderTotal, setOrderTotal] = useState('')
    const [error, setError] = useState('')

    const errorElement = <p className='text-red-500'>Please Order within the Range</p>

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

        console.log(`total Order: ${totalOrder}, total price: ${totalPrice}, name: ${name}, email: ${email}, phone: ${phoneNumber}`)

        // order info. 
        const order = {
            userName: userName,
            email: email,
            productName: productName,
            phoneNumber: phoneNumber,
            totalPrice: totalPrice,
            totalOrder: totalOrder,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Added to cart')
            })

        const updatedAvailable = parseInt(available) - parseInt(totalOrder);

        const remaining = { available: updatedAvailable.toString() };
        const url = `http://localhost:5000/parts/${partId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(remaining),
        })
            .then(res => res.json())
            .then(info => {
                console.log(info);
            })

    };


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
                        <p>{error}</p>
                    </div>
                </div>

                <div class="card lg:max-w-lg bg-base-100 shadow-xl px-6">
                    <div class="card-body">
                        <h2 class="uppercase font-bold text-3xl mb-5">Checkout</h2>
                        <div className='flex items-center'>
                            <h2 class="card-title mr-2 lg:text-2xl">Total Order: {!orderTotal ? minOrder : orderTotal}</h2>
                            <label htmlFor="amount-modal" class="btn modal-button btn-primary text-white btn-xs">Change</label>
                        </div>

                        <h2 class="card-title  lg:text-2xl mb-5">Total Price: ${!orderTotal ? price * minOrder : orderTotal * price}</h2>
                        <div>
                            <input type="text" value={user?.displayName} disabled class="input input-bordered w-full max-w-xs mb-3 text-black font-bold" />
                            <input type="text" value={user?.email} disabled placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    class="input input-bordered w-full max-w-xs mt-3"
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
                                <label class="label">
                                    {errors.phone?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    {errors.phone?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                                <div className='flex lg:justify-end justify-center max-w-xs'>
                                    <button type='submit' className="btn btn-primary text-white btn-sm mt-3" ><span className='mr-2'>
                                        Add to Cart</span><MdOutlineShoppingCart /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL */}
            <input type="checkbox" id="amount-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box flex flex-col justify-center">
                    <label htmlFor="amount-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 class="uppercase text-xl font-bold mb-2 text-center">Enter order Quantity</h2>
                    <input
                        type="number"
                        ref={quantityRef}
                        placeholder='Quantity' class="input input-bordered w-full mb-3 text-black font-bold"
                    />
                    <div className='flex justify-center modal-action'>
                        <label onClick={handleChangeAmount} for='amount-modal' className='btn btn-primary text-white btn-sm mt-3'>Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;