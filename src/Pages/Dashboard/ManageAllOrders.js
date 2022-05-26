import React, { useEffect, useState } from 'react';
import AllOrdersRow from './AllOrdersRow';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
            <Table className='table  w-full'>
                <Thead>
                    <Tr>
                        <Th className='hidden lg:block'>no.</Th>
                        <Th className='text-center'>Name</Th>
                        <Th className='text-center'>Email</Th>
                        <Th className='text-center'>Product</Th>
                        <Th className='text-center'>Price</Th>
                        <Th className='text-center'>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        allorders.map((order, index) => <AllOrdersRow
                            key={order._id}
                            index={index}
                            order={order}
                        />

                        )
                    }
                </Tbody>

            </Table>
        </div >
    );
};

export default ManageAllOrders;