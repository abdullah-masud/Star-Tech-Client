import React from 'react';
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

const AboutMe = () => {
    return (
        <div className='hero'>
            <div className='lg:w-11/12 lg:mt-16 '>
                <div className='flex flex-col lg:flex-row lg:justify-around '>
                    <div className='  ' data-aos="fade-right" data-aos-duration='800' data-aos-delay='200'>
                        <div className=''>
                            <h2 className='text-3xl text-primary font-semibold'>Education</h2>
                        </div>
                        <div>
                            <h2 className='my-3 text-2xl'>East Delta University</h2>
                            <h2 className='my-3 text-xl'>Computer Science and Engineering</h2>
                        </div>
                    </div>

                    <div className='lg:mt-0 mt-12 ' data-aos="fade-left" data-aos-duration='800' data-aos-delay='200'>
                        <h2 className='text-3xl font-semibold'>Get in touch!</h2>
                        <h2 className='flex items-center text-lg'><MdEmail /><span className='ml-2'>masudctg00@gmail.com</span></h2>

                        <a class="link link-hover flex items-center text-lg" target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/abdullah-al-masud-6557041a1" ><BsLinkedin /><span className='ml-2'>LinkedIn</span></a>

                        <a class="link link-hover flex items-center text-lg" target="_blank" rel='noreferrer' href="https://github.com/abdullah-masud" ><ImGithub /><span className='ml-2'>Github</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;