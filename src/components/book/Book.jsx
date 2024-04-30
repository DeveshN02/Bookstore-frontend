import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URl } from "../../baseurl";

function Book(props) {
  var { _id, name, author, description, image, available, price } = props.book;

  const history = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`${BASE_URl}/deletebook/${_id}`)
      .then((res) => res.data)
      .then(() => history("/books"));
  };

  return (
    <div className="flex bg-stone-200 border-[1px] overflow-hidden  border-zinc-500 bg-opacity-100 text-stone-950 w-[250px] mx-auto lg:w-[280px] h-[420px]  m-5 flex-col   shadow-lg  shadow-black rounded-lg">
      <img className="w-full h-2/5 rounded-md " src={image} alt="book" />

      <div className="w-full flex flex-col justify-between h-full p-2">
        <h1 className="text-xl text-slate-950 font-bold pl-2">
          {name} <span className="text-emerald-800 text-lg ">{"   By "}</span>
          <span className="text-sm font-medium  text-emerald-900 ">
            {author}
          </span>
        </h1>

        <p className="text-sm  h-[40px] overflow-hidden text-stone-950 ">
          {description}
        </p>
        <h3 className="text-2xl text-emerald-800 font-bold pl-2">
          {price}{" "}
          <strike className="text-sm font-semibold text-red-600">
            {Number(price + 955)}
          </strike>
        </h3>

        <p className="text-lg text-stone-950 font-semibold">
          In Stock : {available ? <span>Yes</span> : <span>No</span>}
        </p>

        <div className="flex w-full justify-between px-3">
          <NavLink to={`/books/${_id}`}>
            <button
              type="button"
              class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
              Update
            </button>
          </NavLink>
          <button
            onClick={deleteHandler}
            type="button"
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
