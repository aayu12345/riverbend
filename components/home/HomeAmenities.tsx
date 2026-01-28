"use client";

import { motion } from "framer-motion";
import { Utensils, Wifi, Coffee, Tv, Shirt, Bath } from "lucide-react";

const amenities = [
    { name: "Fully Equipped Kitchen", icon: Utensils },
    { name: "Superfast Wi-Fi", icon: Wifi },
    { name: "Nespresso Machine", icon: Coffee },
    { name: "Smart TV", icon: Tv },
    { name: "Washer/Dryer", icon: Shirt },
    { name: "Luxury Toiletries", icon: Bath },
];

export default function HomeAmenities() {
    return (
        <section className="py-24 bg-[#F9F8F6]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/3"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-[#0F172A] mb-6">
                            Apartment <br /> <span className="italic opacity-80">Amenities</span>
                        </h2>
                        <p className="text-[#0F172A]/80 leading-relaxed mb-8">
                            Designed for living, not just sleeping. Our apartments come fully equipped with everything you need for a comfortable stay, whether for a night or a month.
                        </p>
                    </motion.div>

                    {/* Right Grid */}
                    <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                        {amenities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col gap-4 group"
                            >
                                <item.icon strokeWidth={1} className="w-8 h-8 text-[#0F172A] group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-sans text-sm font-medium tracking-wide text-[#0F172A] uppercase">
                                    {item.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
