import React from 'react';

const Skills = () => {
    return (
        <div className='hero'>
            <div className='lg:w-11/12 mt-16  '>
                <h2 className='lg:text-3xl text-center font-semibold uppercase lg:mt-16 lg:mb-0 mb-8'>Web Development Skills</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-6 lg:mt-12' data-aos="fade-down-right" data-aos-duration='800' data-aos-delay='200'>
                    <div className='flex flex-col  items-center'>
                        <h2 className='text-3xl text-primary font-semibold'>HTML5</h2>
                        <img className='w-32' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='' />
                    </div>
                    <div className='flex flex-col  items-center'>
                        <h2 className='text-3xl text-primary font-semibold'>CSS3</h2>
                        <img className='w-32' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='' />
                    </div>
                    <div className='flex flex-col  items-center'>
                        <h2 className='text-3xl text-primary font-semibold'>JavaScript</h2>
                        <img className='w-32' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='' />

                    </div>
                    <div className='flex flex-col  items-center'>
                        <h2 className='text-3xl text-primary font-semibold'>React</h2>
                        <img className='w-32' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='' />
                    </div>
                    <div className='flex flex-col items-center lg:mt-6'>
                        <h2 className='text-3xl text-primary font-semibold'>NodeJS</h2>
                        <img className='w-32' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='' />
                    </div>
                    <div className='flex flex-col items-center lg:mt-6'>
                        <h2 className='text-3xl text-primary font-semibold'>ExpressJS</h2>
                        <img className='w-32' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='' />
                    </div>
                    <div className='flex flex-col items-center lg:mt-6'>
                        <h2 className='text-3xl text-primary font-semibold'>Firebase</h2>
                        <img className='w-32' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt='' />
                    </div>
                    <div className='flex flex-col items-center lg:mt-6'>
                        <h2 className='text-3xl text-primary font-semibold'>MongoDB</h2>
                        <img className='w-32' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;