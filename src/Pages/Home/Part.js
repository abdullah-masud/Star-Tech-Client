import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, img, description, minOrder, available, price, _id } = part

    const [notAvailable, setNotAvailable] = useState('');

    const navigate = useNavigate();
    const navigateToPurchase = () => {
        if (available > 0) {
            navigate(`/purchase/${_id}`)
            setNotAvailable("")
        }
        else {
            setNotAvailable("Not Available")
        }
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl" >
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className='flex w-full justify-between items-center'>
                    <div>
                        <p className='text-xl font-semibold mb-2'>Min Order: {minOrder}</p>
                        <p className='text-xl font-semibold'>Available: {available}</p>
                    </div>
                    <div>
                        <p className='text-xl font-semibold mb-2'>Price: ${price}</p>
                        <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary text-white btn-sm">Purchase</button>
                    </div>
                </div>
                <p className='text-red-500'>{notAvailable}</p>
            </div>
        </div>
    );
};

export default Part;