"use client";

import { motion } from "framer-motion";
import { Crown, BedDouble, CheckCircle2, Footprints } from "lucide-react";

const benefits = [
    {
        subtitle: "Time to Take Your Time",
        title: "Delight in 20% off",
        icon: Crown,
    },
    {
        subtitle: "Membership Benefits",
        title: "10% off Every Stay",
        icon: BedDouble,
    },
    {
        subtitle: "Changed your mind?",
        title: "Free Cancellation",
        icon: CheckCircle2,
    },
    {
        subtitle: "Early saver",
        title: "Up to 25% off 3+ Nights",
        icon: Footprints,
    },
];

export default function Membership() {
    return (
        <section className="py-20 bg-[#F9F8F6] border-t border-[#0F172A]/5">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-16 md:pl-4">
                    <p className="font-serif italic text-xl text-[#0F172A] mb-2">Become a member</p>
                    <h2 className="font-serif text-5xl md:text-6xl text-[#0F172A] mb-4">
                        Join the <br /> Cogan&apos;s Circle
                    </h2>
                    <p className="text-[#0F172A] text-sm md:text-base tracking-wide">
                        We reserve the best rates for our friends, naturally
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group cursor-pointer"
                        >
                            <span className="font-serif italic text-[#0F172A] mb-2 text-lg">
                                {benefit.subtitle}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-serif text-[#0F172A] mb-6 leading-tight">
                                {benefit.title}
                            </h3>

                            {/* Icon Placeholder - mimicking the sketchy style with rotation/opacity */}
                            <div className="relative mt-auto">
                                <benefit.icon
                                    strokeWidth={1}
                                    className="w-24 h-24 text-[#0F172A] transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
