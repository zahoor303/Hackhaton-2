import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image"; // Importing the Image component

const RecommendationCar = () => {
  const cars = [
    {
      name: "All New Rush",
      type: "SUV",
      specs: "70L | Manual | 6 People",
      price: "$72.00/day",
      discount: "$80.00",
      liked: false,
      image: "/car4.png",
    },
    {
      name: "CR - V",
      type: "SUV",
      specs: "80L | Manual | 6 People",
      price: "$80.00/day",
      discount: null,
      liked: true,
      image: "/car5.png",
    },
    {
      name: "All New Terios",
      type: "SUV",
      specs: "90L | Manual | 6 People",
      price: "$74.00/day",
      discount: null,
      liked: false,
      image: "/car6.png",
    },
    {
      name: "MG ZX Exclusive",
      type: "Hatchback",
      specs: "70L | Manual | 4 People",
      price: "$76.00/day",
      discount: "$80.00",
      liked: true,
      image: "/car7.png",
    },
    {
      name: "New MG ZS",
      type: "SUV",
      specs: "80L | Manual | 6 People",
      price: "$80.00/day",
      discount: null,
      liked: false,
      image: "/car8.png",
    },
    {
      name: "MG ZX Excite",
      type: "Hatchback",
      specs: "90L | Manual | 4 People",
      price: "$74.00/day",
      discount: null,
      liked: true,
      image: "/car10.png",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-6 lg:px-20">
      {/* Section Header */}
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Recommendation Cars
      </h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {/* Car Image and Like Button */}
            <div className="relative">
              <Image
                src={car.image} // Use the Image component here
                alt={car.name}
                width={500} // Specify the width
                height={300} // Specify the height
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <button className="absolute top-2 right-2">
                {car.liked ? (
                  <FaHeart className="text-red-500 text-xl" />
                ) : (
                  <FaRegHeart className="text-gray-400 text-xl" />
                )}
              </button>
            </div>

            {/* Car Details */}
            <h4 className="text-lg font-bold mb-1">{car.name}</h4>
            <p className="text-sm text-gray-500 mb-2">{car.type}</p>
            <p className="text-sm text-gray-500 mb-4">{car.specs}</p>

            {/* Price and Rent Button */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-500 text-lg font-bold">{car.price}</p>
                {car.discount && (
                  <p className="text-sm text-gray-400 line-through">
                    {car.discount}
                  </p>
                )}
              </div>

              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-8">
        {/* Show More Button */}
        <Link href="/catageroyPage">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Show More Cars
          </button>
        </Link>

        {/* Total Cars */}
        <span className="text-gray-500 text-sm">120 Cars</span>
      </div>
    </div>
  );
};

export default RecommendationCar;
