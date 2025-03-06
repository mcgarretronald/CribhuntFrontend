"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Dynamic active class for links
    const activeClass = (path: string) => {
        if (path === "/home") {
            return pathname === "/home" ? "text-[#00C767]" : "";
        }
        return pathname.startsWith(path) ? "text-[#00C767]" : "";
    };

    return (
        <nav className="w-full sticky top-0 bg-white z-50">
            <div className="mx-auto flex justify-between items-center py-3 md:px-6 px-3">
                {/* Logo */}
                <Link href="/">
                    <Image src="/Logo/longLogo.svg" width={150} height={100} alt="logo" />
                </Link>
                {/* Navigation Links */}
                <div className="hidden md:flex text-sm font-light">
                    <div className="flex space-x-5 bg-[#DAFCE4] rounded-md p-2">
                        <Link href="/home">
                            <div className={`hover:bg-[#00D478] hover:text-white p-2 rounded ${activeClass("/home")}`}>
                                <p className="mx-2">Home</p>
                            </div>
                        </Link>
                        <Link href="/listings">
                            <div className={`hover:bg-[#00D478] hover:text-white p-2 rounded ${activeClass("/listings")}`}>
                                <p className="mx-2">Listings</p>
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className={`hover:bg-[#00D478] hover:text-white p-2 rounded ${activeClass("/about")}`}>
                                <p className="mx-2">About</p>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className={`hover:bg-[#00D478] hover:text-white p-2 rounded ${activeClass("/contact")}`}>
                                <p className="mx-2">Contact</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Account Icon */}
                <Link href="/account" className={`font-light items-center hidden md:flex space-x-2 ${activeClass("/account")}`}>
                    <FaRegUserCircle size={24} style={{ strokeWidth: 0.7 }} />
                    <p>Account</p>
                </Link>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <IoMdClose size={24} /> : <CgMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with fade in animation */}
            {menuOpen && (
                <div className="md:hidden bg-white  shadow-md animate-fadeIn">
                    <div className="flex flex-col text-center space-y-3 py-4">
                        <Link href="/home">
                            <div className={`hover:bg-[#00D478] hover:text-white p-2 rounded ${activeClass("/home")}`}>
                                <p>Home</p>
                            </div>
                        </Link>
                        <Link href="/listings">
                            <div className={`hover:bg-[#00D478] hover:text-white p-2 rounded ${activeClass("/listings")}`}>
                                <p>Listings</p>
                            </div>
                        </Link>
                        <Link href="/about">
                            <div className={`hover:bg-[#00D478] hover:text-white p-2 rounded ${activeClass("/about")}`}>
                                <p>About</p>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className={`hover:bg-[#00D478] hover:text-white p-2 rounded ${activeClass("/contact")}`}>
                                <p>Contact</p>
                            </div>
                        </Link>
                        <Link href="/account" className={`hover:bg-[#00D478] p-2 hover:text-white  items-center   ${activeClass("/account")}`}>
                            <div className="flex items-center  space-x-2 mx-[38%]">
                                <FaRegUserCircle size={20} style={{ strokeWidth: 0.7 }} />
                                <p>Account</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
