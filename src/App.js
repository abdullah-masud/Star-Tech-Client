import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProducts from './Pages/Dashboard/AddProducts';
import MyPortfolio from './Pages/Portfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer';
import AllParts from './Pages/Home/AllParts';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='allparts' element={<AllParts />} />
        <Route path='portfolio' element={<MyPortfolio />} />
        <Route path='purchase/:partId' element={<RequireAuth><Purchase /></RequireAuth>} />

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyOrders />}></Route>
          <Route path='addreview' element={<AddReview />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='users' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProducts /></RequireAdmin>}></Route>
        </Route>

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
