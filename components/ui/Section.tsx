"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
    container?: boolean;
}

export default function Section({
    children,
    className,
    container = true,
    ...props
}: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("py-24 relative", className)}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 md:px-6">{children as React.ReactNode}</div>
            ) : (
                <>{children as React.ReactNode}</>
            )}
        </motion.section>
    );
}
