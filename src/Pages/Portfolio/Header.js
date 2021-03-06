import React from 'react';
import img from '../../images/person.png'

const Header = () => {
    return (
        <div className="hero mt-16">
            <div className="hero-content lg:w-11/12 flex-col lg:flex-row-reverse justify-evenly ">
                <img className='w-72' src={img} alt='' data-aos="fade-left" data-aos-duration='800' data-aos-delay='200' />
                <div className='' data-aos="fade-right" data-aos-duration='800' data-aos-delay='200'>
                    <h1 className="lg:text-5xl text-3xl font-bold">Abdullah Al Masud</h1>
                    <p className="py-6 lg:text-3xl text-2xl lg:text-left text-center">Web Developer.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;