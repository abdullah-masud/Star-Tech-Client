import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <h2 className='text-2xl text-center font-bold my-12'>Frequent Asked Questions</h2>
            <div className='flex flex-col  items-center'>
                <div class="card w-4/5 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                        <p>When it's required, keep component state local. To avoid unwanted re-renders, memorize React components. Code-splitting in React using dynamic import(). And also To optimize React rendering, you need to make sure that components receive only necessary props</p>
                    </div>
                </div>
                <div class="card w-4/5 bg-base-100 shadow-xl my-3">
                    <div class="card-body">
                        <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>There are four ways to manage a state in a React application. These are:
                            <li>Local (UI) state - Local state is data we manage in one or another component.</li>
                            <li>Global (UI) state – Global state is data we manage across multiple components.</li>
                            <li>Server state – Data that comes from an external server that must be integrated with our UI state.</li>
                            <li>URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
                        </p>

                    </div>
                </div>
                <div class="card w-4/5 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>Unit tests are automated tests written and run by software engineers to confirm that a piece of an application (referred to as a "unit") matches its design and operates as expected.</p>
                    </div>
                </div>
                <div class="card w-4/5 bg-base-100 shadow-xl my-3">
                    <div class="card-body">
                        <h2 class="card-title">How does prototypical inheritance work?</h2>
                        <p>The ability to access object properties from another object is known as prototype inheritance. To add new attributes and methods to an existing object constructor, we utilize a JavaScript prototype. We may instruct our JS code to inherit attributes from a prototype in this way. Through a reference pointer function, prototypical inheritance allows us to reuse attributes or methods from one JavaScript object to another.</p>
                    </div>
                </div>
                <div class="card w-4/5 bg-base-100 shadow-xl lg:mb-16">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;