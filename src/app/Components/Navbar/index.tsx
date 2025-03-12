"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAuthenticated(!!localStorage.getItem("access_token"));
    }
  }, []);

  const activeClass = (path: string): string =>
    pathname === path ? "text-[#00C767]" : "text-gray-700 hover:font-medium";

  return (
    <nav className="flex items-center justify-between py-4 md:px-10 px-2 bg-white shadow-sm fixed w-full z-50">
      {/* Logo */}
      <div className="flex items-center space-x-10">
        <Link href="/">
          <Image src="/Logo/longLogo.svg" width={200} height={50} alt="logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/home">
            <p className={`cursor-pointer ${activeClass("/home")}`}>Home</p>
          </Link>
          <Link href="/listings">
            <p className={`cursor-pointer ${activeClass("/listings")}`}>List Property</p>
          </Link>
          <Link href="/about">
            <p className={`cursor-pointer ${activeClass("/about")}`}>About Us</p>
          </Link>
        </div>
      </div>

      {/* Account Section - Shown Before Hamburger in Mobile View */}
      <div className="flex md:hidden items-center space-x-4">
        {isAuthenticated ? (
          <Link href="/profile">
            <Image src="/images/profile-icon.png" width={32} height={32} alt="Profile" className="rounded-full cursor-pointer" />
          </Link>
        ) : (
          <Link href="/auth/welcome" className=" font-semibold text-[#00C767]">Sign Up</Link>
        )}

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Account Section */}
      <div className="hidden md:flex">
        {isAuthenticated ? (
          <Link href="/profile">
            <Image src="/images/profile-icon.png" width={40} height={32} alt="Profile" className="rounded-full cursor-pointer" />
          </Link>
        ) : (
          <Link href="/auth/welcome">
                      <Link href="/auth/welcome" className="text-lg font-semibold text-[#00C767]">Sign Up</Link>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-gradient-to-b from-white to-gray-100 backdrop-blur-lg shadow-xl rounded-l-2xl flex flex-col items-center space-y-8 py-12 md:hidden z-50"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-6 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <FiX size={28} className="text-gray-700" />
            </button>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col items-center space-y-6"
            >
              <Link href="/home" className={`text-xl font-semibold transition-all duration-200 transform hover:scale-105 ${activeClass("/home")}`} onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/listings" className={`text-xl font-semibold transition-all duration-200 transform hover:scale-105 ${activeClass("/listings")}`} onClick={() => setIsOpen(false)}>List Property</Link>
              <Link href="/about" className={`text-xl font-semibold transition-all duration-200 transform hover:scale-105 ${activeClass("/about")}`} onClick={() => setIsOpen(false)}>About Us</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
