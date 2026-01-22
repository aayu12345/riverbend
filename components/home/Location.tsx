"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Location() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section id="location" ref={targetRef} className="py-24 md:py-32 bg-alabaster relative overflow-hidden">

            {/* Parallax Background Text */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none opacity-5">
                <motion.div style={{ x }} className="whitespace-nowrap">
                    <span className="text-[20vw] font-serif font-bold uppercase leading-none">
                        Location Location Location Location
                    </span>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-end">

                    {/* Floating Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 md:p-16 max-w-xl shadow-2xl border border-charcoal/5"
                    >
                        <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                            The Setting
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.1] mb-8">
                            Hidden in <br /> Plain Sight.
                        </h2>
                        <div className="w-16 h-[2px] bg-charcoal/10 mb-8" />
                        <p className="text-charcoal/70 text-lg leading-relaxed font-light mb-10">
                            Located just minutes from downtown Fennville and Saugatuck, yet completely secluded in nature. The best of both worlds awaits.
                        </p>
                        <Button className="bg-charcoal text-white hover:bg-copper transition-colors w-full md:w-auto">
                            Explore the Area
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
