import { cn } from "./utils"

interface FullScreenCenterComponentHelperProps {
    children: React.ReactNode,
    className?: string
}

export function FullScreenCenterComponentHelper({ className = "", children }: FullScreenCenterComponentHelperProps) {
    return (
        <div className={cn("h-screen w-screen flex justify-center items-center", className)}>
            {children}
        </div>
    )
  }