"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Sarah Jenkins",
        location: "New York",
        text: "The perfect balance of hotel luxury and home comfort. The location in Kensington was absolutely stunning and the apartment was spotless.",
    },
    {
        name: "David Chen",
        location: "Singapore",
        text: "Incredible design and attention to detail. Having a full kitchen and Nespresso machine made our week-long business trip so much more enjoyable.",
    },
    {
        name: "Emma Thompson",
        location: "London",
        text: "We booked Cogan's Place for a family reunion. The space was beautiful, flexible, and the staff were incredibly helpful with local recommendations.",
    }
];

export default function Reviews() {
    return (
        <section className="py-24 bg-[#0F172A] text-[#F9F8F6] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <p className="font-serif italic text-lg mb-4 opacity-80">Guest Stories</p>
                    <h2 className="font-serif text-4xl md:text-5xl">
                        Loved by Travelers
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#F9F8F6]/5 border border-[#F9F8F6]/10 p-8 relative rounded-sm backdrop-blur-sm hover:bg-[#F9F8F6]/10 transition-colors duration-300"
                        >
                            <Quote className="w-10 h-10 text-[#F9F8F6]/20 mb-6" />
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-[#C5A087] fill-current" />
                                ))}
                            </div>
                            <p className="font-serif text-lg leading-relaxed mb-6 opacity-90">
                                &quot;{review.text}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold tracking-wider uppercase text-xs">{review.name}</h4>
                                <span className="text-xs opacity-60 uppercase tracking-widest">{review.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
