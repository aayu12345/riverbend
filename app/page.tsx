import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Features from "@/components/home/Features";
import Location from "@/components/home/Location";
import GalleryScroller from "@/components/home/GalleryScroller";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-copper selection:text-white">
      <Navbar />
      <Hero />
      <Intro />
      <Features />
      <Location />
      <GalleryScroller />
      <Footer />
    </main>
  );
}
