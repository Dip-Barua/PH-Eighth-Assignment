import Bannerimg from "../../assets/banner.jpg";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      <div className="hero items-start h-[50rem] bg-[#a342f3] w-[96%] mx-auto my-14 rounded-3xl">
        <div className="hero-content text-center pt-10">
          <div className="">
            <h1 className="mb-5 mt-28 text-5xl font-bold  text-white leading-tight">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="my-16 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br />s the coolest accessories,
              we have it all!
            </p>
            <button className="btn bg-white rounded-full bold text-[#8622d8] text-2xl mt-10">
              {" "}
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "underline tex-[#a342f3]" : ""
                }
              >
                Shop Now
              </NavLink>
            </button>

            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-border my-20 p-4 border-2 w-6/12  text-center bg-[#ffffff9c] mx-auto rounded-3xl backdrop-blur-lg -mt-60">
          <img
            className=" mx-auto rounded-2xl  w-full h-[30rem]  object-cover"
            src={Bannerimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
