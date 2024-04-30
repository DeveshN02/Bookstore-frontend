import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HiOutlineSave } from "react-icons/hi";
import { BASE_URl } from "../baseurl";

function AddBook() {
  const history = useNavigate();
  const [inputs, setinputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    // setinputs((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }));

    if (e.target.type === "file") {
      // Handle file input separately
      setinputs((prevState) => ({
        ...prevState,
        image: e.target.files[0], // Store the file object
      }));
    } else {
      setinputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const sendRequest = async () => {
    // await axios
    //   .post("http://localhost:4000/books/addbook", {
    //     name: String(inputs.name),
    //     author: String(inputs.author),
    //     description: String(inputs.description),
    //     price: Number(inputs.price),
    //     image: String(inputs.image),
    //     available: Boolean(checked),
    //   })
    //   .then((res) => res.data);

    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("author", inputs.author);
    formData.append("description", inputs.description);
    formData.append("price", inputs.price);
    formData.append("image", inputs.image); // Append the file object
    formData.append("available", checked);

    await axios
      .post(`${BASE_URl}/addbook`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart form data
        },
      })
      .then((res) => res.data);
  };

  function handleSubmit(e) {
    e.preventDefault();

    sendRequest().then(history("/books"));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex lg:w-8/12 w-full text-xl flex-col mx-auto  items-start  px-5 py-10"
    >
      <label className="px-2" htmlFor="name">
        Book Name
      </label>
      <input
        className="w-full lg:px-10 px-3 mt-1 mb-5 lg:py-5 py-2 bg-transparent border-[1px] border-zinc-500 rounded-lg  font-semibold"
        name="name"
        type="text"
        id="name"
        placeholder="Enter Book Name"
        onChange={handleChange}
      />

      <label className="px-2" htmlFor="author">
        Auther
      </label>
      <input
        className="w-full lg:px-10 px-3 mt-1 mb-5 lg:py-5 py-2 bg-transparent border-[1px] border-zinc-500 rounded-lg  font-semibold"
        name="author"
        type="text"
        id="author"
        placeholder="Enter author Name"
        onChange={handleChange}
      />

      <label className="px-2" htmlFor="description">
        Description
      </label>
      <input
        className="w-full lg:px-10 px-3 mt-1 mb-5 lg:py-5 py-2 bg-transparent border-[1px] border-zinc-500 rounded-lg  font-semibold"
        name="description"
        type="text"
        id="description"
        placeholder="Enter description "
        onChange={handleChange}
      />

      <label className="px-2" htmlFor="price">
        Price
      </label>
      <input
        className="w-full lg:px-10 px-3 mt-1 mb-5 lg:py-5 py-2 bg-transparent border-[1px] border-zinc-500 rounded-lg  font-semibold"
        name="price"
        type="number"
        id="price"
        placeholder="Enter price "
        onChange={handleChange}
      />

      <label className="px-2" htmlFor="image">
        Image
      </label>
      <input
        className="sm:px-10 px-3 my-5 py-2 sm:py-10 mx-auto border-[1px] w-[250px] sm:[400px] lg:w-[600px] border-zinc-600 rounded-lg bg-zinc-800 bg-opacity-70  "
        name="image"
        type="file"
        id="image"
        onChange={handleChange}
      />
      <label className="px-2 w-fit  " htmlFor="checked-checkbox">
        Available
      </label>
      <input
        className="w-6   rounded-2xl mb-8 mt-1 overflow-hidden h-6 ml-5 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-5 dark:bg-gray-700 dark:border-gray-600"
        onClick={() => setChecked(!checked)}
        id="checked-checkbox"
        type="checkbox"
        checked={checked}
      />

      <button
        className="mx-auto flex justify-center items-center gap-2 font-lg: px-5 py-3 font-semibold my-5 w-full rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 text-white bg-blue-500"
        type="submit"
      >
        <p>Add Book</p>
        <HiOutlineSave />
      </button>
    </form>
  );
}

export default AddBook;
