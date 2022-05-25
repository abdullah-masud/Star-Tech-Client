import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useParts from '../../hooks/useParts';
import DeleteModal from './DeleteModal';

const ManageProducts = () => {
    const [parts, setParts] = useParts();

    const [productData, setProductData] = useState(null);


    const handleCancel = id => {
        const url = `http://localhost:5000/parts/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Deleted')
                console.log(data)
                const remaining = parts.filter(part => part._id !== id);
                setParts(remaining);
            })

    }

    return (
        <div>
            <h2 className='text-2xl my-2'>Manage Products</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <tr key={part._id}>
                                <th>{index + 1}</th>
                                <td>${part.name}</td>
                                <td>${part.price}</td>
                                <td>
                                    <label for="delete-modal"
                                        onClick={() => setProductData(part._id)}
                                        class="btn btn-xs btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                    {
                        productData && <DeleteModal productData={productData} handleCancel={handleCancel} />
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;