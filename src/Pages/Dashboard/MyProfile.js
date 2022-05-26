import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user] = useAuthState(auth);

    const { data: profile, refetch } = useQuery('profile', () => fetch(`https://powerful-anchorage-68667.herokuapp.com/users/${user.email}`).then(res => res.json()))


    const onSubmit = data => {
        const email = user?.email;
        const userName = user?.displayName
        const education = data.education
        const address = data.address;
        const linkedIn = data.linkedIn;
        const phone = data.phone

        const updatedProfile = {
            email,
            userName,
            education,
            address,
            linkedIn,
            phone
        }

        fetch(`https://powerful-anchorage-68667.herokuapp.com/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProfile)
        })
            .then(res => res.json())
            .then(result => {
                reset()
                toast.success('Profile Updated')
                // console.log(result);
                refetch()
            })
    }



    return (
        <div className='max-w-7xl mx-auto lg:mt-16 lg:flex  justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center block text-3xl mb-6">My Profile</h2>

                    <div>
                        <label className='text-xl'>Name</label>
                        <h2 className='text-xl font-semibold mt-2'>{user?.displayName}</h2>
                    </div>
                    <div className='my-6'>
                        <label className='text-xl'>Email</label>
                        <h2 className='text-xl font-semibold mt-2'>{user?.email}</h2>
                    </div>
                    <div className=''>
                        <label className='text-xl'>Phone</label>
                        <h2 className='text-xl font-semibold mt-2'>{profile?.phone}</h2>
                    </div>
                    <div className='my-6'>
                        <label className='text-xl'>Education</label>
                        <h2 className='text-xl font-semibold mt-2'>{profile?.education}</h2>
                    </div>
                    <div >
                        <label className='text-xl'>Location</label>
                        <h2 className='text-xl font-semibold mt-2'>{profile?.address}</h2>
                    </div>
                    <div className='my-6'>
                        <label className='text-xl'>LinkedIn</label>
                        <h2 className='text-xl font-semibold mt-2'>{profile?.linkedIn}</h2>
                    </div>

                </div>
            </div >

            <div className="lg:ml-3 card w-96 bg-base-100 shadow-xl mt-3 lg:mt-0">
                <div className="card-body">

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

                        {/* Phone input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Phone"
                                class="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.phone?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>
                        {/* Phone input ends */}

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
                                placeholder="Address"
                                class="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.address?.type === 'required' && <span class="label-text-alt text-red-500">{errors.address.message}</span>}
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