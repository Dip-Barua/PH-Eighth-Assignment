import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        setFilteredGadgets(data); 
      });
  }, []);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "All Products") {
      setFilteredGadgets(gadgets); 
    } else {
      setFilteredGadgets(gadgets.filter((gadget) => gadget.category === category));
    }

    navigate(`?category=${category}`, { replace: true });  
  };

  return (
    <div className="w-10/12 mx-auto my-28">
      <div>
        <h1 className="text-5xl text-center font-bold ">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-around mt-28 ">
        <div className="flex sm:flex-col gap-10 p-14 w-2/12 max-h-fit rounded-3xl bg-white text-center">
          {["All Products", "Smartphones", "Laptops", "Accessories", "Tablets"].map((category) => (
            <div key={category}>
              <button
                onClick={() => filterByCategory(category)}
                className={`btn rounded-full bold w-full h-16 text-2xl ${
                  activeCategory === category
                    ? "bg-[#8622d8] text-white"
                    : "bg-slate-50 text-black"
                }`}
              >
                {category}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 w-10/12 justify-items-center">
          {filteredGadgets.map((gadget) => (
            <Gadget gadget={gadget} key={gadget.product_id} />
          ))}
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
    </div>
  );
};

export default Gadgets;
