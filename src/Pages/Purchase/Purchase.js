import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const [user] = useAuthState(auth);

    const amountRef = useRef();


    useEffect(() => {
        fetch(`http://localhost:5000/parts/${partId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])

    const { name, price, minOrder, maxOrder, img } = part
    const [totalOrder, setTotalOrder] = useState('')
    const [error, setError] = useState('')

    const errorElement = <p className='text-red-500'>Please Order within the Range</p>

    const handleChangeAmount = () => {
        const amount = amountRef.current.value;
        console.log(amount)
        if (amount >= minOrder && amount <= maxOrder) {
            setTotalOrder(amount)
            setError("")
            amountRef.current.value = ""
        }
        else {
            setError(errorElement)
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
                        <div className='flex w-full justify-between lg:flex-row flex-col items-center'>
                            <div>
                                <p className='text-xl font-semibold mb-2'>Min Order: {minOrder}</p>
                                <p className='text-xl font-semibold'>Max Order: {maxOrder}</p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold mb-2'>Price: ${price}</p>

                                <label for="amount-modal" class="btn modal-button btn-primary text-white btn-sm">Change Amount</label>

                            </div>
                        </div>
                        <p>{error}</p>
                    </div>
                </div>

                <div class="card lg:max-w-lg bg-base-100 shadow-xl px-6">
                    <div class="card-body">
                        <h2 class="uppercase font-bold text-3xl">Checkout</h2>
                        <h2 class="card-title">Total Order: {!totalOrder ? minOrder : totalOrder}</h2>
                        <h2 class="card-title">Total Price: ${!totalOrder ? minOrder : totalOrder * parseInt(price)}</h2>
                        <div>
                            <input type="text" value={user?.displayName} disabled class="input input-bordered w-full max-w-xs mb-3 text-black font-bold" />
                            <input type="text" value={user?.email} disabled placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Phone" class="input input-bordered w-full max-w-xs mt-3" />
                            <div className='flex lg:justify-end justify-center  max-w-xs'>
                                <button className="btn btn-primary text-white btn-sm mt-3 ">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL */}
            <input type="checkbox" id="amount-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box flex flex-col justify-center">
                    <label for="amount-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 class="uppercase text-xl font-bold mb-2 text-center">Enter order amount</h2>
                    <input
                        type="number"
                        ref={amountRef}
                        placeholder='Amount' class="input input-bordered w-full mb-3 text-black font-bold"
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