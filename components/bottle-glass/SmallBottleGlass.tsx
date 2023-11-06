'use client'

import { useEffect, useRef } from 'react'
import styles from './SmallBottleGlass.module.css'
import { cn, hexToRgb, rgbToHsl } from '@/lib/utils'

interface SmallBottleGlassProps {
    color: string,
    onClick?: (color: string) => void,
    className?: string
}

export default function SmallBottleGlass({ className = "", onClick, color }: SmallBottleGlassProps) {
    
    const bowlRef = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        bowlRef.current!.style.setProperty("--color", color)
        const rgb = hexToRgb(color)
        const hsl = rgbToHsl(rgb)
        bowlRef.current!.style.setProperty("--color-darker", `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness - 12}%)`)
    }, [color])

    return (
        <div className={cn('relative', className)}>
            <div className={styles.shadow}></div>
            <div onClick={() => onClick && onClick(color)} ref={bowlRef} className={cn(onClick ? "hover:cursor-pointer" : "", styles.bowl)}>
                <div className={styles.liquid}></div>
            </div>
            <div>
                <p className={cn("font-sans text-base lg:text-lg text-center text-[var(--main-white)]")}>Blue</p>
            </div>
        </div>
    )
}