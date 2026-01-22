"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { Calendar } from "lucide-react";

export default function BookPage() {
    return (
        <main className="min-h-screen bg-alabaster selection:bg-copper selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 md:pt-48 md:pb-32 container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="text-copper uppercase tracking-[0.2em] text-xs font-bold mb-6 block">
                        Reserve Your Stay
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-8">
                        Your Sanctuary <br /> <span className="italic text-copper">Awaits.</span>
                    </h1>
                    <p className="text-charcoal/70 text-lg font-light max-w-2xl mx-auto">
                        Select your dates below to begin your journey to Riverbend. We look forward to hosting you.
                    </p>
                </div>

                {/* Mock Booking Interface */}
                <div className="max-w-5xl mx-auto bg-white rounded-sm shadow-2xl border border-charcoal/5 overflow-hidden">
                    <div className="grid md:grid-cols-3">

                        {/* Visual Side */}
                        <div className="bg-charcoal text-white p-12 flex flex-col justify-between relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-serif text-3xl mb-4">Riverbend A-Frame</h3>
                                <div className="flex items-center gap-2 text-white/60 mb-8">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm uppercase tracking-wide">2 Night Minimum</span>
                                </div>
                                <div className="space-y-4 text-sm font-light text-white/80">
                                    <p>Check-in: 4:00 PM</p>
                                    <p>Check-out: 11:00 AM</p>
                                    <p>Occupancy: 4 Guests</p>
                                </div>
                            </div>
                            <div className="mt-12 relative z-10">
                                <span className="text-3xl font-serif">$350</span>
                                <span className="text-white/60 text-sm ml-2">/ night</span>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-copper/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        </div>

                        {/* Form Side */}
                        <div className="md:col-span-2 p-8 md:p-12">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-charcoal/60 font-bold">Check-in</label>
                                        <input type="date" className="w-full p-4 bg-alabaster border-none rounded-sm text-charcoal focus:ring-1 focus:ring-copper outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-charcoal/60 font-bold">Check-out</label>
                                        <input type="date" className="w-full p-4 bg-alabaster border-none rounded-sm text-charcoal focus:ring-1 focus:ring-copper outline-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-charcoal/60 font-bold">Guests</label>
                                    <select className="w-full p-4 bg-alabaster border-none rounded-sm text-charcoal focus:ring-1 focus:ring-copper outline-none appearance-none">
                                        <option>1 Guest</option>
                                        <option>2 Guests</option>
                                        <option>3 Guests</option>
                                        <option>4 Guests</option>
                                    </select>
                                </div>

                                <div className="pt-6">
                                    <Button className="w-full bg-copper text-white hover:bg-copper/90 py-6 text-xs uppercase tracking-widest">
                                        Check Availability
                                    </Button>
                                    <p className="text-center text-charcoal/40 text-xs mt-4">
                                        You won't be charged yet.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
