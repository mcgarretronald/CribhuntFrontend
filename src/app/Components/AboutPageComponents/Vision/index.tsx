'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Vision() {
    return (
        <div className="p-10">
            {/* Title with animation on scroll */}
            <motion.h1
                className="text-3xl font-semibold text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                A Vision for Smarter House Hunting
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {/* Text Section with fade-in and slide-up effect on scroll */}
                <motion.section
                    className="flex flex-col justify-center space-y-3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <p>
                        CribHunt was founded with one goal: to make home searching easier, faster, and more transparent.
                        Frustrated by outdated listings, unreliable information, and complex processes, we set out to build a platform that puts home seekers first.
                        By leveraging technology, we bridge the gap between buyers and sellers, ensuring every listing is detailed, verified, and accessible.
                    </p>
                </motion.section>

                {/* Image Section with scale-up animation on scroll */}
                <motion.section
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <Image src="/images/vision.png" alt="vision" width={400} height={500} className="rounded-lg shadow-lg" />
                </motion.section>
            </div>
        </div>
    );
}
