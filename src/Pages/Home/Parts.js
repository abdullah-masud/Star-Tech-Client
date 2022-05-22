import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    })

    return (
        <div className='lg:h-screen flex justify-center flex-col max-w-7xl mx-auto '>
            <h2 className='lg:text-5xl text-2xl text-center text-primary mt-4'>All the Latest Deals</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  px-6'>
                {
                    parts.map(part => <Part
                        key={part.id}
                        part={part}
                    ></Part>)
                }
            </div>
            <div className='lg:flex grid mx-28 lg:justify-end mt-3 lg:mr-6'>
                <button className='btn btn-outline btn-primary'>See More <span><svg className='inline-block ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z" /></svg></span></button>
            </div>
        </div>
    );
};

export default Parts;