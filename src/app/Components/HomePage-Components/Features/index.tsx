"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card2 } from "../../Cards";
export default function Features() {
    return (
        <div className='text-center py-20'>
            <div className="lg:mx-[25%] space-y-5">
                <p className='font-medium'>Features</p>
                <h1 className='md:text-4xl text-3xl font-semibold'>Discover Our Unique Features for Home Seekers</h1>
                <p>CribHunt offers advanced filtering options to help you find the perfect home tailored to your needs. Connect directly with agencies for a seamless home-buying experience.</p>
            </div>
            {/* Card Container */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-10">
                {[
                    {
                        imageSrc: "/images/advanced.png",
                        title: "Advanced Filtering for Tailored Searches",
                        text: "Easily narrow down your options by price, location, and ratings.",
                        
                    },
                    {
                        imageSrc: "/images/direct.png",
                        title: "Direct Contact with Property Agencies",
                        text: "Reach out to agencies directly for inquiries and viewings.",
                        
                    },
                    {
                        imageSrc: "/images/neighbourhood.png",
                        title: "Neighborhood Ratings for Informed Decisions",
                        text: "Access community insights to choose the best location.",
                        
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
                        whileInView={{ opacity: 1, y: 0 }} // Animate in when visible
                        transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
                        viewport={{ once: true }} // Only animate once
                    >
                        <Card2 {...item} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
