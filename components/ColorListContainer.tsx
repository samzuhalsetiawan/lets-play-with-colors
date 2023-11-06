import { cn } from "@/lib/utils"

interface ColorListContainerProps {
    className?: string,
    children: React.ReactNode,
    title: string
}

export default function ColorListContainer({ className = "", children, title } : ColorListContainerProps) {
    return (
        <div className={cn("py-3 lg:py-8 flex-1 flex flex-col justify-center items-center gap-7 lg:gap-10", className)}>
            <h3 className="text-2xl text-white font-sans">{title}</h3>
            <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-8">
                {children}
            </div>
        </div>
    )
}