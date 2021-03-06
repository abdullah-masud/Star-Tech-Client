import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import quote from '../../images/quote.png'
import Review from './Review';
import useReviews from '../../hooks/useReviews';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const [reviews] = useReviews()

    return (
        <div className='lg:mt-0 mt-12 flex justify-center flex-col max-w-7xl mx-auto px-6'>
            <div className='flex justify-between' >
                <div>
                    <h4 className='text-primary text-xl font-bold'>Reviews</h4>
                    <h2 className='text-3xl'>What Out Customer Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    reviews.length === 0 ? <Loading /> : reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>).reverse().slice(0, 3)
                }
            </div>
            <div className='flex lg:justify-end justify-center mt-3' >
                <Link to="/allreviews" className='btn btn-sm btn-outline btn-primary text-white'>See More <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></Link>
            </div>
        </div>
    );
};

export default Reviews;