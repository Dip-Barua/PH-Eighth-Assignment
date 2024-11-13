import React from 'react';

const Footer = () => {
    return (


<div className='bg-white pt-20 pb-10' >
<div >
                <h1 className='text-5xl font-bold text-center'>Gadget Heaven</h1>
                <p className='font text-2xl mt-5 font-bold text-gray-500 text-center'>Leading the way in cutting-edge technology and innovation</p>
              </div>
<hr className='w-10/12 mx-auto my-8' />
            <div className=" flex w-7/12 mx-auto text-base-content justify-between p-10">
  <nav className=' flex flex-col text-center mb-10'>
    <h6 className="text-2xl mx-auto font-bold text-black my-4">
      SERVICES</h6>
    <a className="link link-hover text-xl">Product Support</a>
    <a className="link link-hover text-xl">Order Tracking</a>
    <a className="link link-hover text-xl">Shipping & DElivery</a>
    <a className="link link-hover text-xl">Returns</a>
  </nav>
  <nav className=' flex flex-col text-center'>
  <h6 className="text-2xl mx-auto font-bold text-black my-4">
  COMPANY</h6>
    <a className="link link-hover text-xl">About us</a>
    <a className="link link-hover text-xl">Careers</a>
    <a className="link link-hover text-xl">Contact</a>
  </nav>
  <nav className=' flex flex-col text-center'>
  <h6 className="text-2xl mx-auto font-bold text-black my-4">
  LEGAL</h6>
    <a className="link link-hover text-xl">Terms of use</a>
    <a className="link link-hover text-xl">Privacy policy</a>
    <a className="link link-hover text-xl">Cookie policy</a>
  </nav>
</div>
<p className="text-center text-lg text-slate-700 ">
          A Private Commitment by Dip
        </p></div>
    );
};

export default Footer;