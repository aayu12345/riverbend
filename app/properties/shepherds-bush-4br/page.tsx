"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users, Bed, Bath, Wifi, Utensils, Tv, Shirt,
    MapPin, Train, ShoppingBag, ChevronLeft, ChevronRight,
    X, Star, Coffee, CheckCircle2, Phone, Mail
} from "lucide-react";
import Link from "next/link";

const allPhotos = Array.from({ length: 39 }, (_, i) => `/images/ff/${i + 1}.jpg`);

const features = [
    { icon: Bed, title: "Comfortable Bedrooms", desc: "Premium high thread count fresh white linen for a restful night after a long day of sightseeing." },
    { icon: Bath, title: "Modern Bathroom", desc: "Bright and clean bathroom with a large bath — ideal for a relaxing bubble bath after a long day." },
    { icon: Tv, title: "Sociable Living Area", desc: "Comfortable sofas, an extra-large television, and a handy dining table perfect for kicking back and relaxing." },
    { icon: Utensils, title: "Well Equipped Kitchen", desc: "Separate kitchen with modern appliances and plenty of pots, pans and crockery for cooking at home." },
    { icon: Wifi, title: "Superfast Wi-Fi", desc: "Super-fast Wi-Fi perfect for streaming your favourite films or remote working from home." },
    { icon: Shirt, title: "Long Stays Welcome", desc: "Iron, ironing board, kitchen equipment, and full on-site laundry facilities available for longer stays." },
];

const highlights = [
    "5-minute walk to Westfield Shopping Centre",
    "Over 1,000 bars and restaurants within 5–10 minutes walk",
    "Close proximity to Shepherd's Bush station",
    "Central Line, Overground, and National Rail links nearby",
    "Fresh linen & towels included",
    "Entire apartment — exclusive use",
];

