"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const amenities = [
    {
        id: "01",
        title: "Cedar Barrel Sauna",
        desc: "Panoramic views while you detox.",
        image: "/images/sauna.png",
    },
    {
        id: "02",
        title: "Riverside Deck",
        desc: "Direct private access to the Kalamazoo.",
        image: "/images/hero.png",
    },
    {
        id: "03",
        title: "The Loft Bedroom",
        desc: "Wake up to sunlight through the trees.",
        image: "/images/bedroom.png",
    },
    {
        id: "04",
        title: "Chef's Kitchen",
        desc: "Fully stocked for your culinary creations.",
        image: "/images/living.png",
    },
];

export default function Features() {
    const [hoveredIndex, setHoveredIndex] = useState<number>(0);

    return (
        <section id="amenities" className="bg-charcoal text-alabaster py-24 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="relative z-10">
                        <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                            Amenities & Details
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.1]">
                            Curated <br /> <span className="italic text-copper">Comforts.</span>
                        </h2>

                        <ul className="space-y-6">
                            {amenities.map((item, idx) => (
                                <li key={idx} className="group cursor-default">
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-copper text-xs">◇</span>
                                        <div>
                                            <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:text-copper transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-alabaster/60 font-light text-sm md:text-base max-w-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <Button variant="outline" className="border-copper text-copper hover:bg-copper hover:text-white transition-colors">
                                View Full Gallery
                            </Button>
                        </div>
                    </div>

                    {/* Right: Staggered Images */}
                    <div className="relative h-[600px] w-full hidden md:block">
                        {/* Main Base Image */}
                        <motion.div
                            className="absolute top-0 right-0 w-3/4 h-[80%] z-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/images/living.png"
                                alt="Living Room"
                                fill
                                className="object-cover rounded-sm opacity-80"
                            />
                        </motion.div>

                        {/* Overlapping Small Image 1 */}
                        <motion.div
                            className="absolute bottom-0 left-10 w-1/2 h-[50%] z-10 shadow-2xl border-4 border-charcoal"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/images/sauna.png"
                                alt="Sauna"
                                fill
                                className="object-cover rounded-sm"
                            />
                        </motion.div>

                        {/* Decorative Element */}
                        <div className="absolute top-20 left-0 w-24 h-24 border border-copper/30 z-0" />
                    </div>

                </div>
            </div>
        </section>
    );
}
