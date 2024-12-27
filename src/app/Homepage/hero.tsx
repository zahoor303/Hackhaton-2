import Image from "next/image";
import ad from "../assests/Ads 1.png"; // Update to the correct path
import Ad from "../assests/Ads 2.png"; // Update to the correct path
import PickUpSection from "../Homepage/pickup";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-20">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left Hero Card */}
        <div className="flex justify-center items-center">
          <Image
            src={ad}
            alt="Advertisement 1"
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
        {/* Right Hero Card */}
        <div className="flex justify-center items-center">
          <Image
            src={Ad}
            alt="Advertisement 2"
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Pick-Up Section */}
      <PickUpSection />
    </div>
  );
};

export default HeroSection;
