import React from 'react';
import { toast } from 'react-toastify';

const AllOrdersRow = ({ order, index }) => {

    const { userName, email, productName, totalPrice, paid, _id, shipped } = order
    // console.log(paid)

    const handleShipped = (id) => {
        const paid = false
        fetch(`http://localhost:5000/shipped/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ paid })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success("Item Shipped")
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>${totalPrice}</td>
            <td>
                <div>
                    {paid && <p className='btn btn-xs btn-success mr-2'>Pending</p>}
                    {shipped && <p className='btn btn-xs btn-success mr-2'>Shipped</p>}
                    {!paid && !shipped && <p className='btn btn-xs btn-error mr-2'>Unpaid</p>}
                    {paid && <button onClick={() => handleShipped(_id)} className='btn btn-outline btn-primary btn-xs'>Ship</button>}
                </div>
            </td>
        </tr>
    );
};

export default AllOrdersRow;