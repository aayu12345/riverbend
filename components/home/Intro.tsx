"use client";

import { motion } from "framer-motion";
import { Coffee, Trees, Home, Wifi, MapPin, Sparkles } from "lucide-react";

const features = [
    {
        icon: Home,
        title: "Iconic Design",
        desc: "A stunning A-Frame architecture that blends seamless modern luxury with rustic charm."
    },
    {
        icon: Trees,
        title: "Immersed in Nature",
        desc: "Located deep within the Fennville forests, offering total seclusion and silence."
    },
    {
        icon: Sparkles,
        title: "Premium Comfort",
        desc: "Hotel-grade linens, a chef-ready kitchen, and curated amenities for a perfect stay."
    }
];

export default function Intro() {
    return (
        <section className="py-24 bg-alabaster text-charcoal border-b border-charcoal/5">
            <div className="container mx-auto px-4 md:px-8">

                {/* Minimal Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                        Why Cogan's Place
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
                        A Sanctuary for the <br /><span className="italic text-copper">Modern Soul.</span>
                    </h2>
                </div>

                {/* 3-Column Features Grid */}
                <div className="grid md:grid-cols-3 gap-12 md:gap-16 text-center">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-12 h-12 rounded-full bg-alabaster flex items-center justify-center mb-6 text-copper border border-charcoal/5">
                                <item.icon strokeWidth={1.5} className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                            <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto font-light">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
