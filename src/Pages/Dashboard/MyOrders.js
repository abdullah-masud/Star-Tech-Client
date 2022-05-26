import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import CancelModal from './CancelModal';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    const navigate = useNavigate()

    const [orderData, setOrderData] = useState(null)


    useEffect(() => {
        if (user) {
            fetch(`https://powerful-anchorage-68667.herokuapp.com/orders?email=${user?.email}`, {
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
        const url = `https://powerful-anchorage-68667.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order Cancelled')
                // console.log(data)
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            })
    }

    return (
        <div>
            <h2 className='text-2xl my-2'>My Orders</h2>
            <Table className='table  w-full'>
                <Thead>
                    <Tr>
                        <Th className='hidden lg:block'>no.</Th>
                        <Th className='text-center'>Name</Th>
                        <Th className='text-center'>Product</Th>
                        <Th className='text-center'>Quantity</Th>
                        <Th className='text-center'>Price</Th>
                        <Th className='text-center'>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        orders.map((order, index) => <Tr>
                            <Th className='hidden lg:block '>{index + 1}</Th>
                            <Td className=' text-center'>{order.userName}</Td>
                            <Td className=' text-center'>{order.productName}</Td>
                            <Td className=' text-center'>{order.totalOrder}</Td>
                            <Td className=' text-center'>${order.totalPrice}</Td>
                            <Td className=' text-center'>
                                {(order.totalPrice && !order.paid && !order.shipped) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-outline btn-xs btn-success mr-2'>Pay</Link>}


                                {(order.totalPrice && order.paid) &&
                                    <div>
                                        <p className='btn btn-xs btn-info mr-2 font-bold'>Pending</p>
                                        <p className='text-xs'>Transaction ID: <br></br>{order.transactionId}</p>
                                    </div>
                                }

                                {
                                    order.shipped && !order.paid &&
                                    <div>
                                        <p className='btn btn-xs btn-success mr-2 font-bold'>Shipped</p>
                                        <p className='text-[10px] text-primary font-semibold '>Transaction ID <br></br>{order.transactionId}</p>
                                    </div>
                                }

                                {
                                    !order.paid && !order.shipped &&
                                    <label onClick={() => setOrderData(order._id)} for="cancel-modal" class="btn btn-xs btn-error">Cancel</label>
                                }
                            </Td>
                        </Tr>

                        )
                    }
                </Tbody>
                {
                    orderData && <CancelModal orderData={orderData} handleCancel={handleCancel} />
                }
            </Table>

        </div >
    );
};

export default MyOrders;