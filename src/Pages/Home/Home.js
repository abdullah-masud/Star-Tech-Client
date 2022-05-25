import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import ExceptionalService from './ExceptionalService';

const Home = () => {
    return (
        <div >
            <Banner />
            <Parts />
            <BusinessSummary />
            <ExceptionalService />
            <Reviews />
            <ContactUs />
        </div>
    );
};

export default Home;