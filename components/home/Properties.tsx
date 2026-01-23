"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowUpRight, Bed, Bath, Users } from "lucide-react";

const properties = [
    {
        id: "shepherds-bush",
        title: "Shepherd’s Bush 4BR Family Flat",
        description: "A spacious and stylish 4-bedroom apartment located near Westfield. Featuring large windows, elegant bathrooms, and a sociable living area, this home is perfect for large families or groups seeking a modern London base.",
        stats: {
            guests: 8,
            bedrooms: 4,
            baths: 2
        },
        image: "/images/living.png", // Placeholder
        link: "https://www.airbnb.com/rooms/978967068931628151"
    },
    {
        id: "central-london",
        title: "Central London 3BR Urban Retreat",
        description: "A stylish and modern flat designed for families and business travelers. Steps away from rail links, this home features a luxury ensuite, sleek kitchen, and room-darkening blinds for a restful stay in the heart of the city.",
        stats: {
            guests: 6,
            bedrooms: 3,
            baths: 1.5
        },
        image: "/images/bedroom.png", // Placeholder
        link: "https://www.airbnb.com/rooms/1158514301371753415"
    }
];

export default function Properties() {
    return (
        <section id="properties" className="py-24 md:py-32 bg-white text-charcoal">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                        Our Collection
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-charcoal leading-[1.1] mb-8">
                        Curated London <br /> <span className="italic text-copper">Stays.</span>
                    </h2>
                    <div className="w-24 h-[1px] bg-charcoal/10 mx-auto" />
                </div>

                {/* Properties Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {properties.map((property, idx) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            {/* Image Card */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-8 bg-alabaster">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-charcoal">
                                    London, UK
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-serif text-2xl md:text-3xl max-w-xs leading-tight">
                                        {property.title}
                                    </h3>
                                    <a
                                        href={property.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-colors duration-300"
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className="flex gap-6 text-charcoal/60 text-sm border-y border-charcoal/10 py-4">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        <span>{property.stats.guests} Guests</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bed className="w-4 h-4" />
                                        <span>{property.stats.bedrooms} Beds</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="w-4 h-4" />
                                        <span>{property.stats.baths} Baths</span>
                                    </div>
                                </div>

                                <p className="text-charcoal/70 font-light leading-relaxed">
                                    {property.description}
                                </p>

                                <a href={property.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <Button variant="outline" className="w-full md:w-auto border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors">
                                        View on Airbnb
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
