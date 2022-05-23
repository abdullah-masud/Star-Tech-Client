import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit, getValues } = useForm();

    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (googleLoading || emailLoading || sending) {
        return <Loading />
    }

    if (googleError || emailError) {
        errorElement = <p className='text-red-500'><small>{emailError?.message || googleError?.message}</small></p>
    }

    if (googleUser || emailUser) {
        // console.log(emailUser)
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        // console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };

    const resetPassword = async () => {
        const email = getValues('email')
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email Sent')
        }
        else {
            toast("Please Enter Email Address")
        }
    }

    return (
        <div className='max-w-7xl mx-auto h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center block">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input type="submit" className='btn btn-primary text-white w-full max-w-xs' value='Login' />
                    </form>
                    <p className='text-center'>
                        <button onClick={resetPassword} className='btn-link  text-xs font-semibold uppercase'>Forgot Password ?</button>
                    </p>
                    <p className='text-center  font-semibold'><small>New to Star Tech? <Link className='text-secondary' to='/signup'>Create New Account</Link></small></p>
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

export default Login;