"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const navItems = [
    { label: "The Cabin", href: "/#cabin" },
    { label: "Properties", href: "/#properties" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Location", href: "/#location" },
    { label: "Amenities", href: "/amenities" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-alabaster/90 backdrop-blur-md py-4 border-b border-charcoal/5 shadow-sm"
                    : "bg-transparent py-2"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between overflow-visible" style={{ pointerEvents: 'auto' }}>
                {/* Logo */}
                <Link href="/" className="flex items-center cursor-pointer flex-shrink-0 overflow-visible ml-0 md:-ml-10">
                    <div className="relative h-7 sm:h-9 w-[120px] sm:w-[280px] md:w-[350px] overflow-visible">
                        <Image
                            src="/images/cogansplacelogo.png"
                            alt="Cogan's Place"
                            fill
                            priority
                            className={cn(
                                "object-contain object-left mt-2 transition-all duration-500 origin-left scale-[2.5] md:scale-[4.5]",
                                !scrolled
                                    ? "drop-shadow-[0_0_25px_rgba(255,255,255,1)]" // Stronger glow for unscrolled
                                    : "drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]" // Stronger glow for scrolled
                            )}
                            sizes="(max-width: 640px) 140px, (max-width: 768px) 280px, 350px"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 ml-auto relative z-20">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "relative text-xs font-bold tracking-widest uppercase transition-colors whitespace-nowrap",
                                scrolled ? "text-charcoal hover:text-copper" : "text-alabaster hover:text-white"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/properties"
                        className="inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-300 uppercase tracking-widest bg-copper text-white hover:bg-copper/90 h-10 px-6 text-[10px]"
                    >
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-current relative"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="text-charcoal" />
                    ) : (
                        <Menu className={scrolled ? "text-charcoal" : "text-alabaster"} />
                    )}
                </button>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[#F4F2ED] z-40 flex flex-col items-center justify-center p-4 md:hidden h-screen w-screen"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-serif text-3xl text-charcoal hover:text-copper transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/properties"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-300 uppercase tracking-widest bg-charcoal text-alabaster border border-charcoal hover:bg-transparent hover:text-charcoal h-12 px-8 text-base mt-4"
                            >
                                Book Your Stay
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
