import React from 'react';

const Review = ({ review }) => {
    const { name, description, rating } = review
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions ">
                    <p class="p-4 rounded-lg text-center uppercase font-semibold bg-primary text-white">Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;