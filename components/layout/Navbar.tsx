"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const navItems = [
    { label: "The Cabin", href: "/#cabin" },
    { label: "Properties", href: "/#properties" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Location", href: "/#location" },
    { label: "Amenities", href: "/#amenities" },
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
                    ? "bg-alabaster/80 backdrop-blur-md py-4 border-b border-charcoal/5"
                    : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="z-50 relative">
                    <h1
                        className={cn(
                            "font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors",
                            scrolled ? "text-charcoal" : "text-alabaster"
                        )}
                    >
                        Riverbend<span className="text-copper">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium tracking-widest uppercase hover:text-copper transition-colors",
                                scrolled ? "text-charcoal" : "text-alabaster/90"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/book">
                        <Button
                            size="sm"
                            variant={scrolled ? "primary" : "outline"}
                            className={cn(
                                !scrolled && "border-alabaster text-alabaster hover:bg-alabaster hover:text-charcoal"
                            )}
                        >
                            Book Now
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-current"
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
                            <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="mt-4">
                                    Book Your Stay
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
