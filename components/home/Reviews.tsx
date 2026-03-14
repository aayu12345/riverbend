"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Sarah",
        location: "New York, New York",
        date: "October 2023",
        duration: "Stayed a few nights",
        avatar: "https://ui-avatars.com/api/?name=Sarah&background=random&color=fff&size=128",
        text: "The perfect balance of hotel luxury and home comfort. The location was absolutely stunning and the apartment was spotless. Highly recommend for anyone visiting!",
    },
    {
        name: "David",
        location: "Singapore",
        date: "September 2023",
        duration: "Stayed about a week",
        avatar: "https://ui-avatars.com/api/?name=David&background=random&color=fff&size=128",
        text: "Incredible design and attention to detail. Having a full kitchen and Nespresso machine made our week-long business trip so much more enjoyable. Will be back.",
    },
    {
        name: "Emma",
        location: "London, United Kingdom",
        date: "December 2023",
        duration: "Stayed a weekend",
        avatar: "https://ui-avatars.com/api/?name=Emma&background=random&color=fff&size=128",
        text: "We booked Cogan's Place for a family reunion. The space was beautiful, flexible, and the hosts were incredibly helpful with local recommendations. 10/10.",
    }
];

export default function Reviews() {
    return (
        <section className="py-24 bg-[#F9F8F6] text-[#0F172A] relative overflow-hidden border-t border-[#0F172A]/5">
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl flex items-center gap-2">
                            <Star className="w-8 h-8 text-[#0F172A] fill-current" />
                            5.0 <span className="text-xl font-sans mt-1 opacity-70">· 124 reviews</span>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-[#0F172A]/10 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-semibold text-base">{review.name}</h4>
                                    <p className="text-sm text-[#0F172A]/60">{review.location}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-1 mb-4 flex-wrap">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-3.5 h-3.5 text-[#0F172A] fill-current" />
                                    ))}
                                </div>
                                <span className="ml-1 text-sm font-medium text-[#0F172A]">· {review.date}</span>
                                <span className="ml-1 text-sm text-[#0F172A]/60">· {review.duration}</span>
                            </div>
                            
                            <p className="text-[#0F172A]/80 leading-relaxed text-[15px]">
                                {review.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
