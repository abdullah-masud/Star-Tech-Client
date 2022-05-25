import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate()

    const [deleteModal, setDeleteModal] = useState('')


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken');
                        navigate('/home')
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                })
        }
    }, [user, navigate, orders])

    const handleCancel = (id) => {
        console.log(id)

        // const url = `http://localhost:5000/orders/${id}`
        // fetch(url, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         toast.success('Order Cancelled')
        //         console.log(data)
        //         const remaining = orders.filter(order => order._id !== id);
        //         setOrders(remaining);
        //     })

    }

    return (
        <div>
            <h2 className='text-2xl my-2'>My Orders</h2>
            <div class="overflow-x-auto ">
                <table class="table lg:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.productName}</td>
                                <td>{order.totalOrder}</td>
                                <td>${order.totalPrice}</td>
                                <td>${order._id}</td>
                                <td>
                                    {(order.totalPrice && !order.paid && !order.shipped) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-outline btn-xs btn-success mr-2'>Pay</Link>}


                                    {(order.totalPrice && order.paid) &&
                                        <div>
                                            <p className='btn btn-xs btn-success mr-2 font-bold'>Pending</p>
                                            <p className='text-xs'>Transaction ID: <br></br>{order.transactionId}</p>
                                        </div>
                                    }

                                    {
                                        order.shipped && !order.paid && <p className='btn btn-xs btn-success mr-2 font-bold'>Shipped</p>
                                    }

                                    {
                                        !order.paid && !order.shipped && <label for="delete-modal" onClick={() => handleCancel(order._id)} class="btn btn-xs btn-error">Cancel</label>
                                    }



                                    <input type="checkbox" id="delete-modal" class="modal-toggle" />
                                    <div class="modal modal-bottom sm:modal-middle">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Are You Sure ?</h3>
                                            <div class="modal-action">
                                                <label name='cancel' id='yes' for="delete-modal" class="btn btn-success">Yes</label>
                                                <label for="delete-modal" class="btn btn-error">No</label>
                                            </div>
                                        </div>
                                    </div>

                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;