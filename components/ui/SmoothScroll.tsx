"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {/* Casting through unknown to any to force resolve React 19 typing conflicts */}
            {children as unknown as any}
        </ReactLenis>
    );
}
