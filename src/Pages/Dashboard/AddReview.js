import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();

    const onSubmit = data => {
        const url = `https://powerful-anchorage-68667.herokuapp.com/reviews/`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success("Review Added")
                reset();
                console.log(result);
            })
    };

    return (
        <div className='max-w-7xl mx-auto lg:mt-16 flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center block text-3xl">Add review</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name input starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Name input ends */}

                        {/* Review input starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Review"
                                className="input input-bordered w-full max-w-xs h-20"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Review is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        {/* Review input ends */}

                        {/* Picture input starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Photo URL is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        {/* Picture input ends */}

                        {/* Rating input starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Rating"
                                min="0"
                                max="5"
                                className="input input-bordered w-full max-w-xs"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rating is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                            </label>
                        </div>
                        {/* Rating input ends */}

                        <div className='flex justify-center'>
                            <input type="submit" className='btn btn-primary text-white  max-w-xs btn-sm' value='Add Review' />
                        </div>
                    </form>



                </div>
            </div >
        </div >
    );
};

export default AddReview;