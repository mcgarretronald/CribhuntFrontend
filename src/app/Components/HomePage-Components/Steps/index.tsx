"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card1 } from "../../Cards";

export default function Steps() {
  return (
    <div className="border bg-[#03624C] text-white py-18 px-5">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-center">
        Discover Your Perfect Home in Just a Few Simple Steps
      </h1>

      {/* Card Container */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-10">
        {[
          {
            imageSrc: "/images/search.png",
            title: "Easily List Your Property and Connect with Potential Buyers",
            text: "CribHunt simplifies home searching with an intuitive interface and powerful tools.",
            link: "Search",
          },
          {
            imageSrc: "/images/list.png",
            title: "Filter Listings by Price, Location, and Ratings for Tailored Results",
            text: "Find homes that match your criteria effortlessly with our advanced filters.",
            link: "List",
          },
          {
            imageSrc: "/images/contact.png",
            title: "Connect Directly with Agencies for Instant Answers and Support",
            text: "Reach out to agencies directly for inquiries and viewings with ease.",
            link: "Contact",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate in when visible
            transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
            viewport={{ once: true }} // Only animate once
          >
            <Card1 {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
