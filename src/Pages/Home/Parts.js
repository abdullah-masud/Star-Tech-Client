import React, { useEffect, useState } from 'react';
import Part from './Part';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Parts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    })

    return (
        <div className='lg:h-screen flex justify-center flex-col max-w-7xl mx-auto'>
            <h2 className='lg:text-5xl font-bold text-2xl text-center text-primary mt-4'>All the Latest Deals</h2>
            <div data-aos="fade-right" data-aos-duration='800' data-aos-delay='200' className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}

                    ></Part>)
                }
            </div>
            <div className='flex lg:justify-end justify-center mt-3 lg:mr-6'>
                <button className='btn btn-sm btn-outline btn-primary text-white'>See More <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Parts;