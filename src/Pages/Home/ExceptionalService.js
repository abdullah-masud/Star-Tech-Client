import React from 'react';
import pc from '../../images/pc.png'
import { Link } from 'react-router-dom';

const ExceptionalService = () => {
    return (
        <div className="hero min-h-screen bg-base-100 px-6 max-w-7xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src={pc} className="max-w-sm rounded-lg shadow-2xl w-full" data-aos="fade-right" data-aos-duration='1000' data-aos-delay='200' alt='' />
                <div className='lg:ml-28' data-aos="fade-left" data-aos-duration='1000' data-aos-delay='200'>
                    <h1 className="text-5xl font-bold">Exceptional Pc Builds, on Your Terms</h1>
                    <p className="py-6">When you build your own PC, you’ll know exactly where each part in your system goes and how it is installed. In the future, if you determine that your PC isn’t performing to your liking, or if you just decide you want an upgrade, replacing parts in your computer is a simple process.</p>
                    <Link to='/allparts' className="btn btn-primary uppercase text-white font-bold ">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalService;