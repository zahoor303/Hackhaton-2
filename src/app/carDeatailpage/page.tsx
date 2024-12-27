// import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
// import { FaHeart } from "react-icons/fa";
// import { BsBell } from "react-icons/bs";
import Image from "next/image";
import veiw from "@/app/assests/View.png";
import veiw1 from "@/app/assests/View 1.png";
import veiw2 from "@/app/assests/View 2.png";
import veiw3 from "@/app/assests/View 3.png";
// import image from "@/app/assests/Image.png";
import Navbar from "@/app/Homepage/navbar";
import review from "@/app/assests/Reviews (1).png";
import recent from "@/app/assests/Recent Car.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-8 px-6 sm:px-10 lg:px-20">
      {/* Navbar */}
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
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
                      name="type"
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
                      name="capacity"
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
            <input type="range" min="0" max="100" className="w-full" />
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Car Details Section */}
          <div className="bg-blue-100 rounded-lg p-6">
            <h2 className="text-blue-900 text-2xl font-bold mb-4">
              Sports car with the best design and acceleration
            </h2>
            <p className="text-gray-700 mb-6">
              Safety and comfort while driving a futuristic and elegant sports
              car
            </p>
            <div className="relative">
              <Image
                src={veiw}
                alt="Sports Car"
                width={600}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="flex mt-4 gap-4">
              {[veiw1, veiw2, veiw3].map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md cursor-pointer border hover:border-blue-500"
                />
              ))}
            </div>
          </div>

          {/* Car Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-blue-900 text-2xl font-bold mb-2">
                Nissan GT - R
              </h3>
              <p className="text-sm text-gray-500 mb-6">440+ Reviews</p>
              <p className="text-gray-600 mb-6">
                NISMO has become the embodiment of Nissan is outstanding
                performance, inspired by the race track.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 font-bold mr-2">
                    Type Car:
                  </span>
                  <span className="text-sm text-gray-700">Sport</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 font-bold mr-2">
                    Capacity:
                  </span>
                  <span className="text-sm text-gray-700">2 Person</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 font-bold mr-2">
                    Steering:
                  </span>
                  <span className="text-sm text-gray-700">Manual</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 font-bold mr-2">
                    Gasoline:
                  </span>
                  <span className="text-sm text-gray-700">70L</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div>
                <p className="text-blue-500 text-2xl font-bold">$80.00/day</p>
                <p className="text-sm text-gray-400 line-through">$100.00</p>
              </div>
              <Link href="/paymentpage">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Image
          src={review}
          alt="Car Review"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="mt-6">
        <Image src={recent} alt="Recent Cars" />
      </div>

      {/* Footer */}

      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <div>
          <h2 className="text-2xl font-bold text-blue-500">MORENT</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            {[
              "How it works",
              "Featured",
              "Partnership",
              "Business Relation",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Community</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            {["Events", "Blog", "Podcast", "Invite a friend"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Socials</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            {["Discord", "Instagram", "Twitter", "Facebook"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500 text-center md:text-left">
          ©2022 MORENT. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
