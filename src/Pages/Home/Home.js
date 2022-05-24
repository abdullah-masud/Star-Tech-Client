import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div >
            <Banner />
            <Parts />
            <BusinessSummary />
            <Reviews />
        </div>
    );
};

export default Home;