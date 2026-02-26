import Hero from "@/components/home/Hero";
import Properties from "@/components/home/Properties";
import FeaturesRow from "@/components/home/FeaturesRow";
import Membership from "@/components/home/Membership";
import Location from "@/components/home/Location";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeAmenities from "@/components/home/HomeAmenities";
import StayYourWay from "@/components/home/StayYourWay";
import Reviews from "@/components/home/Reviews";
import ThingsToDo from "@/components/home/ThingsToDo";
import MeetYourHost from "@/components/home/MeetYourHost";
import ArmingerRoad from "@/components/home/ArmingerRoad";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#0F172A] selection:text-[#F9F8F6]">
      <Navbar />
      <Hero />
      <FeaturesRow />
      <StayYourWay />
      <Membership />
      <Properties />
      <HomeAmenities />
      <Reviews />
      <MeetYourHost />
      <Location />
      <ThingsToDo />
      <ArmingerRoad />
      <Footer />
    </main>
  );
}
