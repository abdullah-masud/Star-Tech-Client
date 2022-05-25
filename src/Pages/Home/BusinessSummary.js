import React from 'react';
import sold from '../../images/svg/sold.svg'
import users from '../../images/svg/users.svg'
import feedback from '../../images/svg/feedback.svg'

const BusinessSummary = () => {
    return (
        <div className='lg:my-0 mb-12 lg:mb-0 flex justify-center flex-col max-w-7xl mx-auto' >
            <h2 className='text-center lg:text-5xl text-2xl lg:mb-20 mt-14 uppercase'>Business Summary</h2>
            <div className="stats w-full  text-center stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="lg:w-32 w-24 mx-auto">
                        <img src={sold} alt="" />
                    </div>
                    <div className="stat-value">100k+</div>
                    <div className="">Products Sold</div>
                </div>

                <div className="stat">
                    <div className="lg:w-32 w-24 mx-auto">
                        <img src={users} alt="" />
                    </div>
                    <div className="stat-value">100+</div>
                    <div className="">Customers Daily</div>
                </div>

                <div className="stat">
                    <div className="lg:w-32 w-24 mx-auto">
                        <img src={feedback} alt="" />
                    </div>
                    <div className="stat-value">500+</div>
                    <div className="">Feedbacks</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;