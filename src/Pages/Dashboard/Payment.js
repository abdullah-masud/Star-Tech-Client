import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1ls3F9WqdCZWFZCpbNzVBCogQojitIfqSXXXMg6KVNPgDwPMBMNiLQt9ppgXauFIHGObyrYaZVZWKCHjZ010UH00L90cwzXi');

const Payment = () => {
    const { partId } = useParams()
    const url = `https://powerful-anchorage-68667.herokuapp.com/orders/${partId}`;

    const { data: order, isLoading } = useQuery(['order', partId], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='max-w-7xl mx-auto lg:mt-16 flex flex-col justify-center items-center'>
            <div class="card w-full max-w-sm  bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-xl font-semibold text-primary'>Hello, {order.userName}</p>
                    <h2 class="card-title text-2xl font-bold">Pay for {order.productName}</h2>
                    <p className='text-xl font-semibold'>Please Pay: ${order.totalPrice}</p>
                </div>
            </div>
            <div class="card w-full flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;