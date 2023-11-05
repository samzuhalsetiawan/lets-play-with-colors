import { cn } from '@/lib/utils'
import styles from './GlowingButton.module.css'
import { ReactNode } from 'react'

interface GlowingButtonProps {
    children?: ReactNode,
    className?: string
}

export default function GlowingButton({ children = "", className = "" }: GlowingButtonProps) {
    return (
        <button className={cn(styles.button, styles.glowEffect, className)}>
            {children}
        </button>
    )
}