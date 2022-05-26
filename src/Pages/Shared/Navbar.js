import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { FiLogOut, FiLogIn } from "react-icons/fi";

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        {
            user && <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </>
        }
    </>


    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        {
                            user ? <>
                                <button onClick={logout} className='btn btn-outline btn-primary btn-sm'><FiLogOut /></button>
                            </>
                                : <Link to='/login' className="btn btn-outline btn-primary btn-sm"><span className='mr-1'>Login</span>< FiLogIn /></Link>
                        }
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl text-primary">Star Tech</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:block">
                <div className='flex justify-end items-center'>
                    {
                        user ? <>
                            <p className='text-[12px] text-primary font-semibold mr-2'>{user?.displayName}</p>
                            <button onClick={logout} className='btn btn-outline btn-primary btn-sm'><FiLogOut /></button>
                        </>
                            : <Link to='/login' className="btn btn-outline btn-primary btn-sm"><span className='mr-1'>Login</span>< FiLogIn /></Link>
                    }
                </div>
            </div>
            <div className='navbar-end lg:hidden'>
                <p className='text-[12px] text-primary font-semibold '>{user?.displayName}</p>
                <label for="dashboardSidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div >
    );
};

export default Navbar;