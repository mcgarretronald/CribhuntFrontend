'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        title: '🔍 Verified Listings',
        description: 'No fake or outdated properties. Every listing is verified for authenticity.',
        image: '/images/verified.png',
    },
    {
        title: '⚡ Fast & Seamless Search',
        description: 'Find your ideal home in minutes with our powerful search filters.',
        image: '/images/fast-search.png',
    },
    {
        title: '🏡 Neighborhood Ratings',
        description: 'Make informed decisions with honest neighborhood ratings and insights.',
        image: '/images/ratings.png',
    },
];

export default function WhyChooseUs() {
    return (
        <div className="p-10 text-center ">
            {/* Section Title */}
            <motion.h1
                className="text-3xl font-semibold mb-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                Why Choose CribHunt?
            </motion.h1>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="p-5 shadow-lg rounded-xl bg-white flex flex-col items-center text-center space-y-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <Image src={feature.image} alt={feature.title} width={300} height={80} className="rounded-md" />
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
