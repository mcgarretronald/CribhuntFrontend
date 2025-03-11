"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { LuSlidersHorizontal, LuX } from 'react-icons/lu';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [amenity, setAmenity] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (location) params.append('location', location);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (amenity) params.append('amenity', amenity);
    router.push(`/listings?${params.toString()}`);
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const formatCurrency = (value: string) => {
    const number = Number(value);
    if (!isNaN(number)) {
      return number.toLocaleString('en-KE'); // Formats number with commas per Kenyan locale
    }
    return value;
  };

  return (
    <div
      className="h-[89.5vh] flex flex-col justify-center items-center text-white bg-no-repeat bg-cover relative px-4"
      style={{ backgroundImage: "url('/images/heroBg.svg')" }}
    >
      <h1 className="md:text-5xl text-4xl font-bold leading-normal mb-4 text-center">
        🏡 Find Your Dream Home, <br /> Hassle-Free
      </h1>
      <p className="mb-6 text-center">
        Search, explore, and connect directly with property owners in Nairobi
      </p>
      <form onSubmit={handleSearch} className="flex flex-col gap-5 items-center w-full">
        <div className="relative mb-4 w-full max-w-4xl">
          <input
            type="text"
            placeholder="Search for a Crib e.g. Homeland Apartments"
            value={search}
            onChange={handleInputChange(setSearch)}
            className="pl-4 pr-12 py-3 w-full rounded-lg focus:outline-none bg-white text-black shadow-md"
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="absolute right-3 top-0 cursor-pointer h-full flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            <LuSlidersHorizontal size={22} />
          </button>
        </div>
        <button
          type="submit"
          className="w-full max-w-[400px]  bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
        >
          Search
        </button>
      </form>
      {showFilters && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white text-black p-6 rounded-xl shadow-2xl w-full max-w-md z-10 transition duration-300 ease-in-out">
          {/* Close Icon */}
          <button
            type="button"
            onClick={() => setShowFilters(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <LuX size={24} />
          </button>
          <div className='py-2'>
          <Image src="/Logo/longLogo.svg" width={150} height={100} alt="logo" />
          
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleInputChange(setLocation)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00D478]"
              placeholder="Enter location"
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="minPrice">
                Min Price (KSh)
              </label>
              <input
                type="number"
                id="minPrice"
                value={minPrice}
                onChange={handleInputChange(setMinPrice)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00D478]"
                placeholder="e.g. 10,000"
              />
              {minPrice && (
                <p className="text-xs text-gray-500">
                  KSh {formatCurrency(minPrice)}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="maxPrice">
                Max Price (KSh)
              </label>
              <input
                type="number"
                id="maxPrice"
                value={maxPrice}
                onChange={handleInputChange(setMaxPrice)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00D478]"
                placeholder="e.g. 50,000"
              />
              {maxPrice && (
                <p className="text-xs text-gray-500">
                  KSh {formatCurrency(maxPrice)}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="amenity">
              Amenity
            </label>
            <input
              type="text"
              id="amenity"
              value={amenity}
              onChange={handleInputChange(setAmenity)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#00D478]"
              placeholder="e.g. Pool, Garden"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowFilters(false)}
            className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-medium"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
