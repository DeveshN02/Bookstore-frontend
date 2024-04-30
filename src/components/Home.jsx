import React from "react";
import image from "../assets/homepage.jpg";
import HighlightText from "./HighlightText";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  return (
    <div className="  text-4xl min-h-screen overflow-hidden flex flex-col items-center  text-white w-full">
      <h1 className="font-bold text-white text-center px-3 text-2xl mt-20 md:mt-52 sm:text-[30px] lg:text-[60px]">
        Your Gateway to
        <HighlightText text={"Great Reads"} />
      </h1>

      <Link to="/books">
        <button className="mx-auto text-lg flex items-center justify-center gap-2  py-3  px-5 font-semibold my-20 rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 text-white bg-blue-500">
          <p>Explore Books</p>
          <IoIosArrowForward />
        </button>
      </Link>

      <p className=" text-stone-400 text-center text-sm mb-10 px-5 lg:w-[70%]   sm:text-lg lg:text-xl">
        Discover the joy of reading at our <HighlightText text={"Book store"} />
        , where every book tells a story and every story has the power to change
        lives. Start your journey today and let the magic of books transport you
        to new worlds.
      </p>

      <div className="rounded-xl overflow-hidden m-5 ">
        <img
          className=" shadow-md shadow-black mx-auto w-[900px] mb-[200px]  rounded-xl overflow-hidden"
          src={image}
          alt="home page img"
        />
      </div>

      <div className=" text-gray-300 py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-sm">
            &copy; 2024 @Bookstore. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
