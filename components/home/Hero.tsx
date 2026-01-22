"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Riverbend Cabin Exterior"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-alabaster pt-32 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 text-alabaster/80 font-medium">
                        Welcome to Riverbend
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-wide">
                        YOUR RIVERSIDE GETAWAY <br />
                        <span className="italic font-light text-copper">STARTS HERE</span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                        <Link href="/book">
                            <Button
                                size="lg"
                                className="bg-copper text-white border-none hover:bg-copper/90 px-8 py-6 text-xs uppercase tracking-widest"
                            >
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-alabaster flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest">Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-alabaster to-transparent" />
            </motion.div>
        </section>
    );
}
