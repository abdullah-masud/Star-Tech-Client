import React from 'react';

const Part = ({ part }) => {
    const { name, image, description, minOrder, maxOrder, price } = part
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-5 pt-5">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl'>Price: ${price}</p>
                <p>Min Order: {minOrder}</p>
                <p>Max Order: {maxOrder}</p>
                <div class="card-actions">
                    <button class="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;