import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, getValues, reset } = useForm();

    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className='max-w-7xl mx-auto lg:mt-16 flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center block text-3xl">My Profile</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value={user?.displayName}
                                disabled
                                placeholder="Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name")}
                            />
                        </div>
                        {/* Name input ends */}

                        {/* Email input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                value={user?.email}
                                disabled
                                placeholder="Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name")}
                            />
                        </div>
                        {/* Email input ends */}

                        {/* Education input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Education</span>
                            </label>
                            <input
                                type="text"
                                placeholder="School Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Education is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.education?.type === 'required' && <span class="label-text-alt text-red-500">{errors.education.message}</span>}
                            </label>
                        </div>
                        {/* Education input ends */}

                        {/* Location input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Location</span>
                            </label>
                            <input
                                type="text"
                                placeholder="City/Country"
                                class="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Location is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.location?.type === 'required' && <span class="label-text-alt text-red-500">{errors.location.message}</span>}
                            </label>
                        </div>
                        {/* Location input ends */}

                        {/* LinkedIn input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">LinkedIn</span>
                            </label>
                            <input
                                type="text"
                                placeholder="LinkedIn"
                                class="input input-bordered w-full max-w-xs"
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: 'LinkedIn is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.linkedIn?.type === 'required' && <span class="label-text-alt text-red-500">{errors.linkedIn.message}</span>}
                            </label>
                        </div>
                        {/* Location input ends */}



                        <div className='flex justify-center mt-2'>
                            <input type="submit" className='btn btn-primary text-white  max-w-xs btn-sm' value='Update Profile' />
                        </div>
                    </form>



                </div>
            </div >
        </div >
    );
};

export default MyProfile;