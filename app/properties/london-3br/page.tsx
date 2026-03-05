"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users, Bed, Bath, Wifi, Utensils, Tv, Shirt,
    MapPin, Train, ShoppingBag, ChevronLeft, ChevronRight,
    X, Coffee, CheckCircle2, Phone, Mail, Home, BriefcaseBusiness, Baby
} from "lucide-react";

const allPhotos = [
    "/images/ff/DSC01133.jpg", "/images/ff/DSC01136.jpg", "/images/ff/DSC01139.jpg",
    "/images/ff/DSC01142.jpg", "/images/ff/DSC01145.jpg", "/images/ff/DSC01148.jpg",
    "/images/ff/DSC01151.jpg", "/images/ff/DSC01154.jpg", "/images/ff/DSC01157.jpg",
    "/images/ff/DSC01160.jpg", "/images/ff/DSC01163.jpg", "/images/ff/DSC01169.jpg",
    "/images/ff/DSC01172.jpg", "/images/ff/DSC01175.jpg", "/images/ff/DSC01178.jpg",
    "/images/ff/DSC01181.jpg", "/images/ff/DSC01184.jpg", "/images/ff/DSC01187.jpg",
    "/images/ff/DSC01190.jpg", "/images/ff/DSC01193.jpg", "/images/ff/DSC01196.jpg",
    "/images/ff/DSC01199.jpg", "/images/ff/DSC01202.jpg", "/images/ff/DSC01205.jpg",
    "/images/ff/DSC01208.jpg", "/images/ff/DSC01211.jpg", "/images/ff/DSC01214.jpg",
    "/images/ff/DSC01217.jpg", "/images/ff/DSC01220.jpg", "/images/ff/DSC01223.jpg",
    "/images/ff/DSC01226.jpg", "/images/ff/DSC01229.jpg", "/images/ff/DSC01232.jpg",
    "/images/ff/DSC01235.jpg", "/images/ff/DSC01238.jpg", "/images/ff/DSC01239.jpg",
    "/images/ff/DSC01130.jpg",
];

const features = [
    { icon: Bed, title: "Comfortable Bedrooms", desc: "High-quality, crisp white linens in every bedroom designed for a restful night's sleep in a calm, cosy setting." },
    { icon: Bath, title: "Modern Bathroom", desc: "Fresh, bright, and spotless bathroom with a full-size bath — perfect for a relaxing soak after a busy day." },
    { icon: Tv, title: "Sociable Living Space", desc: "Inviting living area with sofas, a large TV, and a dining table — ideal for unwinding or enjoying meals together." },
    { icon: Utensils, title: "Fully Equipped Kitchen", desc: "Modern kitchen with appliances, cookware, and tableware — everything you need for easy home cooking." },
    { icon: Wifi, title: "Superfast Wi-Fi", desc: "High-speed WiFi for streaming, remote working, or planning your London adventures effortlessly." },
    { icon: Shirt, title: "Great for Longer Stays", desc: "Laundry facilities, iron, ironing board, and a fully equipped kitchen make extended stays comfortable." },
    { icon: Home, title: "Your Own Private Space", desc: "Exclusive use of the entire apartment — no sharing with other guests. Entirely yours to enjoy." },
    { icon: BriefcaseBusiness, title: "Business or Leisure", desc: "Perfectly suited for holidays and work trips alike. Well located for sightseeing, shopping, and commuting." },
];

const amenities = [
    "Hairdryer", "Washing machine", "Tumble dryer", "Towels & bed sheets",
    "Hangers & extra pillows", "Room-darkening blinds", "Iron", "Clothes storage",
    "Ethernet connection", "Smart TV", "Cot available", "Heating",
    "Smoke & CO alarm", "Dedicated workspace", "Fridge & freezer", "Microwave",
    "Dishwasher", "Oven & cooker", "Kettle & coffee maker", "Toaster",
    "Dining table", "Private entrance", "Back garden", "Outdoor furniture",
    "Smart lock (self check-in)", "Long-term stays allowed",
];

const bedrooms = [
    { name: "Bedroom 1", bed: "1 king bed" },
    { name: "Bedroom 2", bed: "1 double bed" },
    { name: "Bedroom 3", bed: "1 double bed" },
];

const highlights = [
    "5-minute walk to Westfield London",
    "Surrounded by restaurants, cafés, pubs & eateries",
    "Moments from Shepherd's Bush tube & transport links",
    "Private entrance & exclusive use",
    "Self check-in with smart lock",
    "Long-term stays welcome (28+ days)",
];

