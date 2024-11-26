import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getbook = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        console.log(response.data);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []); // Run only on mount

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            veniam, est delectus labore ducimus consectetur eius suscipit
            architecto, sed magni laudantium sint dolor nam rem!
          </p>
          <Link to="/">
            <button className="text-white bg-pink-500 px-4 py-2 rounded hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>

        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {book.map((item) => {
            return <Cards key={item._id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
