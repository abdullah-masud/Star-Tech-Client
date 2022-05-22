import React from 'react';

const Review = ({ review }) => {
    const { name, description, rating } = review
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl border">
            <div class="avatar flex justify-center">
                <div class="mt-6 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3112" alt='' />
                </div>
            </div>
            <div class="card-body text-center">
                <h2 class="card-title block">{name}</h2>
                <p>{description}</p>
                <div class="card-actions ">
                    <p class="p-4 rounded-lg text-center uppercase font-semibold bg-primary text-white">Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;