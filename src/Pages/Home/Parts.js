import Part from './Part';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import useParts from '../../hooks/useParts';
import { Link } from 'react-router-dom';

const Parts = () => {
    const [parts] = useParts();

    return (
        <div className=' flex justify-center flex-col max-w-7xl mx-auto mt-16'>
            <h2 className='lg:text-5xl font-bold text-2xl text-center text-primary mt-4'>All the Latest Deals</h2>
            <div data-aos="fade-right" data-aos-duration='800' data-aos-delay='200' className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>).reverse().slice(0, 3)
                }
            </div>
            <div className='flex lg:justify-end justify-center mt-3 lg:mr-6'>
                <Link to='/allparts' className='btn btn-sm btn-outline btn-primary text-white'>See More <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></Link>
            </div>
        </div>
    );
};

export default Parts;