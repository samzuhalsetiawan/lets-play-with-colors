import Definition from "@/components/docs-section/Definition";
import NavigationProvider from "@/components/navigation/NavigationProvider";
import SideNav from "@/components/navigation/sidenav/SideNav";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface DocsPageProps {
    children?: ReactNode
}

export default function DocsPage({ children }: DocsPageProps) {
    return (
        <div className="min-w-screen min-h-screen flex flex-col lg:flex-row">
            <NavigationProvider className="flex-1" />
            <div className="hidden lg:block w-[1px] h-screen bg-gradient-to-b from-transparent via-[var(--main-white)]" />
            <section className="flex-[6]">
                { children || <Definition /> }
            </section>
        </div>
    )
}