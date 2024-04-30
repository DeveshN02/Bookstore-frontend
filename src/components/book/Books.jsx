import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "../../components/book/Book";
import Loader from "../Loader";
import { BASE_URl } from "../../baseurl";

const URL = `${BASE_URl}`;

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Books() {
  const [books, setbooks] = useState("");
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    fetchHandler().then((data) => setbooks(data.books));
    setloading(false);
  }, [books]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="w-full lg:w-10/12 gap-5 mx-auto py-20 flex flex-row justify-evenly flex-wrap">
          {books &&
            books.map((book, index) => (
              <div key={index}>
                <Book book={book} />
              </div>
            ))}
        </ul>
      )}

      <h3 className="text-center text:lg py-10 sm:text-4xl font-semibold font-stone-300 ">
        More Books will Available Soon...
      </h3>
    </div>
  );
}

export default Books;
