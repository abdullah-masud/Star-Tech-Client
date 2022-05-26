import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useParts from '../../hooks/useParts';
import DeleteModal from './DeleteModal';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const ManageProducts = () => {
    const [parts, setParts] = useParts();

    const [productData, setProductData] = useState(null);


    const handleCancel = id => {
        const url = `https://powerful-anchorage-68667.herokuapp.com/parts/${id}`
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
            <Table className='table  w-full'>
                <Thead>
                    <Tr>
                        <Th className='hidden lg:block'>no.</Th>
                        <Th className='text-center'>Name</Th>
                        <Th className='text-center'>Price</Th>
                        <Th className='text-center'>Option</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        parts.map((part, index) =>
                            <Tr key={part._id}>
                                <Th className='hidden lg:block '>{index + 1}</Th>
                                <Td className=' text-center'>{part.name}</Td>
                                <Td className=' text-center'>${part.price}</Td>
                                <Td className=' text-center'>
                                    <label htmlFor="delete-modal"
                                        onClick={() => setProductData(part._id)}
                                        className="btn btn-xs btn-error">Delete</label>
                                </Td>
                            </Tr>
                        )
                    }
                </Tbody>
                {
                    productData && <DeleteModal productData={productData} handleCancel={handleCancel} />
                }
            </Table>
        </div>
    );
};

export default ManageProducts;