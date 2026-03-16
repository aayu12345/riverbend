"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
    {
        name: "Jakub",
        location: "6 years on Airbnb",
        date: "1 week ago",
        duration: "",
        avatar: "/images/jakub_real_avatar.png",
        text: "Everything was perfect. The apartment is cozy and really nice, and Steve always helped us whenever we needed it. What we really appreciated was the super comfy unfolded sofa in the living room and the 3 bedrooms. Highly recommend!",
    },
    {
        name: "Candi",
        location: "5 years on Airbnb",
        date: "December 2025",
        duration: "Group trip",
        avatar: "https://ui-avatars.com/api/?name=Candi&background=1f1f1f&color=fff&size=128",
        text: "Charming 3 bedroom flat nestled in a tranquil neighbourhood, a stone's throw away from the hustle and bustle of Shepherd's Bush.\nWithin 5 to 15 minutes walking distance of everything ... train station, Shepherd's Bush Market, Westfield Mall, entertainment, activities and restaurants.\nSteve was a fantastic host. Extremely responsive, flexible and helpful. Made us feel so at home. Thoroughly enjoyed our stay.",
    },
    {
        name: "Nurul",
        location: "9 years on Airbnb",
        date: "October 2025",
        duration: "",
        avatar: "/images/nurul_avatar.png",
        text: "We had a excellent and great stay here for 9 days. The unit was well maintained, clean very comforting. The host Steve was very pleasant and helpful. We would highly recommend it to anyone for future stays. The location was excellent and parking was easy. Cheers.",
    },
    {
        name: "Rory",
        location: "3 years on Airbnb",
        date: "September 2025",
        duration: "",
        avatar: "/images/rory_avatar.png",
        text: "Excellent apartment in a perfect location, close to amenities and local transport links. The garden was a wonderful setting on a nice day, the rooms were all clean and exactly as described.",
    },
    {
        name: "Tim",
        location: "6 years on Airbnb",
        date: "May 2025",
        duration: "",
        avatar: "/images/tim_avatar.png",
        text: "The flat was spacious and had all we needed for a very comfortable stay. \n\nThe shops, restaurants, fast food and public transport options were all within short walking distance which makes for a hassle free stay.",
    }
];

export default function Reviews() {
    return (
        <section className="py-24 bg-[#F9F8F6] text-[#0F172A] relative overflow-hidden border-t border-[#0F172A]/5">
            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl flex items-center gap-2">
                            <Star className="w-8 h-8 text-[#0F172A] fill-current" />
                            5.0 <span className="text-xl font-sans mt-1 opacity-70">· {reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 items-stretch">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-[#0F172A]/10 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-semibold text-base">{review.name}</h4>
                                    <p className="text-sm text-[#0F172A]/60">{review.location}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-1 mb-4 flex-wrap">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-3.5 h-3.5 text-[#0F172A] fill-current" />
                                    ))}
                                </div>
                                <span className="ml-1 text-sm font-medium text-[#0F172A]">· {review.date}</span>
                                {review.duration && <span className="ml-1 text-sm text-[#0F172A]/60">· {review.duration}</span>}
                            </div>
                            
                            <p className="text-[#0F172A]/80 leading-relaxed text-[15px] flex-grow">
                                {review.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
