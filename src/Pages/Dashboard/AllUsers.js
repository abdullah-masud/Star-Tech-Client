import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl my-2'>All Users</h2>
            <Table className='table w-full'>
                <Thead>
                    <Tr>
                        <Th className='hidden lg:block'>no.</Th>
                        <Th className='text-center'>Email</Th>
                        <Th className='text-center'>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        users.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            users={users}
                        />

                        )
                    }
                </Tbody>
            </Table>
        </div>
    );
};

export default AllUsers;