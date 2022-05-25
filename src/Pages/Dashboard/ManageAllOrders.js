import React, { useEffect, useState } from 'react';
import AllOrdersRow from './AllOrdersRow';

const ManageAllOrders = () => {
    const [allorders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [allorders])

    return (
        <div>
            <h2 className='text-2xl my-2'>Manage All Orders</h2>
            <div class="overflow-x-auto ">
                <table class="table lg:w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allorders.map((order, index) => <AllOrdersRow
                                key={order._id}
                                index={index}
                                order={order}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageAllOrders;