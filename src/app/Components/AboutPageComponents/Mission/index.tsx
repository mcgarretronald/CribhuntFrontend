'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
    return (
        <div className="p-10 text-center space-y-10">
            {/* Title with fade-in animation */}
            <motion.h1
                className="text-3xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                Mission & Vision for CribHunt
            </motion.h1>

            {/* Mission Section with slide-up effect */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl">🌍 Our Mission</h3>
                <p className="text-lg md:mx-[10%]">
                    &quot;To revolutionize the home search experience by providing a seamless, transparent, and technology-driven platform
                    that connects home seekers with verified listings and trusted agencies. We aim to simplify the process, ensuring efficiency,
                    accuracy, and ease for every user.&quot;
                </p>
            </motion.div>

            {/* Vision Section with delayed animation */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl">🌟 Our Vision</h3>
                <p className="text-lg md:mx-[10%]">
                    &quot;To be the leading digital platform for real estate discovery, empowering individuals with data-driven insights, smart search
                    tools, and direct access to property owners. We envision a future where finding a home is effortless, trustworthy, and enjoyable.&quot;
                </p>
            </motion.div>
        </div>
    );
}
