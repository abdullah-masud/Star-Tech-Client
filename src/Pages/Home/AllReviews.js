import React from 'react';
import useReviews from '../../hooks/useReviews';
import Loading from '../Shared/Loading';
import Review from './Review';

const AllReviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='flex justify-center flex-col max-w-7xl mx-auto lg:my-16'>
            <h2 className='lg:text-5xl font-bold text-2xl text-center text-primary lg:mb-3'>All Reviews</h2>
            <div data-aos="fade-right" data-aos-duration='800' data-aos-delay='200' className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    reviews.length === 0 ? <Loading /> : reviews.map(review => <Review
                        key={review._id}
                        review={review}

                    ></Review>).reverse()
                }
            </div>
        </div>
    );
};

export default AllReviews;