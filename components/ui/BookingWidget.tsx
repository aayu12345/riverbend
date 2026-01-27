"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingWidget() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-5xl mx-auto bg-white p-4 rounded-sm shadow-xl grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative z-20 -mt-12 md:-mt-16"
        >
            {/* Location */}
            <div className="flex items-center gap-3 p-3 border-b md:border-b-0 md:border-r border-charcoal/10">
                <MapPin className="text-copper w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-charcoal/50 font-medium">Location</span>
                    <span className="font-serif text-charcoal font-medium">London, UK</span>
                </div>
            </div>

            {/* Check In/Out */}
            <div className="flex items-center gap-3 p-3 border-b md:border-b-0 md:border-r border-charcoal/10">
                <Calendar className="text-copper w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-charcoal/50 font-medium">Dates</span>
                    <span className="font-serif text-charcoal font-medium">Check Dates</span>
                </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 p-3 border-b md:border-b-0 md:border-r border-charcoal/10">
                <Users className="text-copper w-5 h-5 flex-shrink-0" />
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-charcoal/50 font-medium">Guests</span>
                    <span className="font-serif text-charcoal font-medium">Add Guests</span>
                </div>
            </div>

            {/* Submit */}
            <div className="p-1">
                <Button className="w-full h-12 bg-copper hover:bg-copper/90 text-white rounded-none uppercase tracking-widest text-xs font-bold">
                    Search
                </Button>
            </div>
        </motion.div>
    );
}
