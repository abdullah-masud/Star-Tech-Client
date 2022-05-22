import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import quote from '../../images/quote.png'
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='lg:h-screen flex justify-center flex-col max-w-7xl mx-auto px-6'>
            <div className='flex justify-between' data-aos="fade-right" data-aos-duration='800' data-aos-delay='200'>
                <div>
                    <h4 className='text-primary text-xl font-bold'>Reviews</h4>
                    <h2 className='text-3xl'>What Out Customer Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' data-aos="fade-right" data-aos-duration='800' data-aos-delay='200'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='flex lg:justify-end justify-center mt-3' data-aos="fade-right" data-aos-duration='800' data-aos-delay='200'>
                <button className='btn btn-outline btn-primary text-white'>See More <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Reviews;