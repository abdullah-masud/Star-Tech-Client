import React from 'react';
import { toast } from 'react-toastify';
import useParts from '../../hooks/useParts';

const ManageProducts = () => {
    const [parts, setParts] = useParts();


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
                                    <label for="delete-modal2" class="btn btn-xs btn-error">Delete</label>

                                    <input type="checkbox" id="delete-modal2" class="modal-toggle" />
                                    <div class="modal modal-bottom sm:modal-middle">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Are You Sure ?</h3>
                                            <div class="modal-action">
                                                <label for="delete-modal2"
                                                    onClick={() => handleCancel(part._id)}
                                                    class="btn btn-success">Yes</label>
                                                <label for="delete-modal2" class="btn btn-error">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;