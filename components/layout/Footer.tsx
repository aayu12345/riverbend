"use client";

import { Button } from "@/components/ui/Button";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-alabaster pt-32 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
                    <div className="space-y-6">
                        <h2 className="font-serif text-5xl md:text-7xl leading-none">
                            Ready to <br /> <span className="text-copper italic">Unplug?</span>
                        </h2>
                        <p className="text-alabaster/60 max-w-sm font-light">
                            Book your stay at Riverbend and experience the art of slowing down.
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
                    <div className="font-serif text-2xl font-bold">
                        Riverbend<span className="text-copper">.</span>
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
                    <div className="text-alabaster/20 text-xs">
                        © {new Date().getFullYear()} Riverbend A-Frame.
                    </div>
                </div>
            </div>
        </footer>
    );
}
