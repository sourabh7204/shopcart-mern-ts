import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomeBanner = () => (
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
        Shop product hits from <strong>Sony, JBL, Bose</strong>. Limited time
        deals!
      </p>
      <Link
        href="/shop"
        className="inline-block bg-shop_dark_green text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-green-800 transition"
      >
        Shop Now
      </Link>
    </div>

    {/* Right Side — Product Images with Labels */}
    <div className="flex gap-8 items-end absolute bottom-4 right-6">
      {/* JBL Product */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/brands/jbl_new.png"
          alt="JBL T450BT"
          width={150}
          height={150}
          priority
          style={{ height: "auto" }}
          className="drop-shadow-lg"
        />
        <p className="text-sm md:text-base font-bold text-gray-800 mt-1">
          JBL T450BT
        </p>
        <span className="text-xs md:text-sm text-green-600 font-semibold">
          Best Seller
        </span>
      </div>

      {/* Bose Product */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/brands/bose_qc35ii.png"
          alt="Bose QuietComfort 35 II"
          width={150}
          height={150}
          style={{ height: "auto" }}
          className="drop-shadow-lg"
        />
        <p className="text-sm md:text-base font-bold text-gray-800 mt-1">
          Bose QC 35 II
        </p>
        <span className="text-xs md:text-sm text-blue-600 font-semibold">
          Limited Offer...
        </span>
      </div>

      {/* Sony Placeholder */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/brands/sony.png"
          alt="Sony Headphones"
          width={150}
          height={150}
          style={{ height: "auto" }}
          className="drop-shadow-lg"
        />
        <p className="text-sm md:text-base font-bold text-gray-800 mt-1">
          Sony WH-1000XM4
        </p>
        <span className="text-xs md:text-sm text-red-500 font-semibold">
          New Price
        </span>
      </div>
    </div>
  </div>
);

export default HomeBanner;
