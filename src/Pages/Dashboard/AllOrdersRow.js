import { toast } from 'react-toastify';
import { Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllOrdersRow = ({ order, index, setOrderCancel }) => {

    const { userName, email, productName, totalPrice, paid, _id, shipped } = order

    const handleShipped = (id) => {
        const paid = false
        fetch(`https://powerful-anchorage-68667.herokuapp.com/shipped/${id}`, {
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
        <Tr>
            <Th className='hidden lg:block '>{index + 1}</Th>
            <Td className=' text-center'>{userName}</Td>
            <Td className=' text-center'>{email}</Td>
            <Td className=' text-center'>{productName}</Td>
            <Td className=' text-center'>${totalPrice}</Td>
            <Td className=' text-center'>
                <div>
                    {paid && <p className='btn btn-xs btn-info mr-2 font-bold'>Pending</p>}
                    {shipped && <p className='btn btn-xs btn-success mr-2 font-bold'>Shipped</p>}
                    {!paid && !shipped && <div>
                        <p className='btn btn-xs btn-error mr-2'>Unpaid</p>
                        <label for="all-cancel-modal"
                            onClick={() => setOrderCancel(_id)}
                            class="btn btn-xs btn-error">Cancel</label>
                    </div>}
                    {paid && <button onClick={() => handleShipped(_id)} className='btn btn-outline btn-primary btn-xs'>Ship</button>}
                </div>
            </Td>
        </Tr>

    );
};

export default AllOrdersRow;