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
                            Arminger Road is a quiet residential street in the heart of Shepherd’s Bush, offering guests the perfect balance of calm surroundings and fast access to some of West London’s most vibrant spots.
                        </p>
                    </motion.div>
                </div>

                {/* Alternating Content Sections */}
                <div className="space-y-24">

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
                            <h3 className="font-serif text-3xl text-[#0F172A] mb-4">World-Class Shopping & Dining</h3>
                            <p className="text-[#0F172A]/70 font-light leading-relaxed mb-4">
                                Just a short walk away is Westfield London, one of Europe’s largest shopping centres. Guests can enjoy:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-3 text-[#0F172A]/80 font-medium text-sm mb-4">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087]"></div> 300+ shops (high street & luxury)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087]"></div> Dozens of restaurants and cafés</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087]"></div> Cinema complex</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087]"></div> Late-night dining options</li>
                            </ul>
                            <p className="text-[#0F172A]/70 font-light italic text-sm">
                                It’s ideal for retail therapy, rainy-day plans, or evening meals without travelling far.
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
                                A few minutes away is Shepherd’s Bush Green, a large open park perfect for morning walks or runs, relaxing with coffee, or picnics in warmer months. Right next to it is Shepherd’s Bush Market, known for:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-3 text-[#0F172A]/80 font-medium text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087]"></div> Independent food stalls</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087]"></div> Fresh produce</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087]"></div> Global street food</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087]"></div> A proper local London atmosphere</li>
                            </ul>
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
                                Music and event lovers will appreciate being close to <strong>O2 Shepherd’s Bush Empire</strong>, a historic live music venue hosting well-known artists and comedy shows throughout the year.
                            </p>
                            <p className="text-[#0F172A]/70 font-light leading-relaxed">
                                For theatre and live performance, <strong>Bush Theatre</strong> is nearby, known for contemporary productions and emerging writers.
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
                                Shepherd’s Bush offers outstanding connectivity. Guests can explore London easily without needing a car:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-3 text-[#0F172A]/80 font-medium text-sm text-balance">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087] shrink-0"></div> Shepherd’s Bush station (Central Line & Overground)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087] shrink-0"></div> Easy access to Oxford Street in ~15 minutes</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087] shrink-0"></div> Direct routes to Notting Hill, Marble Arch, West End</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C5A087] shrink-0"></div> Quick connections to Heathrow via transport links</li>
                            </ul>
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
                            <h3 className="font-serif text-3xl text-[#0F172A] mb-4">Great Local Food Scene</h3>
                            <p className="text-[#0F172A]/70 font-light leading-relaxed">
                                The area is packed with independent cafés, brunch spots, Middle Eastern restaurants, traditional pubs, and international cuisine — all within walking distance. Whether guests want quick bites or relaxed evening dining, they won’t need to travel far.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Drone Photo Gallery — Aerial Views Near Westfield */}
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
                        <p className="text-[#0F172A]/60 font-light mt-4 max-w-xl mx-auto">
                            Our apartments sit right in the heart of this world-famous neighbourhood — Europe's landmark shopping, dining, and lifestyle destination on your doorstep.
                        </p>
                    </div>

                    {/* Full-width 3-panel drone grid */}
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
                                {/* Gradient overlay with caption */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
                                <span className="absolute bottom-4 left-4 text-white text-xs uppercase tracking-widest font-medium opacity-90">
                                    {photo.caption}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final Wrap-up Box */}
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
                        <span className="px-4 py-2 bg-[#F9F8F6] border border-[#0F172A]/10 rounded-full text-sm font-medium text-[#0F172A]/80 hover:bg-[#0F172A] hover:text-[#F9F8F6] transition-colors">Quiet residential feel</span>
                        <span className="px-4 py-2 bg-[#F9F8F6] border border-[#0F172A]/10 rounded-full text-sm font-medium text-[#0F172A]/80 hover:bg-[#0F172A] hover:text-[#F9F8F6] transition-colors">Walk to major attractions</span>
                        <span className="px-4 py-2 bg-[#F9F8F6] border border-[#0F172A]/10 rounded-full text-sm font-medium text-[#0F172A]/80 hover:bg-[#0F172A] hover:text-[#F9F8F6] transition-colors">Strong transport</span>
                        <span className="px-4 py-2 bg-[#F9F8F6] border border-[#0F172A]/10 rounded-full text-sm font-medium text-[#0F172A]/80 hover:bg-[#0F172A] hover:text-[#F9F8F6] transition-colors">Authentic West London vibe</span>
                        <span className="px-4 py-2 bg-[#F9F8F6] border border-[#0F172A]/10 rounded-full text-sm font-medium text-[#0F172A]/80 hover:bg-[#0F172A] hover:text-[#F9F8F6] transition-colors">Ideal base for trips</span>
                    </div>

                    <p className="text-[#0F172A]/70 font-light leading-relaxed text-lg max-w-2xl mx-auto italic">
                        "Arminger Road offers guests the convenience of central London with the comfort of a neighbourhood setting — making it a practical and enjoyable base for any stay."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

