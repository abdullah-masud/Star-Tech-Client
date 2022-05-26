import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:mt-5">
                    <h2 className='text-2xl text-primary font-semibold'>Dashboard</h2>
                    <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardSidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <>
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                            </>
                        }
                        {admin && <>
                            <li><Link to='/dashboard/users'>Make Admin</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add Products</Link></li>
                            <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;