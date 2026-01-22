"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Intro() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="cabin" ref={containerRef} className="py-24 md:py-32 bg-alabaster text-charcoal">
            <div className="container mx-auto px-4 md:px-8">

                {/* Centered Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">The Experience</span>
                        <h2 className="font-serif text-5xl md:text-7xl text-charcoal leading-[1.1] mb-8">
                            Comfort. <span className="italic text-copper">Quiet.</span> Nature.
                        </h2>
                        <div className="w-24 h-[1px] bg-charcoal/20 mx-auto mb-8" />
                        <p className="text-charcoal/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
                            Tucked away in the dense forests of Fennville, Riverbend is an
                            architectural experience curated for the modern traveler.
                            We believe in the luxury of silence.
                        </p>
                    </motion.div>
                </div>

                {/* 3-Column Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { src: "/images/living.png", alt: "Living Space", label: "Gather" },
                        { src: "/images/bedroom.png", alt: "Loft Bedroom", label: "Rest" },
                        { src: "/images/sauna.png", alt: "Barrel Sauna", label: "Restore" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-sm"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <span className="text-white text-lg font-serif italic tracking-wide drop-shadow-md">
                                    {item.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
