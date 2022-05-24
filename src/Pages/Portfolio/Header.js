import React from 'react';
import img from '../../images/person.png'

const Header = () => {
    return (
        <div class="hero mt-16 ">
            <div class="hero-content w-11/12 flex-col lg:flex-row-reverse justify-evenly ">
                <img className='w-64' src={img} alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Abdullah Al Masud</h1>
                    <p class="py-6 text-3xl">Web Developer.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;