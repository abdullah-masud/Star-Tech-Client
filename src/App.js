import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';

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
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
