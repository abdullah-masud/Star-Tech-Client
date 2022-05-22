import React from 'react';
import pic from '../../images/pic.png'

const Banner = () => {
    return (
        <div div class="hero min-h-screen" style={{ backgroundImage: `url(${pic})` }
        }>
            <div class="hero-overlay bg-opacity-0"></div>
            <div class="hero-content text-center lg:text-right lg:flex justify-end text-neutral-content">
                <div class="lg:w-2/5 ">
                    <h1 class="mb-5 text-5xl font-bold" data-aos="fade-left" data-aos-duration='1000' data-aos-delay='200'>Inside PC</h1>
                    <p class="mb-5" data-aos="fade-left" data-aos-duration='900' data-aos-delay='400'>We provide all of the most recent and improved computer components for your future computer. If you are a techie, we have just what you are searching for.</p>
                    <button class="btn btn-primary text-white" data-aos="fade-left" data-aos-duration='800' data-aos-delay='600'>Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;