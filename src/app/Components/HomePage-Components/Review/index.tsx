"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Review() {
    return (
        <div className="bg-[#DAFCE4] py-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Image
                    src={"/images/reviewer.png"}
                    alt="reviewer"
                    width={500}
                    height={500}
                    className="rounded-md shadow-lg"
                />
            </motion.div>

            {/* Review Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center space-y-3"
            >
                <section className="text-2xl">⭐⭐⭐⭐⭐</section>
                <section>
                    <p className="text-lg">
                        &quot;CribHunt transformed my home search experience! I found my dream home in no time, thanks to its user-friendly interface and detailed listings.&quot;
                    </p>
                </section>
                <section className="border-l-4 border-black pl-5">
                    <p className="font-semibold text-xl">Kingstone Onyango</p>
                    <p className="text-gray-600">Home Seeker</p>
                </section>
            </motion.div>
        </div>
    );
}
