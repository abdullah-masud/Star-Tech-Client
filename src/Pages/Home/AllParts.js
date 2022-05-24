import Part from './Part';
import useParts from '../../hooks/useParts';

const Parts = () => {
    const [parts] = useParts();

    return (
        <div className='h-screen flex justify-center flex-col max-w-7xl mx-auto lg:my-16'>
            <h2 className='lg:text-5xl font-bold text-2xl text-center text-primary mt-4'>All the Latest Deals</h2>
            <div data-aos="fade-right" data-aos-duration='800' data-aos-delay='200' className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}

                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;