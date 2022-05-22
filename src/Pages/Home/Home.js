import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div >
            <Banner />
            <Parts />
            <BusinessSummary />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;