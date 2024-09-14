import React from "react";
import bgImage from "../../images/news.png";
import banner from "../../images/img/banner.png";

const NewsLatter = () => {
  return (
    <>
      {/* Responsive layout for Sale section */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-50 py-12 px-8">
        {/* Left side: Image of the room */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={banner}
            alt="Living Room"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right side: Sale Content */}
        <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
          <h2 className="text-blue-500 font-semibold text-lg uppercase mb-2">
            Sale Up to 35% Off
          </h2>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            HUNDREDS of New lower prices!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            It's more affordable than ever to give every room in your home a stylish makeover.
          </p>
          <a
            href="/product"
            className="inline-block bg-black text-white font-semibold py-3 px-6 rounded hover:bg-gray-800 transition duration-200"
          >
            Shop Now →
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <div
        className="flex justify-center items-center bg-gray-100 py-12 px-8 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        {/* Center: Newsletter Signup */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center bg-white p-6 rounded-lg shadow-lg bg-opacity-70">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 mb-4">
            Sign up for deals, new products, and promotions
          </p>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                ✉️
              </span>
              <input
                type="email"
                placeholder="Email address"
                className="pl-10 pr-28 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
              />
              <button className="absolute right-0 top-0 mt-2 mr-2 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-200">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLatter;
