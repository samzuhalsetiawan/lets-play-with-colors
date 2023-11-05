'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from 'react';
import Typed from 'typed.js';


interface HeroProps {
    className?: string
}

export default function Hero({ className = "" }: HeroProps) {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                '<span style="color: blue;">Blue</span>',
                '<span style="color: red;">Red</span>',
                '<span style="color: orange;">Orange</span>',
                '<span style="color: green;">Green</span>',
                '<span style="color: yellow;">Yellow</span>',
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <div className={cn("relative h-[70vh] aspect-[3/2]", className)}>
            <div className={cn("relative h-[70vh] aspect-[3/2]")}>
                <Image src={'/colors.png'} alt="colors" fill />
            </div>
            <div className={cn("absolute w-[80%] top-[50%] left-[30%] translate-y-[-50%]")}>
                <h1 className={cn("font-sans text-5xl")}>
                    <span>Life is </span>
                    <span ref={el}></span>
                </h1>
                <blockquote className={cn("mt-5 space-y-2")}>
                    <p className="text-lg">
                        &ldquo;Life is a painting, and you are the artist. You have on your palette all the colors in the spectrum - the same ones available to Michaelangelo and DaVinci.&rdquo;
                    </p>
                    <footer className="text-sm">Paul J. Meyer</footer>
                </blockquote>
            </div>
        </div>
    )
}