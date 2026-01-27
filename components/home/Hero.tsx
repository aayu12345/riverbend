"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BookingWidget from "@/components/ui/BookingWidget";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Fixed Parallax feel */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-[120%]"
                    style={{ backgroundImage: "url('/images/hero_london_victorian.png')" }}
                >
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y: textY }}
                className="relative z-10 container mx-auto px-4 md:px-6 text-center md:text-left h-full flex flex-col justify-center pb-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-white/90 uppercase tracking-[0.2em] text-xs font-bold mb-6 block border-l-2 border-copper pl-4">
                        Welcome to Cogan's Place
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-[5rem] leading-none text-white mb-6">
                        Timeless Victorian <br /> <span className="italic font-light text-copper">Elegance.</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-8 md:pl-1">
                        Experience the charm of heritage living in the heart of London's most exclusive neighborhoods.
                    </p>
                </motion.div>
            </motion.div>

            {/* Booking Widget Strip */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-8 md:pb-12">
                <BookingWidget />
            </div>
        </section>
    );
}
