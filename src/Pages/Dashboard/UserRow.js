import React from 'react';
import { toast } from 'react-toastify';
import { Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const UserRow = ({ user, index, refetch, users }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully Made an Admin')
                }
            })
    }

    // const handleDelete = id => {
    //     const url = `http://localhost:5000/users/${id}`
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             toast.success('User Deleted')
    //             console.log(data)
    //             refetch()
    //         })

    // }



    return (
        <Tr>
            <Th className='hidden lg:block '>{index + 1}</Th>
            <Td className=' text-center'>{email}</Td>
            <Td className=' text-center'>{
                role === 'admin' ? <p className='btn btn-success btn-xs'>admin</p>
                    :
                    <button onClick={makeAdmin} class="btn btn-outline btn-xs btn-primary">Make Admin</button>
            }</Td>
        </Tr>
    );
};

export default UserRow;