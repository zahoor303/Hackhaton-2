import { AiOutlineSetting } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import image from "@/app/assests/Image.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sm:px-10 lg:px-20">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500">MORENT</div>

      {/* Search Bar */}
      <div className="hidden sm:flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" className="pr-2" d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"/></svg>
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
        <div className="relative">


        </div>
        <Image
          src={image}
          alt="User"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
