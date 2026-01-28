"use client";

import { motion } from "framer-motion";
import { Trophy, RefreshCw, Bell, Moon } from "lucide-react";

const features = [
    {
        icon: Trophy,
        title: "How wonderful",
        description: "We delight our members with 10% off all stays"
    },
    {
        icon: RefreshCw,
        title: "Forever flexible",
        description: "Enjoy flexible booking and free cancellation options"
    },
    {
        icon: Bell,
        title: "At your service",
        description: "Our reception team are on hand to make your wish a reality"
    },
    {
        icon: Moon,
        title: "Stay longer",
        description: "Relish 20% off stays over 7 nights"
    }
];

export default function FeaturesRow() {
    return (
        <section className="py-24 bg-[#F9F8F6]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="mb-6 relative">
                                <feature.icon
                                    strokeWidth={1}
                                    className="w-12 h-12 text-[#0F172A]"
                                />
                                {/* Decorative underline/accent could go here */}
                            </div>
                            <h3 className="font-serif italic text-2xl text-[#0F172A] mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-[#0F172A]/80 text-sm leading-relaxed max-w-[200px]">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
