"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-[#F9F8F6] pt-20 pb-10 text-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-[#F9F8F6]/10 pb-12">
                    {/* Service Column */}
                    <div className="space-y-6">
                        <h3 className="font-serif italic text-lg mb-4">Service</h3>
                        <nav className="flex flex-col gap-3 opacity-80">
                            <Link href="#" className="hover:text-white transition-colors">Contact us</Link>
                            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
                            <Link href="#" className="hover:text-white transition-colors">Offers</Link>
                            <Link href="#" className="hover:text-white transition-colors">Locations</Link>
                            <Link href="#" className="hover:text-white transition-colors">Long Stays</Link>
                        </nav>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-6">
                        <h3 className="font-serif italic text-lg mb-4">Our Company</h3>
                        <nav className="flex flex-col gap-3 opacity-80">
                            <Link href="#" className="hover:text-white transition-colors">About</Link>
                            <Link href="#" className="hover:text-white transition-colors">Sustainability</Link>
                            <Link href="#" className="hover:text-white transition-colors">Press & Media</Link>
                            <Link href="#" className="hover:text-white transition-colors">Careers</Link>
                            <Link href="#" className="hover:text-white transition-colors">Development</Link>
                        </nav>
                    </div>

                    {/* Partners Column */}
                    <div className="space-y-6">
                        <h3 className="font-serif italic text-lg mb-4">Partner Services</h3>
                        <nav className="flex flex-col gap-3 opacity-80">
                            <Link href="#" className="hover:text-white transition-colors">Car Hire</Link>
                            <Link href="#" className="hover:text-white transition-colors">Airport Transfer</Link>
                            <Link href="#" className="hover:text-white transition-colors">Events & Activities</Link>
                            <Link href="#" className="hover:text-white transition-colors">Upgrade Your Stay</Link>
                        </nav>
                    </div>

                    {/* Newsletter Column */}
                    <div className="space-y-6">
                        <h3 className="font-serif italic text-lg mb-4">Newsletter</h3>
                        <p className="opacity-80 leading-relaxed">
                            Sign up for special offers and lashings of wanderlust.
                        </p>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="E-mail address"
                                className="bg-transparent border-b border-[#F9F8F6]/30 py-2 focus:outline-none focus:border-[#F9F8F6] placeholder:text-[#F9F8F6]/40"
                            />
                            <Button className="bg-[#F9F8F6] text-[#0F172A] hover:bg-white w-full rounded-full uppercase tracking-wider text-xs h-10 font-bold">
                                Sign Up
                            </Button>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <Instagram className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer" />
                            <Facebook className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer" />
                            <Twitter className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer" />
                            <Linkedin className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-xs tracking-wide">
                    <div className="flex gap-4">
                        <span>© {new Date().getFullYear()} Cogan&apos;s Place</span>
                        <span className="hidden md:inline">|</span>
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                    </div>
                    <div>
                        <p>Part of the Staycity Group</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
