import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.svg'

const NotFound = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <img src={notFound} alt="" />
                    <Link to='/home' class="btn btn-outline btn-primary mt-5">Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;