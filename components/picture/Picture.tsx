import { cn } from "@/lib/utils"
import Image from "next/image"

type Aspect = "aspect-video" | "aspect-auto" | "aspect-square"

interface PictureProps {
    className?: string,
    aspectRasio?: Aspect | string,
    height?: string,
    useBorder?: boolean,
    src: string,
    photoPad?: string,
}

export default function Picture({ photoPad = "border-r-[25px]", src, useBorder = true, height = "h-40", aspectRasio = "aspect-video", className = "" }: PictureProps) {
    return (
        <div className={cn(className)}>
            <div className={cn("relative m-auto", height, aspectRasio, useBorder ? `shadow-lg border-8 border-[var(--main-white)]` : "", photoPad)}>
                <Image src={src} alt="pensil warna" fill style={{ "objectFit": "cover" }} />
            </div>
        </div>
    )
}