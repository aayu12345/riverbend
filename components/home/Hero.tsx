"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const heroImages = [
    "/images/gf/DSC01034.jpg",
    "/images/gf/DSC01046.jpg",
    "/images/gf/DSC01119.jpg",
    "/images/ff/38.jpg",
    "/images/ff/33.jpg"
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3500); // Change image every 3.5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col md:flex-row pt-28 overflow-hidden bg-[#F9F8F6]">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-0 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#0F172A] leading-[1.1] mb-6">
                        Timeless <br />
                        <span className="relative inline-block">
                            Victorian
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#0F172A]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span> <br />
                        Elegance
                    </h1>

                    <p className="text-[#0F172A]/80 text-lg md:text-xl font-sans max-w-sm mb-8 leading-relaxed">
                        Discover the elegance of London living. Book direct for our best rates and exclusive amenities.
                    </p>

                    <Link href="/properties">
                        <Button className="bg-[#0F172A] text-[#F9F8F6] hover:bg-[#0F172A]/90 rounded-none px-8 py-6 text-xs uppercase tracking-[0.2em]">
                            View Apartments
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Right Image Slideshow */}
            <div className="w-full md:w-1/2 relative h-[60vh] md:h-screen bg-[#0F172A] overflow-hidden">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 4.5, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={heroImages[currentIndex]}
                                alt={`Victorian London Townhouse - View ${currentIndex + 1}`}
                                fill
                                className="object-cover"
                                priority={currentIndex === 0}
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-3">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                index === currentIndex
                                    ? "bg-white w-8"
                                    : "bg-white/50 hover:bg-white/80 w-2"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
