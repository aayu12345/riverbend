"use client";

import { motion } from "framer-motion";
import { ShoppingBag, TreePine, Music, TrainFront, UtensilsCrossed, Heart } from "lucide-react";
import Image from "next/image";

export default function ArmingerRoad() {
    return (
        <section className="py-24 bg-[#F9F8F6] border-t border-[#0F172A]/5">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#C5A087] uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                            Your Neighbourhood
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#0F172A] mb-8 leading-snug">
                            Welcome to <br /> <span className="italic text-[#C5A087]">Arminger Road</span>
                        </h2>
                        <p className="text-[#0F172A]/80 font-light leading-relaxed text-lg max-w-3xl mx-auto">
                            A quiet residential street in the heart of Shepherd’s Bush, offering the perfect balance of calm surroundings and instant access to West London’s vibrant energy.
                        </p>
                    </motion.div>
                </div>

                {/* Alternating Content Sections */}
                <div className="space-y-20">

                    {/* Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
                    >
                        <div className="w-16 h-16 shrink-0 rounded-full bg-[#0F172A] flex items-center justify-center text-[#F9F8F6] shadow-lg">
                            <ShoppingBag className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl text-[#0F172A] mb-4">Shopping & Dining</h3>
                            <p className="text-[#0F172A]/70 font-light leading-relaxed mb-4">
                                Steps away from Westfield London, Europe’s landmark shopping destination, featuring 300+ shops and dozens of luxury eateries.
                            </p>
                            <p className="text-[#0F172A]/70 font-light italic text-sm">
                                The ultimate hub for retail and entertainment without the travel.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
                    >
                        <div className="w-16 h-16 shrink-0 rounded-full bg-[#0F172A] flex items-center justify-center text-[#F9F8F6] shadow-lg">
                            <TreePine className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl text-[#0F172A] mb-4">Green Space & Local Character</h3>
                            <p className="text-[#0F172A]/70 font-light leading-relaxed mb-4">
                                Moments from Shepherd’s Bush Green and the historic Shepherd’s Bush Market, famous for global street food and fresh produce.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
                    >
                        <div className="w-16 h-16 shrink-0 rounded-full bg-[#0F172A] flex items-center justify-center text-[#F9F8F6] shadow-lg">
                            <Music className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl text-[#0F172A] mb-4">Entertainment & Culture</h3>
                            <p className="text-[#0F172A]/70 font-light leading-relaxed mb-4">
                                Experience world-class live music at the <strong>O2 Shepherd’s Bush Empire</strong> or contemporary theatre at the acclaimed <strong>Bush Theatre</strong>.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
                    >
                        <div className="w-16 h-16 shrink-0 rounded-full bg-[#0F172A] flex items-center justify-center text-[#F9F8F6] shadow-lg">
                            <TrainFront className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl text-[#0F172A] mb-4">Excellent Transport Links</h3>
                            <p className="text-[#0F172A]/70 font-light leading-relaxed mb-4">
                                Outstanding connectivity via the Central Line and Overground. Reach Oxford Street, Notting Hill, and the West End in minutes.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
                    >
                        <div className="w-16 h-16 shrink-0 rounded-full bg-[#0F172A] flex items-center justify-center text-[#F9F8F6] shadow-lg">
                            <UtensilsCrossed className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl text-[#0F172A] mb-4">Local Food Scene</h3>
                            <p className="text-[#0F172A]/70 font-light leading-relaxed">
                                A diverse landscape of independent cafés, artisan brunch spots, and international restaurants right at your doorstep.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Drone Photo Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <div className="text-center mb-10">
                        <span className="text-[#C5A087] uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Aerial Views</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-[#0F172A]">
                            Steps From <span className="italic text-[#C5A087]">Westfield London</span>
                        </h3>
                        <p className="text-[#0F172A]/60 font-light mt-4 max-w-lg mx-auto">
                            Landmark shopping, dining, and lifestyle destinations sit right on your doorstep.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 -mx-4 md:-mx-8 lg:-mx-16">
                        {[
                            { src: "/images/drone/DJI_20260214102637_0531_D.jpg", caption: "Westfield & Shepherd's Bush" },
                            { src: "/images/drone/DJI_20260214102745_0532_D.jpg", caption: "West London Skyline" },
                            { src: "/images/drone/DJI_20260214102834_0533_D.jpg", caption: "The Neighbourhood" },
                        ].map((photo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative aspect-[4/3] overflow-hidden group"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.caption}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
                                <span className="absolute bottom-4 left-4 text-white text-xs uppercase tracking-widest font-medium opacity-90">
                                    {photo.caption}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Wrap-up */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-white border border-[#0F172A]/10 p-10 md:p-14 text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A087] to-transparent opacity-50"></div>
                    <Heart className="w-10 h-10 mx-auto text-[#C5A087] mb-6" strokeWidth={1.5} />
                    <h3 className="font-serif text-3xl md:text-4xl text-[#0F172A] mb-8">Why Guests Love Staying Here</h3>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10 max-w-3xl mx-auto">
                        <span className="px-4 py-2 bg-[#F9F8F6] border border-[#0F172A]/10 rounded-full text-sm font-medium text-[#0F172A]/80">Quiet residential feel</span>
                        <span className="px-4 py-2 bg-[#F9F8F6] border border-[#0F172A]/10 rounded-full text-sm font-medium text-[#0F172A]/80">Walk to major attractions</span>
                        <span className="px-4 py-2 bg-[#F9F8F6] border border-[#0F172A]/10 rounded-full text-sm font-medium text-[#0F172A]/80">Strong transport</span>
                    </div>
                    <p className="text-[#0F172A]/70 font-light leading-relaxed text-lg max-w-2xl mx-auto italic">
                        "Arminger Road offers guests the convenience of central London with the comfort of a neighbourhood setting."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
