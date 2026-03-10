import Hero from "@/components/home/Hero";
import Properties from "@/components/home/Properties";
import FeaturesRow from "@/components/home/FeaturesRow";
import Location from "@/components/home/Location";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reviews from "@/components/home/Reviews";
import MeetYourHost from "@/components/home/MeetYourHost";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#0F172A] selection:text-[#F9F8F6]">
      <Navbar />
      <Hero />
      <Properties />
      <FeaturesRow />
      <Reviews />
      <MeetYourHost />
      <Location />
      <Footer />
    </main>
  );
}
