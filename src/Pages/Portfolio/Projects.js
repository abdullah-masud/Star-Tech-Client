import React from 'react';
import startTech from '../../images/Star-Tech.png'
import carStock from '../../images/car-stock.png'
import tourInc from '../../images/tour.inc.png'

const Projects = () => {
    return (
        <div className='hero mb-16' data-aos="fade-down-left" data-aos-duration='800' data-aos-delay='200'>
            <div className='lg:w-11/12 mt-16  '>
                <h2 className='lg:text-3xl text-center font-semibold uppercase lg:mt-16 lg:mb-0 mb-8'>Projects</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-6 lg:mt-12 '>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure><img className='h-56 w-full' src={startTech} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Star Tech
                            </h2>
                            <p>Start Tech provides all of the most recent and improved  components for your computer</p>
                            <div class="card-actions justify-end">
                                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/abdullah-al-masud-6557041a1" class="badge badge-outline">Live Website</a>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure><img className='h-56 w-full' src={carStock} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Car Stock
                            </h2>
                            <p>Car Stock is a warehouse management website where you may find the most recent cars.</p>
                            <div class="card-actions justify-end">
                                <a target="_blank" rel='noreferrer' href="https://warehouse-management-7e053.web.app/" class="badge badge-outline">Live Website</a>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure><img src={tourInc} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Tour.inc
                            </h2>
                            <p>Tour.inc offers all of the services of a professional tourist guide. User must login or register to reserve services.</p>
                            <div class="card-actions justify-end">
                                <a target="_blank" rel='noreferrer' href="https://tour-inc.web.app/" class="badge badge-outline">Live Website</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;