"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowUpRight, Bed, Bath, Users } from "lucide-react";
import Link from "next/link";

const properties = [
    {
        id: "shepherds-bush",
        title: "Shepherd’s Bush 4BR Family Flat",
        location: "Shepherd's Bush, London",
        price: "From £350",
        description: "A spacious and stylish 4-bedroom apartment located near Westfield. Perfect for large families seeking a modern base.",
        stats: { guests: 8, bedrooms: 4, baths: 2 },
        image: "/images/living.png",
        link: "https://www.airbnb.com/rooms/978967068931628151"
    },
    {
        id: "central-london",
        title: "Central London 3BR Urban Retreat",
        location: "Zone 1, Central London",
        price: "From £295",
        description: "A stylish and modern flat designed for families and business travelers. Steps away from rail links.",
        stats: { guests: 6, bedrooms: 3, baths: 1.5 },
        image: "/images/bedroom.png",
        link: "https://www.airbnb.com/rooms/1158514301371753415"
    },
    {
        id: "kensington-mews",
        title: "Historic Kensington Mews House",
        location: "Kensington, London",
        price: "From £450",
        description: "Experience true London heritage in this charming cobbled mews house. Features a private garage and sunlit terrace.",
        stats: { guests: 5, bedrooms: 3, baths: 2 },
        image: "/images/hero_london_victorian.png", // Reusing hero for variety
        link: "#"
    },
    {
        id: "notting-hill",
        title: "Notting Hill Garden Studio",
        location: "Notting Hill, London",
        price: "From £180",
        description: "A romantic hideaway for couples. Compact, chic, and featuring direct access to a private communal garden square.",
        stats: { guests: 2, bedrooms: 1, baths: 1 },
        image: "/images/sauna.png", // Using existing placeholder
        link: "#"
    }
];

export default function Properties() {
    return (
        <section id="properties" className="py-24 md:py-32 bg-alabaster text-charcoal">
            <div className="container mx-auto px-4 md:px-8">

                {/* Minimal Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                            Our Collection
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-none">
                            Featured <span className="italic text-copper">Stays</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/properties">
                            <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none uppercase tracking-widest text-xs px-8">
                                View All Properties
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, idx) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="group bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Image Card */}
                            <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 mb-6">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-charcoal">
                                    {property.price} / night
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] uppercase tracking-widest text-charcoal/50 font-medium">
                                        {property.location}
                                    </span>
                                </div>
                                <h3 className="font-serif text-xl md:text-2xl mb-4 leading-tight group-hover:text-copper transition-colors">
                                    {property.title}
                                </h3>

                                <div className="flex gap-4 text-charcoal/60 text-xs border-y border-charcoal/5 py-3 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5" />
                                        <span>{property.stats.guests}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Bed className="w-3.5 h-3.5" />
                                        <span>{property.stats.bedrooms}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Bath className="w-3.5 h-3.5" />
                                        <span>{property.stats.baths}</span>
                                    </div>
                                </div>

                                <a href={property.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-charcoal hover:text-copper transition-colors gap-2">
                                    View Details <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="md:hidden mt-12 text-center">
                    <Link href="/properties">
                        <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-none uppercase tracking-widest text-xs px-8 h-12 w-full">
                            View All Properties
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