export default function PropertyDetail() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const allPhotosRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({ name: "", email: "", checkin: "", checkout: "", guests: "1", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleShowAllPhotos = () => {
        setShowAllPhotos(true);
        setTimeout(() => {
            allPhotosRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const openLightbox = (idx: number) => { setLightboxIndex(idx); setLightboxOpen(true); };
    const closeLightbox = () => setLightboxOpen(false);
    const prevPhoto = () => setLightboxIndex(i => (i - 1 + allPhotos.length) % allPhotos.length);
    const nextPhoto = () => setLightboxIndex(i => (i + 1) % allPhotos.length);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Booking Enquiry — Shepherd's Bush 4BR Flat");
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nGuests: ${formData.guests}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:stevecogan5@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-[#F9F8F6]">
            <Navbar />

            {/* Hero Photo Grid - responsive */}
            {/* Mobile: 1 main + 2 below. Desktop: Airbnb-style 2+4 grid */}
            <div className="pt-20">
                {/* Mobile layout */}
                <div className="md:hidden flex flex-col gap-1">
                    <div className="relative h-[55vw] min-h-[220px] cursor-pointer overflow-hidden" onClick={() => openLightbox(0)}>
                        <Image src={allPhotos[0]} alt="Main photo" fill className="object-cover" sizes="100vw" />
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                        {allPhotos.slice(1, 3).map((photo, idx) => (
                            <div key={idx} className="relative aspect-[4/3] cursor-pointer overflow-hidden" onClick={() => openLightbox(idx + 1)}>
                                <Image src={photo} alt={`Photo ${idx + 2}`} fill className="object-cover" sizes="50vw" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[70vh]">
                    <div className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden" onClick={() => openLightbox(0)}>
                        <Image src={allPhotos[0]} alt="Shepherd's Bush flat main" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="50vw" />
                    </div>
                    {allPhotos.slice(1, 5).map((photo, idx) => (
                        <div key={idx} className="relative cursor-pointer overflow-hidden" onClick={() => openLightbox(idx + 1)}>
                            <Image src={photo} alt={`Interior ${idx + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
                        </div>
                    ))}
                </div>

                <div className="container mx-auto px-4 md:px-8 mt-3 flex justify-end">
                    <button
                        onClick={handleShowAllPhotos}
                        className="bg-white border border-[#0F172A]/20 text-[#0F172A] text-xs uppercase tracking-widest font-bold px-6 py-3 hover:bg-[#0F172A] hover:text-white transition-colors duration-300 shadow-sm"
                    >
                        Show All {allPhotos.length} Photos
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <section className="container mx-auto px-4 md:px-8 py-14">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left — Property Info */}
                    <div className="flex-1">
                        {/* Title */}
                        <div className="mb-8 pb-8 border-b border-[#0F172A]/10">
                            <div className="flex items-center gap-2 text-[#C5A087] text-xs uppercase tracking-[0.2em] font-bold mb-3">
                                <MapPin className="w-3 h-3" /> Shepherd's Bush, London
                            </div>
                            <h1 className="font-serif text-4xl md:text-5xl text-[#0F172A] mb-6 leading-tight">
                                Shepherd's Bush 4BR Flat<br />
                                <span className="italic text-[#C5A087]">Sleeps 8 · Near Westfield</span>
                            </h1>
                            <div className="flex flex-wrap gap-6 text-[#0F172A]/60 text-sm">
                                <span className="flex items-center gap-2"><Users className="w-4 h-4" /> 8 Guests</span>
                                <span className="flex items-center gap-2"><Bed className="w-4 h-4" /> 4 Bedrooms</span>
                                <span className="flex items-center gap-2"><Bed className="w-4 h-4" /> 5 Beds</span>
                                <span className="flex items-center gap-2"><Bath className="w-4 h-4" /> 2 Bathrooms</span>
                            </div>
                        </div>

                        {/* About This Space */}
                        <div className="mb-10 pb-10 border-b border-[#0F172A]/10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-5">About This Space</h2>
                            <div className="space-y-4 text-[#0F172A]/75 font-light leading-relaxed">
                                <p>Premium 4-bedroom home in the heart of Shepherd's Bush, perfectly setup for groups of 8. Just a short walk from Westfield London with elite transport links to the entire city.</p>
                                <p>Book direct for the best rates guaranteed. Our spacious apartment features elegant interiors, high-speed Wi-Fi, and total privacy for your London stay.</p>
                            </div>
                        </div>

                        {/* Top Features */}
                        <div className="mb-10 pb-10 border-b border-[#0F172A]/10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-8">What This Place Offers</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((f, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#F9F8F6] border border-[#0F172A]/10 flex items-center justify-center shrink-0">
                                            <f.icon className="w-4 h-4 text-[#C5A087]" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#0F172A] text-sm mb-1">{f.title}</p>
                                            <p className="text-[#0F172A]/60 text-sm font-light leading-relaxed">{f.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Top Highlights */}
                        <div className="mb-10 pb-10 border-b border-[#0F172A]/10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-6">Top Highlights</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[#0F172A]/80 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#C5A087] shrink-0" strokeWidth={1.5} />
                                        {h}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Local Attractions */}
                        <div className="mb-10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-6">Local Attractions & Guest Access</h2>
                            <div className="space-y-6 text-[#0F172A]/75 font-light leading-relaxed">
                                <div className="flex gap-4">
                                    <ShoppingBag className="w-5 h-5 text-[#C5A087] mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <div>
                                        <strong className="text-[#0F172A] font-medium block mb-1">Westfield Shepherd's Bush</strong>
                                        5-minute walk to Europe's largest indoor shopping centre with diverse dining options.
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Coffee className="w-5 h-5 text-[#C5A087] mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <div>
                                        <strong className="text-[#0F172A] font-medium block mb-1">Dining Nearby</strong>
                                        Proud Mary's (breakfast), The Queen Adelaide (pub), Salt Yard (tapas), Mandaloun (Lebanese) — all within walking distance.
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Train className="w-5 h-5 text-[#C5A087] mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <div>
                                        <strong className="text-[#0F172A] font-medium block mb-1">Transport Links</strong>
                                        Central Line, London Overground & National Rail from Shepherd's Bush. Easy access to Oxford Circus, West End, and Heathrow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Sticky Enquiry Form */}
                    <div className="lg:w-[380px] shrink-0">
                        <div className="sticky top-28">
                            <div className="bg-white border border-[#0F172A]/10 shadow-xl p-8">
                                <div className="mb-6">
                                    <p className="text-[#0F172A]/60 text-xs uppercase tracking-widest font-bold mb-2">Entire Apartment · Exclusive Use</p>
                                    <h3 className="font-serif text-2xl text-[#0F172A]">Send an Enquiry</h3>
                                    <p className="text-[#0F172A]/60 text-sm font-light mt-2">Fill in the form below and Steve will get back to you promptly.</p>
                                </div>

                                {submitted ? (
                                    <div className="text-center py-8">
                                        <CheckCircle2 className="w-12 h-12 text-[#C5A087] mx-auto mb-4" />
                                        <p className="font-serif text-xl text-[#0F172A] mb-2">Enquiry Sent!</p>
                                        <p className="text-[#0F172A]/60 text-sm font-light">Steve will be in touch shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[#0F172A]/60 text-xs uppercase tracking-widest mb-1.5 font-medium">Check In</label>
                                                <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} required className="w-full border border-[#0F172A]/20 px-3 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#C5A087] bg-transparent" />
                                            </div>
                                            <div>
                                                <label className="block text-[#0F172A]/60 text-xs uppercase tracking-widest mb-1.5 font-medium">Check Out</label>
                                                <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} required className="w-full border border-[#0F172A]/20 px-3 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#C5A087] bg-transparent" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[#0F172A]/60 text-xs uppercase tracking-widest mb-1.5 font-medium">Guests</label>
                                            <select name="guests" value={formData.guests} onChange={handleChange} className="w-full border border-[#0F172A]/20 px-3 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#C5A087] bg-transparent">
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>)}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-[#0F172A]/60 text-xs uppercase tracking-widest mb-1.5 font-medium">Your Name</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full name" className="w-full border border-[#0F172A]/20 px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#C5A087] bg-transparent" />
                                        </div>

                                        <div>
                                            <label className="block text-[#0F172A]/60 text-xs uppercase tracking-widest mb-1.5 font-medium">Email Address</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="w-full border border-[#0F172A]/20 px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#C5A087] bg-transparent" />
                                        </div>

                                        <div>
                                            <label className="block text-[#0F172A]/60 text-xs uppercase tracking-widest mb-1.5 font-medium">Message</label>
                                            <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Any questions or special requests?" className="w-full border border-[#0F172A]/20 px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-[#0F172A]/30 focus:outline-none focus:border-[#C5A087] bg-transparent resize-none" />
                                        </div>

                                        <button type="submit" className="w-full bg-[#0F172A] text-[#F9F8F6] py-5 text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#C5A087] transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                            Send Enquiry
                                        </button>
                                    </form>
                                )}

                                {/* Direct contact */}
                                <div className="mt-6 pt-6 border-t border-[#0F172A]/10 space-y-2">
                                    <p className="text-[#0F172A]/50 text-xs uppercase tracking-widest font-medium mb-3">Or contact Steve directly</p>
                                    <a href="tel:+447939200486" className="flex items-center gap-2 text-[#0F172A] text-sm hover:text-[#C5A087] transition-colors">
                                        <Phone className="w-4 h-4" strokeWidth={1.5} /> +44 7939 200486
                                    </a>
                                    <a href="mailto:stevecogan5@gmail.com" className="flex items-center gap-2 text-[#0F172A] text-sm hover:text-[#C5A087] transition-colors">
                                        <Mail className="w-4 h-4" strokeWidth={1.5} /> stevecogan5@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* All Photos Grid */}
            {showAllPhotos && (
                <section ref={allPhotosRef} className="container mx-auto px-4 md:px-8 pb-20 pt-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-serif text-3xl text-[#0F172A]">All Photos</h2>
                        <button onClick={() => setShowAllPhotos(false)} className="text-[#0F172A]/50 hover:text-[#0F172A] text-xs uppercase tracking-widest flex items-center gap-2">
                            <X className="w-4 h-4" /> Collapse
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {allPhotos.map((photo, idx) => (
                            <div key={idx} className="relative aspect-[4/3] cursor-pointer overflow-hidden" onClick={() => openLightbox(idx)}>
                                <Image src={photo} alt={`Photo ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <Footer />

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-6 right-6 text-white/70 hover:text-white">
                            <X className="w-8 h-8" />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); prevPhoto(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white">
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <div className="relative w-full max-w-5xl h-[80vh] mx-16" onClick={e => e.stopPropagation()}>
                            <Image src={allPhotos[lightboxIndex]} alt={`Photo ${lightboxIndex + 1}`} fill className="object-contain" />
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); nextPhoto(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white">
                            <ChevronRight className="w-10 h-10" />
                        </button>
                        <div className="absolute bottom-6 text-white/50 text-sm">
                            {lightboxIndex + 1} / {allPhotos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

