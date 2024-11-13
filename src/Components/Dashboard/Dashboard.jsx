import React, { useEffect, useState } from "react";
import { getStoredCartList, addToStoredCartList } from "../../contexts/AddToCart";
import { RxMixerVertical } from "react-icons/rx";
import icon from "../../../src/assets/Group.png";
import { getStoredWishlist, removeFromStoredWishlist } from "../../contexts/AddToWishlist";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Cart");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [gadgetsData, setGadgetsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedToCart, setAddedToCart] = useState({});
  const navigate = useNavigate();

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  const getProductDetails = (id) => {
    return gadgetsData.find((gadget) => gadget.product_id === id);
  };

  useEffect(() => {
    const storedCartList = getStoredCartList();
    setCartItems(storedCartList);

    const storedWishlist = getStoredWishlist();
    setWishlistItems(storedWishlist);

    fetch("./gadgets.json")
      .then((response) => response.json())
      .then((data) => {
        setGadgetsData(data);
      });
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartList", JSON.stringify(updatedCart));

    const gadget = getProductDetails(id);
    toast.error(`${gadget.product_title} removed from your cart.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleRemoveFromWishlist = (id) => {
    removeFromStoredWishlist(id);
    const updatedWishlist = wishlistItems.filter((item) => item !== id);
    setWishlistItems(updatedWishlist);

    const gadget = getProductDetails(id);
    toast.error(`${gadget.product_title} removed from your wishlist.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const getProductTitle = (id) => {
    const gadget = gadgetsData.find((gadget) => gadget.product_id === id);
    return gadget ? gadget.product_title : "Product Not Found";
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((itemId) => {
        const gadget = getProductDetails(itemId);
        if (gadget) {
          total += gadget.price;
        }
      });
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cartItems, gadgetsData]);

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      setIsModalOpen(true);
      toast.success("Purchase Successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.removeItem("cartList");
    setCartItems([]);
    setTotalPrice(0);
    navigate("/");
  };

  const handleSortByPrice = () => {
    const sortedItems = [...cartItems].sort((a, b) => {
      const itemA = getProductDetails(a);
      const itemB = getProductDetails(b);
      return itemB.price - itemA.price;
    });
    setCartItems(sortedItems);
    toast.info("Cart sorted by price.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const addToCartFromWishlist = (gadget) => {
    if (!addedToCart[gadget.product_id]) {
      addToStoredCartList(gadget.product_id);
      setCartItems((prev) => [...prev, gadget.product_id]);
      setAddedToCart((prev) => ({ ...prev, [gadget.product_id]: true }));
      handleRemoveFromWishlist(gadget.product_id);
      toast.success(`${gadget.product_title} added to your cart.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard - GadgetHaven</title>
        <meta name="description" content="Manage your cart and wishlist items on GadgetHaven." />
        <link rel="icon" href={icon} type="image/x-icon" />
      </Helmet>

      <ToastContainer />

      <div className="hero items-start h-[25rem] bg-[#a342f3] w-[96%] mx-auto my-14 rounded-3xl">
        <div className="hero-content text-center pt-10">
          <div>
            <h1 className="mb-5 mt-8 text-5xl font-bold text-white leading-tight">Dashboard</h1>
            <p className="my-10 text-white">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
            </p>
            <div className="flex justify-center gap-6 z-10">
              <button
                onClick={() => handleToggle("Cart")}
                className={`px-12 py-3 text-xl font-bold rounded-full focus:outline-none ${activeSection === "Cart" ? "bg-white text-purple-600 font-bold" : "bg-transparent text-white border-2"}`}
              >
                Cart
              </button>
              <button
                onClick={() => handleToggle("Wishlist")}
                className={`px-10 py-3 rounded-full font-semibold focus:outline-none ${activeSection === "Wishlist" ? "bg-white text-purple-600 font-bold" : "bg-transparent text-white border-2"}`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        {activeSection === "Cart" ? (
          <div className="w-9/12 mx-auto">
            <div className="flex items-center justify-between my-10 py-10">
              <div>
                <h2 className="text-4xl font-bold text-start">Your Cart</h2>
              </div>
              <div className="flex items-center justify-around gap-10">
                <p className="text-2xl font-bold text-start">Total cost: ${totalPrice.toFixed(2)}</p>
                <button
                  onClick={handleSortByPrice}
                  className="bg-transparent text-purple-700 border-2 font-bold border-purple-500 px-6 py-3 flex items-center gap-2 text-xl rounded-full hover:bg-purple-400 hover:text-white"
                >
                  Sort by Price <RxMixerVertical />
                </button>
                <button
                  onClick={handlePurchase}
                  className="bg-purple-600 text-white font-bold px-10 py-3 flex items-center gap-2 text-xl rounded-full hover:bg-transparent disabled:hover:border-none disabled:hover:text-wh hover:text-purple-700 hover:border-2 hover:border-purple-700 disabled:hover:bg-purple-600 disabled:opacity-50"
                  disabled={cartItems.length === 0}
                >
                  Purchase
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 w-9/12 mx-auto rounded-full gap-10 my-6">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => {
                  const gadget = getProductDetails(item);
                  return (
                    <div key={index} className="bg-white shadow-md rounded-2xl p-4 text-left">
                      {gadget ? (
                        <>
                          <div className="flex py-5">
                            <div className="w-3/12">
                              <img
                                src={gadget.product_image}
                                alt={gadget.product_title}
                                className="w-full h-48 object-cover rounded-t-lg mb-4"
                              />
                            </div>
                            <div className="flex justify-between items-start w-full rounded-lg">
                              <div className="w-3/4 pr-4">
                                <h3 className="text-2xl mb-2 font-bold">{gadget.product_title}</h3>
                                <p className="text-gray-800 text-lg mb-2">
                                  <span className="font-bold text-xl">Category: </span>
                                  {gadget.category}
                                </p>
                                <p className="text-gray-800 text-2xl mb-2">{gadget.description}</p>
                                <p className="text-gray-800 text-2xl mb-2">
                                  <span className="font-bold text-2xl">Price: $ </span>
                                  {gadget.price}
                                </p>
                              </div>
                              <div className="w-1/4 flex justify-center items-center h-full">
                                <button
                                  onClick={() => handleRemoveFromCart(item)}
                                  className="text-lg bg-red-500 px-6 py-2 text-white font-bold rounded-xl ml-2 hover:bg-transparent hover:text-red-700 hover:border-2 hover:border-red-700"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-10 font-bold">
                  <p>Your cart is empty.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="w-9/12 mx-auto">
            <div className="py-10 text-start">
              <h2 className="text-4xl font-bold">Wishlist</h2>
            </div>
            <div className="grid grid-cols-1 w-9/12 mx-auto rounded-full gap-10 my-6">
              {wishlistItems.length > 0 ? (
                wishlistItems.map((item, index) => {
                  const gadget = getProductDetails(item);
                  return (
                    <div key={index} className="bg-white shadow-md rounded-2xl p-4 text-left">
                      {gadget ? (
                        <>
                          <div className="flex py-5">
                            <div className="w-3/12">
                              <img
                                src={gadget.product_image}
                                alt={gadget.product_title}
                                className="w-full h-48 object-cover rounded-t-lg mb-4"
                              />
                            </div>
                            <div className="w-3/4 flex justify-between items-start">
                              <div className="w-3/4 pr-4">
                                <h3 className="text-2xl mb-2 font-bold">{gadget.product_title}</h3>
                                <p className="text-gray-800 text-2xl mb-2">{gadget.description}</p>
                                <p className="text-gray-800 text-2xl mb-2">
                                  <span className="font-bold text-2xl">Price: $ </span>
                                  {gadget.price}
                                </p>
                                <button
                                  onClick={() => addToCartFromWishlist(gadget)}
                                  className="text-lg bg-purple-500 px-6 py-2 text-white font-bold mt-5 rounded-xl hover:bg-transparent hover:text-purple-700 hover:border-2 hover:border-purple-700"
                                  disabled={addedToCart[gadget.product_id]}
                                >
                                  {addedToCart[gadget.product_id] ? "Added to Cart" : "Add to Cart"}
                                </button>
                              </div>

                              <div className="w-1/4 flex flex-col gap-5 my-auto justify-center items-center">
                                <button
                                  onClick={() => handleRemoveFromWishlist(item)}
                                  className="text-lg bg-red-500 px-10 py-2 text-white font-bold rounded-xl hover:bg-transparent hover:text-purple-700 hover:border-2 hover:border-purple-700"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-10 font-bold">
                  <p>Your wishlist is empty.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[30rem]">
            <img src={icon} className="mx-auto my-2" alt="" />
            <h2 className="mb-4 text-2xl font-bold text-center">Payment Successfully</h2>
            <hr />
            <p className="mt-4 text-lg text-center">Thanks for purchasing</p>
            <p className="mt-2 text-lg text-center">Total : ${totalPrice.toFixed(2)}</p>
            <div className="mt-6 flex text-center">
              <button
                onClick={handleCloseModal}
                className="bg-transparent mx-auto text-purple-700 border-2 font-bold border-purple-500 text-center px-6 py-2 flex items-center gap-2 text-lg rounded-full hover:bg-purple-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
