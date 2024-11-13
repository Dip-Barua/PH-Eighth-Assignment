import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import Rating from '@mui/material/Rating';
import { Helmet } from "react-helmet";
import { addToStoredCartList } from '../../contexts/AddToCart';
import { addToStoredWishlist, removeFromStoredWishlist } from '../../contexts/AddToWishlist';

const GadgetDetails = () => {
  const { product_id } = useParams();
  const [gadget, setGadget] = useState(null);
  const [isWishlistDisabled, setIsWishlistDisabled] = useState(false);

  useEffect(() => {
    console.log("Product ID from URL:", product_id);
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => {
        const foundGadget = data.find(
          (item) => item.product_id === product_id 
        );
        setGadget(foundGadget);
      })
      .catch((error) => {
        console.error("Error fetching gadget details:", error);
        toast.error("Failed to load gadget details.");
      });
  }, [product_id]);
  

  if (!gadget) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToStoredCartList(gadget.product_id, gadget.product_title);
  };

  const handleAddToWishList = () => {
    addToStoredWishlist(gadget.product_id, gadget.product_title);
    setIsWishlistDisabled(true);
  };

  const handleRemoveFromWishList = () => {
    removeFromStoredWishlist(gadget.product_id, gadget.product_title);
    setIsWishlistDisabled(false);
    toast.info("Removed from wishlist.");
  };

  return (
    <div>
      <Helmet>
        <title>{gadget.product_title} - GadgetHaven</title>
        <meta name="description" content={`View details of the ${gadget.product_title} at GadgetHaven.`} />
      </Helmet>

      <div className="hero items-start h-[30rem] bg-[#a342f3] w-[96%] mx-auto my-14 rounded-3xl">
        <div className="hero-content text-center pt-10">
          <div>
            <h1 className="mb-5 mt-8 text-5xl font-bold text-white leading-tight">
              Product Details
            </h1>
            <p className="my-10 text-white">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
              the coolest accessories, we have it all!
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-border my-20 p-5 border-2 w-8/12 text-center mx-auto rounded-3xl backdrop-blur-md -mt-60">
          <div className="card lg:card-side p-4 bg-base-100 shadow-xl justify-between">
            <div className="w-5/12">
              <img className="w-110/12 mx-auto rounded-3xl" src={gadget.product_image} alt="Product" />
            </div>
            <div className="card-body text-start gap-2">
              <h2 className="text-3xl font-bold text-start">{gadget.product_title}</h2>
              <p className="text-xl font-bold text-gray-500">Price: ${gadget.price}k</p>
              <div className="badge px-4 py-3 bg-green-50 badge-accent badge-outline">
                In Stock
              </div>
              <p className="text-gray-800 text-lg">{gadget.description}</p>
              <p className="text-gray-600 text-lg">
                <strong className="text-2xl text-black">Specification:</strong>
                <ol className="list-decimal pl-6">
                  {gadget.specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ol>
              </p>
              <h2 className="text-2xl font-bold text-start">Rating</h2>
              <div className="flex items-center">
                <Rating name="read-only" precision={0.1} value={gadget.rating} readOnly />
                <div className="badge badge-ghost py-3 px-4 text-lg">{gadget.rating}</div>
              </div>
              <div className="card-actions justify-start">
                <div className="flex gap-5">
                  <button
                    onClick={handleAddToCart}
                    className="text-white btn btn-primary text-2xl rounded-full flex"
                  >
                    Add To Cart <IoCartOutline />
                  </button>
                  <button
                    onClick={handleAddToWishList}
                    className={`text-black btn p-3 border-2 text-xl bg-transparent border-gray-300 rounded-full flex ${isWishlistDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                    disabled={isWishlistDisabled}
                  >
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default GadgetDetails;
