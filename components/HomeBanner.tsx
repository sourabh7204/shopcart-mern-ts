import React from "react";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images"; // Example headphone image

const HomeBanner = () => {
  return (
    <div className="relative w-full h-[250px] bg-gradient-to-r from-green-100 via-pink-100 to-yellow-100 rounded-2xl overflow-hidden px-6 md:px-16 shadow-lg flex items-center justify-between">
      {/* Left Content */}
      <div className="space-y-3 z-10 max-w-md">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Big Brand Sale 🎉
        </h1>
        <p className="text-gray-700 text-sm md:text-lg font-medium">
          Flat <span className="text-red-500 font-bold">50% OFF</span> on
          Headphones
        </p>
        <p className="text-gray-600 text-xs md:text-base">
          Shop exclusive deals from Sony, JBL, Bose, and more. Hurry up —
          limited time offers!
        </p>
        <Link
          href={"/shop"}
          className="inline-block bg-shop_dark_green text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-green-800 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Content - Big Brand Images with Offers */}
      <div className="flex gap-8 items-end absolute bottom-4 right-6">
        {/* Sony */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={banner_1}
            alt="Sony Headphones"
            className="w-[110px] md:w-[150px] drop-shadow-lg"
          />
          <p className="text-sm md:text-base font-bold text-gray-800 mt-1">
            Sony
          </p>
          <span className="text-xs md:text-sm text-red-500 font-semibold">
            Flat 40% OFF
          </span>
        </div>

        {/* JBL */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/brands/jbl.png"
            alt="JBL"
            width={150}
            height={150}
            className="drop-shadow-lg"
          />
          <p className="text-sm md:text-base font-bold text-gray-800 mt-1">
            JBL
          </p>
          <span className="text-xs md:text-sm text-green-600 font-semibold">
            New Launch
          </span>
        </div>

        {/* Bose */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/brands/bose.png"
            alt="Bose"
            width={150}
            height={150}
            className="drop-shadow-lg"
          />
          <p className="text-sm md:text-base font-bold text-gray-800 mt-1">
            Bose
          </p>
          <span className="text-xs md:text-sm text-blue-600 font-semibold">
            Best Seller
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
