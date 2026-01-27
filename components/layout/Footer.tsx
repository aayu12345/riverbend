"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-alabaster pt-32 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="space-y-6">
                        <h2 className="font-serif text-5xl md:text-7xl leading-none">
                            Ready to <br /> <span className="text-copper italic">Unplug?</span>
                        </h2>
                        <p className="text-alabaster/60 text-sm leading-relaxed max-w-xs font-light">
                            Book your stay at Cogan's Place and experience the art of slowing down.
                        </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-6">
                        <Button
                            size="lg"
                            className="bg-alabaster text-charcoal hover:bg-copper hover:text-white border-none w-full md:w-auto"
                        >
                            Check Availability
                        </Button>
                        <p className="text-alabaster/40 text-sm">
                            Book direct for the best rates.
                        </p>
                    </div>
                </div>

                <div className="border-t border-alabaster/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="relative h-24 w-96">
                        <Image
                            src="/images/cogansplacelogo.png"
                            alt="Cogan's Place"
                            fill
                            className="object-contain object-left brightness-0 invert"
                        />
                    </div>
                    <div className="flex gap-8 text-sm text-alabaster/60 uppercase tracking-widest">
                        <a href="#" className="hover:text-copper transition-colors">
                            Instagram
                        </a>
                        <a href="#" className="hover:text-copper transition-colors">
                            Airbnb
                        </a>
                        <a href="#" className="hover:text-copper transition-colors">
                            Email
                        </a>
                    </div>
                    <p className="text-alabaster/30 text-xs font-light tracking-wide">
                        © {new Date().getFullYear()} Cogan's Place.
                    </p>
                </div>
            </div>
        </footer>
    );
}
