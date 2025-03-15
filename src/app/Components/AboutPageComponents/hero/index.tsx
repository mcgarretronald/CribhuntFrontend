'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative flex flex-col justify-center items-center  text-center h-screen px-6">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/images/about.png")' }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <motion.div
                className="relative flex flex-col items-center space-y-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <motion.h1
                    className="md:text-5xl text-3xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Empowering Your Home Search Journey
                </motion.h1>

                <motion.p
                    className="md:text-lg text-sm text-gray-200 max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    &quot;At CribHunt, we simplify the process of finding your dream home by connecting seekers with verified listings and trusted agencies. With cutting-edge technology, we ensure a seamless, efficient, and transparent experience.&quot;
                </motion.p>

                <motion.button
                    className="border border-[#03624C] bg-[#03624C] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#024737] transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/listings">
                        Explore Listings
                    </Link>
                </motion.button>
            </motion.div>
        </div>
    );
}

