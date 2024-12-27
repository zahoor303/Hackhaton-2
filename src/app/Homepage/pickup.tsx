import React from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
const PickDropSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6 bg-gray-50">
      {/* Pick-Up Section */}
      <div className="w-full lg:flex-1 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-blue-600 font-semibold mb-4">🔵 Pick-Up</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-semibold">Locations</label>
            <select className="w-full p-2 border rounded mt-1">
              <option>Select your city</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Date</label>
            <input type="date" className="w-full p-2 border rounded mt-1" />
          </div>
          <div>
            <label className="font-semibold">Time</label>
            <input type="time" className="w-full p-2 border rounded mt-1" />
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex items-center justify-center w-full lg:w-auto">
        <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600">
          <ArrowsRightLeftIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="w-full lg:flex-1 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-blue-600 font-semibold mb-4">🔵 Drop-Off</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-semibold">Locations</label>
            <select className="w-full h-10 p-2 border rounded mt-1">
              <option>Select your city</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Date</label>
            <input type="date" className="w-full p-2 border rounded mt-1" />
          </div>
          <div>
            <label className="font-semibold">Time</label>
            <input type="time" className="w-full p-2 border rounded mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDropSection;


