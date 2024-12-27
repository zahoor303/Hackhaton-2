"use client";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import {
  AiOutlineSetting,
} from "react-icons/ai";
import { useState } from "react";
import PickUpSection from "../Homepage/pickup";
import Image from "next/image";  // Import Next.js Image component
import Link from "next/link";

const CategoryPage = () => {
  const [maxPrice, setMaxPrice] = useState(100);

  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      specs: "90L | Manual | 2 People",
      price: "$99.00/day",
      image: "/car.png",
      liked: true,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      specs: "80L | Manual | 2 People",
      price: "$80.00/day",
      discount: "$100.00",
      image: "/car1.png",
      liked: false,
    },
    {
      name: "Rolls-Royce",
      type: "Sport",
      specs: "70L | Manual | 4 People",
      price: "$96.00/day",
      image: "/car2.png",
      liked: false,
    },
    {
      name: "All New Rush",
      type: "SUV",
      specs: "70L | Manual | 6 People",
      price: "$72.00/day",
      discount: "$80.00",
      image: "/car4.png",
      liked: true,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sm:px-10 lg:px-20">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">MORENT</div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="pr-2"
              d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
            />
          </svg>
          <input
            type="text"
            placeholder="Search something here"
            className="bg-transparent outline-none w-full text-sm text-gray-700"
          />
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v5m8 8h5a2 2 0 002-2v-5M5 11h1m12 0h1m-9 4v1m0-8V6m4 4v1m0-8V6"
              />
            </svg>
          </div>
        </div>

        {/* Icons and User Profile */}
        <div className="flex items-center space-x-6">
          <FaHeart className="text-gray-500 text-lg" />
          <div className="relative">
            <BsBell className="text-gray-500 text-lg" />
            <span className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></span>
          </div>
          <AiOutlineSetting className="text-gray-500 text-lg" />
          <div className="relative"></div>
        </div>
      </nav>
      {/* Pick-Up Section */}
      <div className="gap-10"></div>
      <PickUpSection />

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 py-8">
        {/* Filters Section */}
        <aside className="bg-white p-6 rounded-lg shadow-md lg:col-span-3">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Filters</h2>

          {/* Type Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-700 mb-2">Type</h3>
            <ul className="space-y-2">
              {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                (type) => (
                  <li key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={type}
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor={type} className="text-sm text-gray-600">
                      {type}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Capacity Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-700 mb-2">Capacity</h3>
            <ul className="space-y-2">
              {["2 Person", "4 Person", "6 Person", "8 or More"].map(
                (capacity) => (
                  <li key={capacity} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={capacity}
                      className="text-blue-500 focus:ring-blue-500"
                    />
                    <label htmlFor={capacity} className="text-sm text-gray-600">
                      {capacity}
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-sm font-bold text-gray-700 mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))} // Convert to number
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-2">Max: ${maxPrice}.00</p>
          </div>
        </aside>

        {/* Cars Section */}
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                {/* Replace img tag with next/image */}
                <Image
                  src={car.image}
                  alt={car.name}
                  width={400} // Define the width of the image
                  height={200} // Define the height of the image
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold">{car.name}</h4>
                  <button>
                    {car.liked ? (
                      <FaHeart className="text-red-500 text-xl" />
                    ) : (
                      <FaRegHeart className="text-gray-400 text-xl" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-500">{car.type}</p>
                <p className="text-sm text-gray-500">{car.specs}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-blue-500 text-lg font-bold">{car.price}</p>

                  <Link href="/carDeatailpage">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Show More Button */}
          <div className="flex justify-between items-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Show More Cars
            </button>
            <span className="text-gray-500 text-sm">120 Cars</span>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white py-10 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-blue-500 text-2xl font-bold">MORENT</h2>
            <p className="text-sm text-gray-500 mt-2">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">About</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Community</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Socials</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            ©2022 MORENT. All rights reserved
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;
