"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-charcoal text-alabaster border border-charcoal hover:bg-transparent hover:text-charcoal",
            outline: "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-alabaster",
            ghost: "bg-transparent text-charcoal hover:bg-charcoal/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-300 uppercase tracking-widest",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
