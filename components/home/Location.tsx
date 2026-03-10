"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Train, Home, Clock } from "lucide-react";

const reasons = [
    {
        title: "Shopping & Dining",
        desc: "Westfield London is Europe’s landmark shopping destination, with 300+ brands and hundreds of dining options — just a short walk away.",
        icon: ShoppingBag
    },
    {
        title: "Prime Connectivity",
        desc: "A major transport hub with direct access to the Central Line, Overground, and National Rail. Reach the West End in minutes.",
        icon: Train
    },
    {
        title: "Local Character",
        desc: "Combines the energy of central London with the charm of a residential neighbourhood. Safe, vibrant, and perfectly located.",
        icon: Home
    },
    {
        title: "Unmatched Convenience",
        desc: "Staying 2 minutes from Westfield saves you time and makes your London stay entirely stress-free and enjoyable.",
        icon: Clock
    }
];

export default function Location() {
    return (
        <section id="location" className="py-24 bg-alabaster border-t border-charcoal/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                            Our Neighbourhood
                        </span>
                        
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-snug mb-8">
                            Why <span className="italic text-copper">London?</span>
                        </h2>
                        <p className="text-charcoal/80 font-light leading-relaxed text-xl mb-12 max-w-2xl mx-auto">
                            World-class art, ravishing food and pubs older than certain countries. Any more questions?
                        </p>
                        
                        <div className="w-24 h-px bg-copper/30 mx-auto my-12" />

                        <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                            Why Stay Near Shepherd’s Bush & Westfield London?
                        </h3>
                        <p className="text-charcoal/70 font-light leading-relaxed text-lg max-w-3xl mx-auto">
                            Staying near Shepherd’s Bush and Westfield London places you in one of the most connected and vibrant areas of the city.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start p-10 bg-white border border-charcoal/5 group hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-full bg-alabaster flex items-center justify-center mb-8 text-copper border border-charcoal/10 group-hover:bg-charcoal group-hover:text-white transition-colors duration-300">
                                <reason.icon strokeWidth={1.5} className="w-6 h-6" />
                            </div>
                            <h4 className="font-serif text-2xl text-charcoal mb-4">{reason.title}</h4>
                            <p className="text-charcoal/70 font-light leading-relaxed text-base">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
