import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(googleUser || emailUser);

    let errorElement;
    const navigate = useNavigate();

    if (googleLoading || emailLoading || updating) {
        return <Loading />
    }

    if (googleError || emailError || updateError) {
        errorElement = <p className='text-red-500'><small>{emailError?.message || googleError?.message || updateError?.message}</small></p>
    }

    if (token) {
        navigate('/home')
    }

    const onSubmit = async data => {
        console.log(data.name)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    return (
        <div className='max-w-7xl mx-auto h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center block">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Name input ends */}

                        {/* Email input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* Email input ends */}

                        {/* Password input starts */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters of longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* Password input ends */}

                        {errorElement}
                        <input type="submit" className='btn btn-primary text-white w-full max-w-xs' value='Signup' />
                    </form>

                    <p className='text-center  font-semibold'><small>Already have an Account? <Link className='text-secondary' to='/login'>Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-primary">
                        <span className='mr-2'><FcGoogle /></span>
                        Continue With Google
                    </button>
                </div>
            </div >
        </div >
    );
};

export default SignUp;