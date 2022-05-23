import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div class="drawer drawer-mobile">
                <input id="dashboardSidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content lg:mt-5">
                    <h2 className='text-2xl text-primary font-semibold'>Dashboard</h2>
                    <Outlet />


                </div>
                <div class="drawer-side">
                    <label for="dashboardSidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;