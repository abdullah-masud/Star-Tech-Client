import React from 'react';
import contact from '../../images/contact.jpg'

const ContactUs = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div class="hero  ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-1/2' src={contact} alt='' data-aos="fade-left" data-aos-duration='800' data-aos-delay='200' />
                    <div className=' w-full flex flex-col' data-aos="fade-right" data-aos-duration='800' data-aos-delay='200'>
                        <h1 class="text-5xl font-bold text-primary">Contact Us</h1>
                        <input type="text" placeholder="Name" class="input input-bordered w-full  my-5" />
                        <input type="text" placeholder="Email" class="input input-bordered w-full " />
                        <textarea class="textarea textarea-bordered mt-5" placeholder="Message"></textarea>
                        <button className="btn btn-primary text-white btn-outline w-1/4 mt-5">Send</button>
                    </div>
                </div>
            </div>













        </div>
    );
};

export default ContactUs;