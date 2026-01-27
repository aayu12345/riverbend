"use client";

import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
    return (
        <section id="location" className="py-24 bg-alabaster border-t border-charcoal/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                            Our Location
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-none mb-8">
                            In the Heart of <br /> <span className="italic text-copper">London.</span>
                        </h2>
                        <div className="space-y-6 text-charcoal/70 font-light leading-relaxed mb-10">
                            <p>
                                Perfectly positioned for both business and leisure, our apartments offer the ideal base to explore the capital.
                            </p>
                            <div className="flex items-start gap-4">
                                <MapPin className="text-copper w-5 h-5 flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-charcoal font-medium mb-1">Cogan's Place</strong>
                                    <span className="block">123 Riverbend Avenue</span>
                                    <span className="block">London, SW1A 1AA</span>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none uppercase tracking-widest text-xs px-8">
                            Get Directions
                        </Button>
                    </motion.div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full bg-charcoal/5 rounded-sm overflow-hidden flex items-center justify-center group"
                    >
                        {/* This would be an interactive map in production */}
                        <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=13&size=600x400&sensor=false')] bg-cover bg-center" />
                        <div className="relative z-10 w-12 h-12 bg-copper text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 text-xs font-bold text-charcoal uppercase tracking-widest shadow-sm">
                            View on Google Maps
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
