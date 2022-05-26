import React, { useEffect, useState } from 'react';
import AllOrdersRow from './AllOrdersRow';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import AllOdersCancelModal from './AllOdersCancelModal';
import { toast } from 'react-toastify';

const ManageAllOrders = () => {
    const [allorders, setAllOrders] = useState([]);
    const [orderCancel, setOrderCancel] = useState(null);

    useEffect(() => {
        fetch('https://powerful-anchorage-68667.herokuapp.com/allorders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [allorders])

    const handleCancel = (id) => {
        const url = `https://powerful-anchorage-68667.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order Cancelled')
                // console.log(data)
                const remaining = allorders.filter(order => order._id !== id);
                setAllOrders(remaining);
            })
    }

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
                            setOrderCancel={setOrderCancel}
                        />

                        )
                    }
                </Tbody>

            </Table>
            {
                orderCancel && <AllOdersCancelModal orderCancel={orderCancel} handleCancel={handleCancel} />
            }
        </div >
    );
};

export default ManageAllOrders;