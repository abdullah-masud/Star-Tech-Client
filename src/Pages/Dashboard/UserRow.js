import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
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

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role === 'admin' ? <p className='btn btn-success btn-xs'>admin</p>
                    :
                    <button onClick={makeAdmin} class="btn btn-outline btn-xs btn-primary">Make Admin</button>
            }</td>
            <td><button class="btn btn-outline btn-xs btn-error">Remove User</button></td>
        </tr>
    );
};

export default UserRow;