export default function PropertyDetailFF() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", checkin: "", checkout: "", guests: "1", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const openLightbox = (idx: number) => { setLightboxIndex(idx); setLightboxOpen(true); };
    const closeLightbox = () => setLightboxOpen(false);
    const prevPhoto = () => setLightboxIndex(i => (i - 1 + allPhotos.length) % allPhotos.length);
    const nextPhoto = () => setLightboxIndex(i => (i + 1) % allPhotos.length);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent("Booking Enquiry — Luxury London 3BR Flat Near Tube");
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nGuests: ${formData.guests}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:stevecogan5@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-[#F9F8F6]">
            <Navbar />

            {/* Hero Photo Grid */}
            <section className="pt-20">
                <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[50vh] md:h-[70vh]">
                    <div className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden" onClick={() => openLightbox(0)}>
                        <Image src={allPhotos[0]} alt="Luxury London 3BR main" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    {allPhotos.slice(1, 5).map((photo, idx) => (
                        <div key={idx} className="relative cursor-pointer overflow-hidden" onClick={() => openLightbox(idx + 1)}>
                            <Image src={photo} alt={`Interior ${idx + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
                <div className="container mx-auto px-4 md:px-8 mt-3 flex justify-end">
                    <button
                        onClick={() => setShowAllPhotos(true)}
                        className="bg-white border border-[#0F172A]/20 text-[#0F172A] text-xs uppercase tracking-widest font-bold px-6 py-3 hover:bg-[#0F172A] hover:text-white transition-colors duration-300 shadow-sm"
                    >
                        Show All {allPhotos.length} Photos
                    </button>
                </div>
            </section>

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
                                Luxury London 3BR Flat<br />
                                <span className="italic text-[#C5A087]">Near Tube Station · Westfield</span>
                            </h1>
                            <div className="flex flex-wrap gap-6 text-[#0F172A]/60 text-sm">
                                <span className="flex items-center gap-2"><Users className="w-4 h-4" /> 6 Guests</span>
                                <span className="flex items-center gap-2"><Bed className="w-4 h-4" /> 3 Bedrooms</span>
                                <span className="flex items-center gap-2"><Bed className="w-4 h-4" /> 3 Beds</span>
                                <span className="flex items-center gap-2"><Bath className="w-4 h-4" /> 1 Bathroom</span>
                            </div>
                        </div>

                        {/* About */}
                        <div className="mb-10 pb-10 border-b border-[#0F172A]/10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-5">About This Space</h2>
                            <div className="space-y-4 text-[#0F172A]/75 font-light leading-relaxed">
                                <p>Bright, stylish London retreat just moments from the Tube. Unpack, relax and explore the city with ease.</p>
                                <ul className="space-y-2 pl-4">
                                    {["Comfortable beds with crisp linens", "Fast Wi-Fi & dedicated workspace", "Fully equipped kitchen for easy meals", "Sparkling clean bathroom & fresh towels"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-[#C5A087] shrink-0" strokeWidth={1.5} />{item}</li>
                                    ))}
                                </ul>
                                <p>Book your hassle-free stay today and feel at home in the heart of London!</p>
                            </div>
                        </div>

                        {/* Sleeping Arrangements */}
                        <div className="mb-10 pb-10 border-b border-[#0F172A]/10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-6">Where You'll Sleep</h2>
                            <div className="grid grid-cols-3 gap-4">
                                {bedrooms.map((b, i) => (
                                    <div key={i} className="border border-[#0F172A]/10 p-5 bg-white">
                                        <Bed className="w-6 h-6 text-[#C5A087] mb-3" strokeWidth={1.5} />
                                        <p className="font-semibold text-[#0F172A] text-sm mb-1">{b.name}</p>
                                        <p className="text-[#0F172A]/60 text-xs font-light">{b.bed}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-10 pb-10 border-b border-[#0F172A]/10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-8">What This Place Offers</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {features.map((f, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }} className="flex gap-4 items-start">
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

                        {/* Full Amenities */}
                        <div className="mb-10 pb-10 border-b border-[#0F172A]/10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-6">All Amenities</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {amenities.map((a, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[#0F172A]/70 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A087] shrink-0"></div>{a}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-10 pb-10 border-b border-[#0F172A]/10">
                            <h2 className="font-serif text-2xl text-[#0F172A] mb-6">Top Nearby Highlights</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[#0F172A]/80 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#C5A087] shrink-0" strokeWidth={1.5} />{h}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Local Attractions */}
                        <div>
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
                                                {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>)}
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
                                        <button type="submit" className="w-full bg-[#0F172A] text-[#F9F8F6] py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C5A087] transition-colors duration-300">
                                            Send Enquiry
                                        </button>
                                    </form>
                                )}

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
                <section className="container mx-auto px-4 md:px-8 pb-20">
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

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-6 right-6 text-white/70 hover:text-white"><X className="w-8 h-8" /></button>
                        <button onClick={(e) => { e.stopPropagation(); prevPhoto(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white"><ChevronLeft className="w-10 h-10" /></button>
                        <div className="relative w-full max-w-5xl h-[80vh] mx-16" onClick={e => e.stopPropagation()}>
                            <Image src={allPhotos[lightboxIndex]} alt={`Photo ${lightboxIndex + 1}`} fill className="object-contain" />
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); nextPhoto(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white"><ChevronRight className="w-10 h-10" /></button>
                        <div className="absolute bottom-6 text-white/50 text-sm">{lightboxIndex + 1} / {allPhotos.length}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

