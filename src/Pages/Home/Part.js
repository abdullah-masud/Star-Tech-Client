import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, image, description, minOrder, maxOrder, price, id } = part

    const navigate = useNavigate();
    const navigateToPurchase = () => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl" >
            <figure className="px-5 pt-5">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl'>Price: ${price}</p>
                <p>Min Order: {minOrder}</p>
                <p>Max Order: {maxOrder}</p>
                <div className="card-actions">
                    <button onClick={() => navigateToPurchase(id)} className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;