import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Message sent successfully!", {
            type: "success",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        console.log(formData);
    };

    return (
        <div className="container mx-auto px-4 py-8 mt-20 ">
              <Helmet>
        <title>Contact Us - GadgetHaven</title>
        <meta name="description" content="Manage your cart and wishlist items on GadgetHaven." />
      </Helmet>
            <div className="py-8 bg-[#1313130D] rounded-xl mb-1">
                <h2 className="text-5xl text-center font-bold">Contact Us</h2>
            </div>
            <div className='text-center mb-16'>
                <h1 className="text-3xl font-bold mb-4"></h1>
                <p className=" text-2xl px-2  mb-0">
                    Feel free to reach out to us using the contact information below:
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-4 px-8 py-16 bg-[#1313130D] rounded-xl">
                <div>
                    <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-4">
                            
                            <span>Email: ***@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            
                            <span>Phone: ******0095</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            
                            <span>Address: North **ng*, Chittagong, Bangladesh</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4 mt-8 ">Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <button onClick={() => handleSubmit()}
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;