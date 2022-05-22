import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, img, description, minOrder, maxOrder, price, _id } = part
    const navigate = useNavigate();
    const navigateToPurchase = () => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl" >
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl'>Price: ${price}</p>
                <p>Min Order: {minOrder}</p>
                <p>Max Order: {maxOrder}</p>
                <div className="card-actions">
                    <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;