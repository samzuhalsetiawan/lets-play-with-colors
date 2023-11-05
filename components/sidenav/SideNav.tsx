'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from './SideNav.module.css'
import { usePathname } from "next/navigation";

interface SideNavProps {
    className?: string
}

export default function SideNav({ className = "" }: SideNavProps) {
    
    const pathName = usePathname()
    
    return (
        <nav className={cn("text-lg", styles.sidenav, className)}>
                <Link className="hover:cursor-pointer hover:text-[var(--on-main-white)]" href={'/'}>
                    <svg width="28" height="28" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </Link>
                <ul className="mt-8">
                    <li className={pathName == "/docs" ? styles.active : ""}>
                        <Link href={'/docs'}>Definisi</Link>
                    </li>
                    <li className={pathName == "/docs/wheel" ? styles.active : ""}>
                        <Link href={'/docs/wheel'}>Roda Warna</Link>
                    </li>
                    <li className={pathName == "/any" ? styles.active : ""}>
                        <Link href={''}>Comming Soon</Link>
                    </li>
                    <li className={pathName == "/any" ? styles.active : ""}>
                        <Link href={''}>Comming Soon</Link>
                    </li>
                </ul>
            </nav>
    )
}