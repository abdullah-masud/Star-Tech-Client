import React from 'react';
import contact from '../../images/contact.jpg'

const ContactUs = () => {
    return (
        <div className='max-w-7xl mx-auto  lg:my-16'>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:w-1/2' src={contact} alt='' />
                    <div className=' w-full flex flex-col' >
                        <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
                        <input type="text" placeholder="Name" className="input input-bordered w-full  my-5" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full " />
                        <textarea className="textarea textarea-bordered mt-5" placeholder="Message"></textarea>
                        <button className="btn btn-primary text-white btn-outline w-1/4 mt-5">Send</button>
                    </div>
                </div>
            </div>













        </div>
    );
};

export default ContactUs;