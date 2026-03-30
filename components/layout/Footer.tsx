"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-[#F9F8F6] pt-20 pb-10 text-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-b border-[#F9F8F6]/10 pb-12">
                    {/* Contact & Service Column */}
                    <div className="space-y-6">
                        <h3 className="font-serif italic text-lg mb-4">Contact Us</h3>
                        <div className="flex flex-col gap-2 font-light text-[#F9F8F6]/80 mb-6">
                            <p>+44 7939 200486</p>
                            <p>stevecogan5@gmail.com</p>
                        </div>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}
