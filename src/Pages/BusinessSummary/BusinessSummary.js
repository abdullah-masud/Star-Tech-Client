import React from 'react';
import sold from '../../images/svg/sold.svg'
import users from '../../images/svg/users.svg'
import feedback from '../../images/svg/feedback.svg'

const BusinessSummary = () => {
    return (
        <div className='lg:my-28 my-20 flex justify-center flex-col max-w-7xl mx-auto' data-aos="fade-left" data-aos-duration='800' data-aos-delay='200'>
            {/* <h2 className='text-center lg:text-5xl text-2xl lg:mb-20 mt-14 uppercase'>Customers Summary</h2> */}
            <div class="stats w-full  text-center stats-vertical lg:stats-horizontal shadow">
                <div class="stat">
                    <div class="lg:w-32 w-24 mx-auto">
                        <img src={sold} alt="" />
                    </div>
                    <div class="stat-value">100k+</div>
                    <div class="">Products Sold</div>
                </div>

                <div class="stat">
                    <div class="lg:w-32 w-24 mx-auto">
                        <img src={users} alt="" />
                    </div>
                    <div class="stat-value">100+</div>
                    <div class="">Customers Daily</div>
                </div>

                <div class="stat">
                    <div class="lg:w-32 w-24 mx-auto">
                        <img src={feedback} alt="" />
                    </div>
                    <div class="stat-value">500+</div>
                    <div class="">Feedbacks</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;