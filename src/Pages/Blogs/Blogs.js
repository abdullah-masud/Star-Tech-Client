import React from 'react';

const Blogs = () => {
    return (
        <div className=' max-w-7xl mx-auto h-screen flex flex-col justify-center items-center px-6'>
            <h2 className="text-2xl text-center block mb-10">FAQ's</h2>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box lg:w-3/4">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3 lg:w-3/4">
                <div class="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box lg:w-3/4">
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3 lg:w-3/4">
                <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box lg:w-3/4">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;