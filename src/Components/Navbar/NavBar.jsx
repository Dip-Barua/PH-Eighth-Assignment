import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setWishlistLength] = useState(0);
  const location = useLocation();
  const isAbsolute = location.pathname === '/statistics' 
                    || location.pathname === '/dashboard' 
                    || location.pathname === '/contactus' 
                    || location.pathname.includes('/gadgets/');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartList')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCartLength(storedCart.length);
    setWishlistLength(storedWishlist.length);
  }, []); 

  return (
    <div className="relative w-full">
      <div className={`navbar w-10/12 mx-auto my-8 flex items-center ${isAbsolute ? 'relative top-12 text-black' : 'absolute top-0 left-0 right-0'} justify-between z-10`}>
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : '')}>Home</NavLink></li>
              <li><NavLink to="/statistics" className={({ isActive }) => (isActive ? 'underline' : '')}>Statistics</NavLink></li>
              <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'underline' : '')}>Dashboard</NavLink></li>
              <li><NavLink to="/contactus" className={({ isActive }) => (isActive ? 'underline' : '')}>Contact Us</NavLink></li>
            </ul>
          </div>
          <NavLink to="/" className={`btn btn-ghost text-4xl font-bold ${isAbsolute ? 'text-black' : 'text-white'}`}>Gadget Heaven</NavLink>
        </div>

        <div className={`flex-grow hidden lg:flex justify-center ${isAbsolute ? 'text-black' : 'text-white'}`}>
          <ul className="menu text-xl menu-horizontal px-1 space-x-4">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'underline focus:text-white' : '')  }>Home</NavLink></li>
            <li><NavLink to="/statistics" className={({ isActive }) => (isActive ? 'underline focus:text-purple-600 text-purple-600' : '')}>Statistics</NavLink></li>
            <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'underline focus:text-purple-600 text-purple-600' : '')}>Dashboard</NavLink></li>
            <li><NavLink to="/contactus" className={({ isActive }) => (isActive ? 'underline focus:text-purple-600 text-purple-600' : '')}>Contact Us</NavLink></li>
          </ul>
        </div>

        <div className="flex gap-5">
        
<div className='flex'>
          <div className={`bg-white p-3 text-2xl  rounded-full ${isAbsolute ? 'border-2' : 'text-black bg-white'}`}>
            
            <NavLink to="/dashboard" >
            <IoCartOutline /> 
          </NavLink></div>
           <div className="badge -ml-2 p-2  rounded-full">{cartLength}</div>
          </div>
<div className='flex'>
          <div className={`bg-white p-3 text-2xl  rounded-full ${isAbsolute ? 'border-2' : 'text-black bg-white'}`}>
            
            <NavLink to="/dashboard" >
            <FaRegHeart />             

          </NavLink></div>
           <div className="badge -ml-2 p-2  rounded-full">{wishlistLength}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
