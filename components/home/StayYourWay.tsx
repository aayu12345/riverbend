"use client";

import { motion } from "framer-motion";
import { Briefcase, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function StayYourWay() {
    return (
        <section className="py-24 bg-[#F9F8F6] border-t border-[#0F172A]/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-5xl md:text-6xl text-[#0F172A] mb-6">
                        Stay Your Way
                    </h2>
                    <p className="text-[#0F172A]/80 max-w-xl mx-auto text-lg">
                        Whether you&apos;re here to close a deal or open a bottle of wine, our spaces sustain your lifestyle.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
                    {/* Business */}
                    <div className="bg-[#0F172A] text-[#F9F8F6] p-12 relative overflow-hidden group">
                        <div className="relative z-10">
                            <Briefcase className="w-12 h-12 mb-6 opacity-90" strokeWidth={1} />
                            <h3 className="font-serif text-3xl mb-4">For Business</h3>
                            <p className="opacity-80 mb-8 leading-relaxed">
                                Superfast Wi-Fi, dedicated workspaces, and Nespresso machines to fuel your productivity. Central locations put you minutes from the City.
                            </p>
                            <Button variant="outline" className="border-[#F9F8F6] text-[#F9F8F6] hover:bg-[#F9F8F6] hover:text-[#0F172A] uppercase tracking-widest text-xs h-12 px-8">
                                Corporate Rates
                            </Button>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F9F8F6]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    </div>

                    {/* Leisure */}
                    <div className="bg-white p-12 border border-[#0F172A]/10 relative overflow-hidden group">
                        <div className="relative z-10">
                            <Coffee className="w-12 h-12 mb-6 text-[#0F172A] opacity-90" strokeWidth={1} />
                            <h3 className="font-serif text-3xl mb-4 text-[#0F172A]">For Leisure</h3>
                            <p className="text-[#0F172A]/80 mb-8 leading-relaxed">
                                Fully equipped kitchens, luxury toiletries, and space to breathe. Experience London like a local in our curated neighborhood homes.
                            </p>
                            <Button className="bg-[#0F172A] text-[#F9F8F6] hover:bg-[#0F172A]/90 uppercase tracking-widest text-xs h-12 px-8">
                                Explore Locations
                            </Button>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0F172A]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    </div>
                </div>
            </div>
        </section>
    );
}
