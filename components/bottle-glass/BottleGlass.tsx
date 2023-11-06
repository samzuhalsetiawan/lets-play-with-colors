'use client'

import { cn, hexToRgb, rgbToHsl } from '@/lib/utils'
import styles from './BottleGlass.module.css'
import { useEffect, useRef, useState } from 'react'

interface BottleGlassProps {
    className?: string,
    liquidPercentage: number,
    color: string,
    onClick?: () => void
}

export default function BottleGlass({onClick, color, className = "", liquidPercentage }: BottleGlassProps) {
    
    const [liquidMaxCapacity, setLiquidMaxCapacity] = useState<number | null>(null)
    const [liquidTopOffset, setLiquidTopOffset] = useState(48)
    const liquidRef = useRef<HTMLDivElement | null>(null)
    const liquidContainerRef = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        const containerHeight = liquidContainerRef.current!.clientHeight
        const offset = 2 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        setLiquidMaxCapacity(containerHeight - offset)
        setLiquidTopOffset(offset)
    }, [])

    useEffect(() => {
        if (liquidPercentage < 0.1) return
        const invertedValue = liquidPercentage * -1 + 1
        // liquidRef.current!.style.top = `${50 + invertedValue * liquidMaxCapacity}px`
        if (!liquidMaxCapacity && onClick) {
            liquidRef.current!.style.top = "calc(50% + 1rem)"
            return
        }
        if (liquidMaxCapacity) {
            liquidRef.current!.style.top = `${liquidTopOffset + invertedValue * liquidMaxCapacity}px`
        }
    }, [liquidPercentage])

    useEffect(() => {
        liquidRef.current!.style.setProperty("--color", color)
        const rgb = hexToRgb(color)
        const hsl = rgbToHsl(rgb)
        liquidRef.current!.style.setProperty("--color-darker", `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness - 12}%)`)
    }, [color])

    return (
        <div onClick={() => onClick && onClick()} className={cn(styles.glass, className)}>
            <div ref={liquidContainerRef}>
                <div ref={liquidRef} className={styles.liquid}></div>
            </div>
        </div>
    )
}