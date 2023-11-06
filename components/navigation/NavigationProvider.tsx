'use client'

import { useEffect, useState } from "react"
import TopBar from "./top-bar/TopBar"
import SideNav from "./sidenav/SideNav"

interface NavigationProviderProps {
    className?: string
}

export default function NavigationProvider({ className = "" }: NavigationProviderProps) {
    
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])
    
    if (!windowWidth) return <></>
    return windowWidth < 1024 ? <TopBar className={className} /> : <SideNav className={className} />
}