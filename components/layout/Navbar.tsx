"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";


const navItems = [
    { label: "The Cabin", href: "/#cabin" },
    { label: "Properties", href: "/properties" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Location", href: "/#location" },
    { label: "Amenities", href: "/amenities" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F6] py-4 md:py-6 border-b border-[#0F172A]/10 shadow-sm"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-between items-center h-full overflow-visible relative" style={{ pointerEvents: 'auto' }}>
                {/* Logo */}
                <Link href="/" className="flex items-center cursor-pointer flex-shrink-0 relative z-50 -ml-2 sm:ml-0">
                    <div className="relative h-12 sm:h-14 md:h-16 w-[180px] sm:w-[240px] md:w-[260px]">
                        <Image
                            src="/images/cogansplacelogo.png"
                            alt="Cogan's Place"
                            fill
                            priority
                            className="object-contain object-left drop-shadow-sm"
                            sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 260px"
                        />
                    </div>
                </Link>

                {/* Right Actions */}
                <div className="flex items-center gap-3 relative z-[70]">
                    {/* Currency / Lang Pill (Desktop) */}
                    <div className="hidden md:block">
                        <Button
                            variant="outline"
                            className="rounded-full border-[#0F172A]/30 text-[#0F172A] hover:bg-[#0F172A] hover:text-[#F9F8F6] text-[10px] px-4 h-9 uppercase tracking-wider bg-transparent"
                        >
                            GBP / ENG
                        </Button>
                    </div>

                    {/* Book Button (Dark Pill) */}
                    <Link href="/properties">
                        <Button className="rounded-full bg-[#0F172A] text-[#F9F8F6] hover:bg-[#0F172A]/90 text-[10px] px-6 h-9 uppercase tracking-widest shadow-sm">
                            Book
                        </Button>
                    </Link>

                    {/* Menu Trigger */}
                    <button
                        className="p-2 hover:bg-black/5 rounded-full transition-colors ml-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-[#0F172A]" strokeWidth={1.5} />
                        ) : (
                            <Menu className="w-6 h-6 text-[#0F172A]" strokeWidth={1.5} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="fixed inset-0 bg-[#F9F8F6] z-[60] overflow-y-auto"
                        >
                            <div className="h-full flex flex-col pt-24 px-6 pb-6 justify-start">
                                <nav className="flex flex-col gap-4 items-start max-w-lg mx-auto w-full">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="font-serif text-2xl text-[#0F172A] hover:italic hover:translate-x-2 transition-all duration-300 py-1"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                    <div className="h-px w-full bg-[#0F172A]/10 my-2" />
                                    <Link href="/login" className="text-[#0F172A] uppercase tracking-widest text-xs hover:underline py-2">
                                        Sign In / Join
                                    </Link>
                                    <div className="mt-2 w-full">
                                        <Link href="/properties">
                                            <Button className="w-full bg-[#0F172A] text-[#F9F8F6] rounded-none h-10 uppercase tracking-widest text-xs">
                                                Book Your Stay
                                            </Button>
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
