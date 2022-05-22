import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.svg'

const NotFound = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src={notFound} alt="" />
                    <Link to='/home' className="btn btn-outline btn-primary mt-5">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;