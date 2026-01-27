"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Properties from "@/components/home/Properties";

export default function PropertiesPage() {
    return (
        <main className="min-h-screen bg-alabaster selection:bg-copper selection:text-white">
            <Navbar />

            {/* 
                Reusing the Properties component.
                Added padding-top to account for the fixed navbar since 
                the component normally relies on layout flow or sections.
            */}
            <div className="pt-20">
                <Properties />
            </div>

            <Footer />
        </main>
    );
}
