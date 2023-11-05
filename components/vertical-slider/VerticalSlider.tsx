'use client'

import { cn } from "@/lib/utils"
import React, { useEffect, useRef } from "react"
import styles from './VerticalSlider.module.css'

interface VerticalSliderProps {
    className?: string,
    value?: number,
    onValueChange?: (value: number) => void,
    color: string
}

export default function VerticalSlider({color, onValueChange, className = "", value = 0 }: VerticalSliderProps) {

    const sliderContainerRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        sliderContainerRef.current!.style.setProperty("--color", color)
    }, [color])

    const valueChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = parseInt(ev.currentTarget.value)
        onValueChange && onValueChange(currentValue / 100)
    } 

    return (
        <div ref={sliderContainerRef} className={cn(styles.container, className)}>
            <input onChange={valueChangeHandler} className={cn(styles.slider)} type="range" min={0} max={100} value={value * 100} />
        </div>
    )
}