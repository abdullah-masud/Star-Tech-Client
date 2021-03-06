import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `https://powerful-anchorage-68667.herokuapp.com/parts`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success("Parts Added")
                    reset();
                }
                else {
                    toast.error('Failed to Add Parts')
                }
            })
    };

    return (
        <div className='max-w-7xl  mx-auto lg:mt-16 flex justify-center items-center'>
            <div className="card  w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center block text-3xl">Add Products</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='lg:flex justify-evenly'>
                            <div className=' flex-1 lg:flex flex-col items-center'>
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

                                {/* Description input starts */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        placeholder="Review"
                                        className="input input-bordered w-full max-w-xs h-20"
                                        {...register("description", {
                                            required: {
                                                value: true,
                                                message: 'Description is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                    </label>
                                </div>
                                {/* Description input ends */}

                                {/* Picture input starts */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Photo URL"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("img", {
                                            required: {
                                                value: true,
                                                message: 'Photo URL is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                                    </label>
                                </div>
                                {/* Picture input ends */}
                            </div>

                            <div className=' flex-1 lg:flex flex-col items-center'>
                                {/* Min Order input starts */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Min Order</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Min Order"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("minOrder", {
                                            required: {
                                                value: true,
                                                message: 'Min Order is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                                    </label>
                                </div>
                                {/* Min Order input ends */}

                                {/* Available input starts */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Available</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Available"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("available", {
                                            required: {
                                                value: true,
                                                message: 'Available is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                                    </label>
                                </div>
                                {/* Available input ends */}

                                {/* Price input starts */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("price", {
                                            required: {
                                                value: true,
                                                message: 'Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                    </label>
                                </div>
                                {/* Price input ends */}
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <input type="submit" className='btn btn-primary text-white  max-w-xs btn-sm' value='Add Product' />
                        </div>
                    </form>



                </div>
            </div >
        </div >
    );
};

export default AddProducts;