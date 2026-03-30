"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/447939200486"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[9999] group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
            title="Chat with Steve"
            aria-label="Chat with Steve on WhatsApp"
        >
            {/* Pulsing ring animation to grab attention */}
            <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
            />
            
            {/* The actual icon */}
            <MessageCircle className="w-7 h-7 fill-current" />
            
            {/* Pop-out text hint on hover */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-[#0F172A] text-sm px-4 py-2 rounded-xl shadow-xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-black/5">
                Chat with Steve 👋
                {/* Little triangle arrow pointing to the button */}
                <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white border-t border-r border-black/5 transform rotate-45" />
            </span>
        </a>
    );
}
