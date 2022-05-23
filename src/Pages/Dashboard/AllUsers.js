import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl my-2'>All Users: {users.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;