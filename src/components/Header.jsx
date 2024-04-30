import React, { useState } from "react";
import { HiBuildingStorefront } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";

import { NavLink } from "react-router-dom";

function Header() {
  const [menu, setmenu] = useState(false);
  function handlemenu() {
    setmenu((value) => !value);
    console.log(menu);
  }
  return (
    <div className="w-full  overflow-hidden bg-opacity-100 h-[80px] flex flex-row flex-wrap px-2 sm:px-10 items-center justify-between -z-10 bg-emerald-200 text-black ">
      <NavLink
        to="/"
        className="flex items-center gap-1 text-sm sm:text-xl   font-semibold border-[1px] p-1 sm:p-2 rounded-md shadow-lg shadow-zinc-600 bg-white-950"
      >
        <HiBuildingStorefront />
        <p>Book Store</p>
      </NavLink>

      <div
        onClick={handlemenu}
        className={`block absolute top-7 right-5 z-20 sm:hidden ${
          menu ? "text-white" : "text-black"
        }  text-3xl`}
      >
        <TiThMenu />
      </div>

      {/* small page */}
      {menu && (
        <div
          className={` small w-1/2 absolute top-0 pt-20 text-stone-200 transition-all duration-1000  sm:hidden ${
            menu ? "right-0" : "-right-[500px]"
          }  h-screen bg-stone-800`}
        >
          <div className="flex  items-center flex-col justify-start gap-10 text-stone-200  font-semibold text-lg">
            <NavLink
              onClick={handlemenu}
              className="border-b-4 border-stone-800 hover:border-stone-200  transition-all duration-200  "
              to="/"
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              onClick={handlemenu}
              className="border-b-4 border-stone-800 hover:border-stone-200  transition-all duration-200  "
              to="/books"
            >
              <p>Books</p>
            </NavLink>

            <NavLink
              onClick={handlemenu}
              className="border-b-4 border-stone-800 hover:border-stone-200  transition-all duration-200  "
              to="/add"
            >
              <p>Add Product</p>
            </NavLink>

            <NavLink
              onClick={handlemenu}
              className="border-b-4 border-stone-800 hover:border-stone-200  transition-all duration-200  "
              to="/about"
            >
              <p>About</p>
            </NavLink>
          </div>
        </div>
      )}

      {/* large page  */}
      <div
        className={`hidden sm:w-[35%] sm:flex    sm:flex-row items-center justify-evenly gap-5 font-bold text-xl`}
      >
        <NavLink
          className="border-b-4 border-emerald-200 hover:border-stone-950  transition-all duration-200  "
          to="/"
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          className="border-b-4 border-emerald-200 hover:border-stone-950  transition-all duration-200  "
          to="/books"
        >
          <p>Books</p>
        </NavLink>

        <NavLink
          className="border-b-4 border-emerald-200 hover:border-stone-950 transition-all duration-200  "
          to="/add"
        >
          <p>Add Product</p>
        </NavLink>

        <NavLink
          className="border-b-4 border-emerald-200 hover:border-stone-950 transition-all duration-200  "
          to="/about"
        >
          <p>About</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
