"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Wifi, Coffee, Utensils, Tv, Car, Wind, Lock, Flower2 } from "lucide-react";

const amenitiesList = [
    {
        category: "Essentials",
        items: [
            { icon: Wifi, label: "High-Speed WiFi" },
            { icon: Wind, label: "Air Conditioning & Heating" },
            { icon: Lock, label: "Smart Lock Access" },
            { icon: Car, label: "Free Private Parking" }
        ]
    },
    {
        category: "Kitchen & Dining",
        items: [
            { icon: Utensils, label: "Chef's Kitchen" },
            { icon: Coffee, label: "Nespresso Machine" },
            { icon: Utensils, label: "Dishwasher & Oven" },
            { icon: Utensils, label: "Premium Cookware" }
        ]
    },
    {
        category: "Relaxation",
        items: [
            { icon: Tv, label: "Smart TV with Netflix" },
            { icon: Flower2, label: "Private Garden / Terrace" },
            { icon: Flower2, label: "Luxury Linens" },
            { icon: Coffee, label: "Welcome Hamper" }
        ]
    }
];

export default function AmenitiesPage() {
    return (
        <main className="min-h-screen bg-alabaster selection:bg-copper selection:text-white">
            <Navbar />

            {/* Page Header */}
            <section className="pt-40 pb-20 px-4 md:px-8 bg-alabaster border-b border-charcoal/5">
                <div className="container mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                            Curated Comforts
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-none mb-8">
                            Amenities & <br /> <span className="italic text-copper">Services.</span>
                        </h1>
                        <p className="text-charcoal/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            Every detail at Cogan's Place is designed for your comfort. From high-speed connectivity to hotel-grade linens, we've thought of everything.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Amenities Grid */}
            <section className="py-24 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                        {amenitiesList.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 md:p-10 shadow-sm border border-charcoal/5"
                            >
                                <h3 className="font-serif text-2xl text-charcoal mb-8 border-b border-charcoal/10 pb-4">
                                    {category.category}
                                </h3>
                                <ul className="space-y-6">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-charcoal/80 group">
                                            <div className="w-8 h-8 rounded-full bg-alabaster flex items-center justify-center text-copper group-hover:scale-110 transition-transform">
                                                <item.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm uppercase tracking-wide font-medium">
                                                {item.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
