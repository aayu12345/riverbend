"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
    { src: "/images/bedroom.png", alt: "Loft Bedroom" },
    { src: "/images/sauna.png", alt: "Barrel Sauna" },
    { src: "/images/living.png", alt: "Living Space" },
    { src: "/images/hero.png", alt: "Winter Exterior" },
];

export default function GalleryScroller() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section id="gallery" ref={targetRef} className="relative h-[300vh] bg-transparent">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                    <div>
                        <span className="text-charcoal/50 uppercase tracking-widest text-xs font-medium block mb-2">
                            The Gallery
                        </span>
                        <h2 className="font-serif text-charcoal text-4xl md:text-5xl">
                            Moments in the Wild
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="text-copper italic font-serif text-lg">Scroll to explore</span>
                    </div>
                </div>

                {/* Using container-like padding for alignment */}
                <motion.div style={{ x }} className="flex gap-8 px-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] w-max">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="relative w-[80vw] md:w-[600px] aspect-[4/3] rounded-sm overflow-hidden flex-shrink-0 group"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        </div>
                    ))}
                    {/* Duplicate for length if needed */}
                    {images.map((img, i) => (
                        <div
                            key={`dup-${i}`}
                            className="relative w-[80vw] md:w-[600px] aspect-[4/3] rounded-sm overflow-hidden flex-shrink-0 group"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
