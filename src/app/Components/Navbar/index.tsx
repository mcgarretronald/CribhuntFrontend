"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAuthenticated(!!localStorage.getItem("access_token"));
    }
  }, []);

  const activeClass = (path: string): string => (pathname === path ? "text-[#00C767]" : "text-gray-700");

  return (
    <nav className="flex items-center justify-between p-4">
      {/* Logo */}
      <div className="flex items-center space-x-10">
        <Link href="/">
          <Image src="/Logo/longLogo.svg" width={200} height={50} alt="logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/home"><p className={`cursor-pointer ${activeClass("/home")}`}>Home</p></Link>
          <Link href="/listings"><p className={`cursor-pointer ${activeClass("/listings")}`}>List Property</p></Link>
          <Link href="/about"><p className={`cursor-pointer ${activeClass("/about")}`}>About Us</p></Link>
        </div>
      </div>

      {/* Account Section - Shown Before Hamburger in Mobile View */}
      <div className="flex md:hidden items-center space-x-4">
        {isAuthenticated ? (
          <Link href="/profile">
            <Image src="/images/profile-icon.png" width={32} height={32} alt="Profile" className="rounded-full cursor-pointer" />
          </Link>
        ) : (
          <Link href="/auth/welcome">
            <h1 className="cursor-pointer text-2xl ">Sign Up</h1>
          </Link>
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
            <h1 className="cursor-pointer text-2xl ">Sign Up</h1>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link href="/home" onClick={() => setIsOpen(false)}><p className={`cursor-pointer ${activeClass("/home")}`}>Home</p></Link>
          <Link href="/listings" onClick={() => setIsOpen(false)}><p className={`cursor-pointer ${activeClass("/listings")}`}>List Property</p></Link>
          <Link href="/about" onClick={() => setIsOpen(false)}><p className={`cursor-pointer ${activeClass("/about")}`}>About Us</p></Link>
        
        </div>
      )}
    </nav>
  );
}
