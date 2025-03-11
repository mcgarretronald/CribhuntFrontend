"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiArrowSortedDown } from "react-icons/ti";

const faqs = [
    {
        question: "How do I search?",
        answer:
            "Searching for your dream home is simple. Use our advanced filtering options to narrow down your preferences by price, location, and ratings. Just enter your criteria and explore the listings that match your needs.",
    },
    {
        question: "How can agencies list?",
        answer:
            "Agencies can easily list properties by signing up on our platform. Once registered, they can upload videos, photos, and detailed descriptions of their listings. Our user-friendly interface makes the process quick and efficient.",
    },
    {
        question: "What are neighborhood ratings?",
        answer:
            "Neighborhood ratings provide insights into the quality of different areas. These ratings are based on various factors, including safety, amenities, and community feedback. This helps you make informed decisions about where to live.",
    },
    {
        question: "How to get support?",
        answer:
            "Support is just a click away. You can reach out to our team via the contact form, email, or through our social media channels. We’re here to assist you with any inquiries.",
    },
];

export default function FAQS() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-10 px-10  mx-auto">
            {/* Title */}
            <h1 className="text-4xl font-semibold text-[#03624C]">FAQs</h1>
            <p className="text-gray-600 mt-2">
                Find answers to your questions about home searches and agency listings here.
            </p>

            {/* FAQ Section */}
            <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 pb-3"
                    >
                        {/* Question Row */}
                        <div
                            className="flex justify-between items-center cursor-pointer py-3"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-lg font-medium">{faq.question}</h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <TiArrowSortedDown className="w-5 h-5 text-[#03624C]" />
                            </motion.div>
                        </div>

                        {/* Answer with animation */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: openIndex === index ? 1 : 0,
                                height: openIndex === index ? "auto" : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-700 mt-2">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
