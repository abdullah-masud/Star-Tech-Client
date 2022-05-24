import React from 'react';
import img from '../../images/person.png'

const Header = () => {
    return (
        <div class="hero mt-16">
            <div class="hero-content lg:w-11/12 flex-col lg:flex-row-reverse justify-evenly ">
                <img className='w-72' src={img} alt='' />
                <div className=''>
                    <h1 class="lg:text-5xl text-3xl font-bold">Abdullah Al Masud</h1>
                    <p class="py-6 lg:text-3xl text-2xl lg:text-left text-center">Web Developer.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;