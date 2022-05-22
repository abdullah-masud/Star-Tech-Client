import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";;

const Login = () => {
    const [signInWithGoogle, googleUser, loading, googleError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (googleUser) {
        console.log(googleUser)
    }

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='max-w-7xl mx-auto h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center block">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'error message'
                                    }
                                })}
                            />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>



                        <input />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-primary text-white">
                        <span className='mr-2'><FcGoogle /></span>
                        Continue With Google
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Login;