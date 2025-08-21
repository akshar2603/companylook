import React from "react";
import { ArrowRight } from "lucide-react";
import techbanner from "../../../assets/banner.jpg";
const Hero = () => {
  return (
    <div className="relative  h-screen">
      <div className="absolute inset-0">
        <img
          src={techbanner}
          alt="Technology Background"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Elevate Your Bussiness With Lakhankiya Innovations.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl">
            We deliver innovative IT solutions that drive growth, efficiency,
            and competitive advantage for businesses worldwide.
          </p>
          <div className="flex flex-row gap-4">
            <a href="/contact">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
            <a href="#about">
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
