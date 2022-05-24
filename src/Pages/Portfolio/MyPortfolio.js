import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

const MyPortfolio = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
        </div>
    );
};

export default MyPortfolio;