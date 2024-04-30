import React from "react";

function About() {
  return (
    <div className="lg:w-8/12 mx-auto sm:10/12 w-11/12">
      <div className="container mx-auto flex flex-col gap-9 px-4 text-center py-8">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to Bookstore, where the love of literature meets the joy of
          discovery. Established with a passion for books and a dedication to
          fostering a community of readers, we strive to create an inviting
          space where every visitor feels at home among the shelves.
        </p>

        <p className="text-lg mb-4">
          But this is more than just a place to buy books. It's a hub for
          bibliophiles to connect, share recommendations, and celebrate their
          shared love of reading. Our knowledgeable staff are passionate about
          books and are always on hand to offer personalized recommendations,
          answer questions, and engage in lively discussions about the latest
          literary offerings.
        </p>
        <p className="text-lg mb-4">
          We're also committed to supporting local authors and artists,
          providing a platform for emerging talent to showcase their work and
          connect with readers. From book signings and author events to
          community book clubs and writing workshops, we're proud to be a
          vibrant part of the local literary scene.
        </p>
        <p className="text-lg mb-4">
          At Bookstore, our mission is simple: to inspire, educate, and
          entertain through the power of storytelling. Whether you're a lifelong
          bookworm or a casual reader just beginning your literary journey, we
          invite you to explore our store, lose yourself in the pages of a good
          book, and discover the magic that lies within.
        </p>
        <p className="text-lg  my-2 mb-5">
          Thank you for choosing Bookstore. We look forward to helping you find
          your next great read.
        </p>

        <p className="text-sm">&copy; 2024 @Bookstore. All rights reserved.</p>
      </div>
    </div>
  );
}

export default About;
