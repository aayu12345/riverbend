"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MeetYourHost() {
    return (
        <section className="py-24 bg-alabaster border-t border-charcoal/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 max-w-6xl mx-auto">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-5/12 relative aspect-[3/4] rounded-sm overflow-hidden"
                    >
                        <Image
                            src="/images/steve_cogan.jpg"
                            alt="Steve Cogan"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-7/12"
                    >
                        <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                            Meet Your Host
                        </span>

                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8">
                            Steve <span className="italic text-copper">Cogan</span>
                        </h2>

                        <div className="space-y-6 text-charcoal/80 font-light leading-relaxed text-lg">
                            <p>
                                Steve is a Londoner born and bred, with a genuine love for the city. Having lived here all his life, he knows the area inside out — from hidden culinary gems to the easiest ways to navigate the city.
                            </p>
                            <p>
                                With over 20 years of experience in property and hospitality, Steve takes pride in offering well-maintained, premium spaces. He believes the best stays come from feeling at home, with professional care handled seamlessly in the background.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-charcoal/10">
                            <p className="font-serif text-2xl text-charcoal italic">"The best stays come from feeling at home."</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
