import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URl } from "../../baseurl";

function BookDetails() {
  // whihc id is use inside route that will exact name to be used
  const history = useNavigate();
  const [inputs, setinputs] = useState({});
  const id = useParams().id;

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`${BASE_URl}/getbookbyid/${id}`)
        .then((res) => res.data)
        .then((data) => setinputs(data.book));
    };
    fetchHandler();
  }, [id]);
  console.log(inputs, "i ma ");

  const sendRequest = async () => {
    // await axios
    //   .put(`http://localhost:4000/books/updatebook/${id}`, {
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

    formData.append("image", inputs.image);
    // Append the file object
    formData.append("available", checked);

    await axios
      .patch(`http://localhost:4000/books/updatebook/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart form data
        },
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };

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

  return (
    <div>
      {inputs && (
        <form
          className="flex lg:w-8/12 w-full text-xl flex-col mx-auto  items-start  px-5 py-10"
          onSubmit={handleSubmit}
        >
          <label className="px-2" htmlFor="name">
            Book Name
          </label>
          <input
            className="w-full lg:px-10 px-3 mt-1 mb-5 lg:py-5 py-2 bg-transparent border-[1px] border-zinc-500 rounded-lg  font-semibold"
            value={inputs.name}
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
            value={inputs.author}
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
            value={inputs.description}
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
            value={inputs.price}
            name="price"
            type="number"
            id="price"
            placeholder="Enter price "
            onChange={handleChange}
          />

          <label className="px-2" htmlFor="image">
            Image URL
          </label>
          <input
            className="sm:px-10 px-3 my-5 py-2 sm:py-10 mx-auto border-[1px] w-[250px] sm:[400px] lg:w-[600px] border-zinc-600 rounded-lg bg-zinc-800 bg-opacity-70  "
            name="image"
            type="file"
            id="image"
            placeholder="Enter Image URL"
            onChange={handleChange}
          />

          <label className="px-2" htmlFor="checked-checkbox">
            Available
          </label>
          <input
            className="w-6   rounded-2xl mb-8 mt-1 overflow-hidden h-6 ml-5 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-5 dark:bg-gray-700 dark:border-gray-600"
            value={inputs.available}
            onClick={() => setChecked(!checked)}
            id="checked-checkbox"
            type="checkbox"
            checked={checked}
          />

          <button
            className="mx-auto font-lg: px-5 py-3 font-semibold my-5 w-full rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 text-white bg-blue-500"
            type="submit"
          >
            Update Book
          </button>
        </form>
      )}
    </div>
  );
}

export default BookDetails;
