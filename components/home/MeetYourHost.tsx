"use client";

import { motion } from "framer-motion";

export default function MeetYourHost() {
    return (
        <section className="py-24 bg-alabaster border-t border-charcoal/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 max-w-6xl mx-auto">

                    {/* Image Column — replace the div below with an <Image> when Steve's photo is ready */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-5/12 relative aspect-[3/4] rounded-sm overflow-hidden bg-charcoal/5 flex flex-col items-center justify-center gap-6"
                    >
                        {/* Elegant initials placeholder until Steve's real photo is provided */}
                        <div className="w-36 h-36 rounded-full border-2 border-charcoal/20 bg-charcoal/10 flex items-center justify-center">
                            <span className="font-serif text-6xl text-charcoal/40 italic select-none">SC</span>
                        </div>
                        <p className="text-charcoal/35 text-xs uppercase tracking-[0.25em] font-medium">Photo Coming Soon</p>
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
                                Steve is a Londoner born and bred, with a genuine love for the city and its neighbourhoods. Having lived in London all his life, he knows the area inside out and is always happy to share local tips — from where to eat and drink, to the easiest ways to get around and the spots worth making time for.
                            </p>
                            <p>
                                Steve works full-time in property and has been welcoming guests into his homes for over 20 years. He takes pride in running well-maintained, comfortable spaces and in being a responsive, reliable host. Whether guests are visiting for work, a short break, or a longer stay, he aims to make the experience straightforward, relaxed, and well looked after from start to finish.
                            </p>
                            <p>
                                Easy-going and accommodating by nature, Steve believes the best stays come from feeling at home — with the reassurance that everything is being handled professionally in the background.
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
