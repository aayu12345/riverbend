"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col md:flex-row pt-20 overflow-hidden bg-[#F9F8F6]">
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

                    <p className="text-[#0F172A]/80 text-lg md:text-xl font-sans max-w-md mb-8 leading-relaxed">
                        Experience the charm of London living in our exclusive collection of Kensington and Notting Hill residences.
                    </p>

                    <Link href="/properties">
                        <Button className="bg-[#0F172A] text-[#F9F8F6] hover:bg-[#0F172A]/90 rounded-none px-8 py-6 text-xs uppercase tracking-[0.2em]">
                            View Apartments
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto min-h-screen">
                <Image
                    src="/images/hero_london_victorian.png"
                    alt="Victorian London Townhouse"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
}
