import React from "react";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <section className=" container h-[750px] mx-auto shadow-2xl">
      <div className=" mx-auto flex flex-col items-center gap-x-2">
      

        <input
          type="search"
          placeholder="Search news..."
          className="rounded-full mx-auto  w-1/2  font-semibold px-6 py-4 lg:shadow-xl shadow-2xl"
          />
        {/* <div>
          <BsSearch className="text-3xl" />
        </div> */}
          
      <div className="my-3 ">
        <button className="btn btn-lg btn-primary w-[100px]  rounded bg-gray-400  p-3 text-white hover:bg-slate-300 hover:text-black  transition shadow-2xl ">
          Search
        </button>
      </div>
      </div>
    </section>
  );
};

export default Home;
