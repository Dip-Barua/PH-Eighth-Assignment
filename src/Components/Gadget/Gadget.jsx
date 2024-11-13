import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    return (
            <div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={gadget.product_image}
                            alt="Shoes"
                            className="rounded-xl h-48 w-full object-cover"
                        />
                    </figure>
                    <div className="card-body text-start gap-5">
                        <h2 className="card-title text-left">{gadget.product_title}</h2>
                        <p className='text-gray-400 text-lg font-bold'>Price: {gadget.price}k</p>
                        <div className="card-actions">
                            
                                 <Link to={`/gadgets/${gadget.product_id}`} >
   <button className="btn bg-transparent rounded-full border-purple-600">View Details</button></Link>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Gadget;
