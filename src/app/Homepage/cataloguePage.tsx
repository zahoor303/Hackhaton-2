"use client";
import { FaHeart } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import Image from "next/image";

const CataloguePage = () => {
  const popularCars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      specs: "90L | Manual | 2 People",
      price: "$99.00/day",
      liked: true,
      image: '/car.png',
      
    },   
    {
      name: "Nissan GT - R",
      type: "Sport",
      specs: "80L | Manual | 2 People",
      price: "$80.00/day",
      discount: "$100.00",
      image: '/car1.png',
      liked: false,
    },
    {
      name: "Rolls - Royce",
      type: "Sedan",
      specs: "70L | Manual | 4 People",
      price: "$96.00/day",
      image: '/car2.png',
      liked: true,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      specs: "80L | Manual | 2 People",
      price: "$80.00/day",
      discount: "$100.00",
      image: '/car3.png',
      liked: false,
    },
  ];
  
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen px-4 sm:px-6 lg:px-20">
      <div className="py-6">
        {/* Popular Cars Section */}
        <section>
          <div className="flex justify-between items-center mb-6">

    
            <h3 className="text-blue-950 text-xl font-bold">Popular Cars</h3>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              View All
            </a> 
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularCars.map((carr, index) => {
                return(
                  <div
                key={index}
                className="bg-white text-black p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                {/* Car Image */}
                <div className="relative mb-4">

                  <Image
                    src={carr.image}
                    alt={carr.name}
                    width={534}
                    height={836}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <button className="absolute top-2 right-2">
                    {carr.liked ? (
                      <FaHeart className="text-red-500 text-xl" />
                    ) : (
                      <BsHeart className="text-gray-400 text-xl" />
                    )}
                  </button>
                </div>

                {/* Car Details */}
                <h4 className="text-lg font-bold mb-1">{carr.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{carr.type}</p>
                <p className="text-sm text-gray-600 mb-4">{carr.specs}</p>

                {/* Price and Rent Button */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-blue-500 text-lg font-bold">
                      {carr.price}
                    </p>
                    {carr.discount && (
                      <p className="text-sm text-gray-400 line-through">
                        {carr.discount}
                      </p>
                    )}
                  </div>
                  {/* <Image src={car1} alt="Rent Now Button"/> */}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Rent Now
                  </button>
                </div>
              </div>
                ) })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CataloguePage;




