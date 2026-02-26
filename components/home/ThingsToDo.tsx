"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Map, Music, TreePine, UtensilsCrossed, TrainFront } from "lucide-react";

const activities = [
    {
        title: "Shopping and Entertainment",
        desc: "Westfield London, one of Europe’s largest shopping centres, with hundreds of shops, restaurants, cafés, cinemas, and leisure options. Unique experiences and entertainment venues within walking distance.",
        icon: ShoppingBag
    },
    {
        title: "Markets and Local Culture",
        desc: "Shepherd’s Bush Market, a historic street market offering international food, fresh produce, and local shopping. A vibrant neighbourhood with independent shops and cafés.",
        icon: Map
    },
    {
        title: "Live Music and Events",
        desc: "O2 Shepherd’s Bush Empire, a well-known venue hosting concerts and live events. Bush Hall, a popular space for live music and performances.",
        icon: Music
    },
    {
        title: "Outdoor Spaces",
        desc: "Shepherd’s Bush Green, ideal for relaxing, walking, or enjoying the local atmosphere. Nearby parks and green spaces for quiet breaks from the city.",
        icon: TreePine
    },
    {
        title: "Food and Nightlife",
        desc: "A wide variety of restaurants, street food, pubs, and bars catering to all tastes. Lively evenings with plenty of dining and social options close by.",
        icon: UtensilsCrossed
    },
    {
        title: "Easy Access to Central London",
        desc: "Excellent transport connections making it easy to reach major attractions, business districts, and sightseeing spots across London.",
        icon: TrainFront
    }
];

export default function ThingsToDo() {
    return (
        <section className="py-24 bg-[#0F172A] text-[#F9F8F6]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#C5A087] uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                            Explore The Area
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">
                            Things to Do Near <br /> <span className="italic text-[#C5A087]">Shepherd’s Bush</span>
                        </h2>
                        <p className="text-[#F9F8F6]/80 font-light leading-relaxed text-lg">
                            Shepherd’s Bush is a lively area packed with shopping, entertainment, food, and great transport links.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {activities.map((activity, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="mb-6 inline-block">
                                <activity.icon strokeWidth={1.5} className="w-8 h-8 text-[#C5A087] group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">{activity.title}</h3>
                            <p className="text-[#F9F8F6]/70 text-sm leading-relaxed font-light">
                                {activity.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
