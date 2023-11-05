import { cn } from '@/lib/utils'
import styles from './About.module.css'
import Picture from '../picture/Picture'

interface AboutProps {
    className?: string
}

export default function About({ className = "" }: AboutProps) {
    return (
        <div className={cn("flex justify-center items-center", className)}>
            <div className={cn(styles.profile, "gap-10")}>
                <div className='flex flex-col justify-center items-center text-[var(--main-white)]'>
                    <Picture className='mb-3' photoPad='border-b-[20px]' aspectRasio='aspect-[2/3]' src='/sam_crop.jpeg' />
                    <p>Sam Zuhal Seiawan</p>
                    <p>2005176043</p>
                </div>
                <div className='flex flex-col justify-center items-center text-[var(--main-white)]'>
                    <Picture className='mb-3' photoPad='border-b-[20px]' aspectRasio='aspect-[2/3]' src='/sam_crop.jpeg' />
                    <p>Qalbi</p>
                    <p>2005176xxx</p>
                </div>
                <div className='flex flex-col justify-center items-center text-[var(--main-white)]'>
                    <Picture className='mb-3' photoPad='border-b-[20px]' aspectRasio='aspect-[2/3]' src='/sam_crop.jpeg' />
                    <p>Yoland</p>
                    <p>2005176xxx</p>
                </div>
                <div className='flex flex-col justify-center items-center text-[var(--main-white)]'>
                    <Picture className='mb-3' photoPad='border-b-[20px]' aspectRasio='aspect-[2/3]' src='/sam_crop.jpeg' />
                    <p>Isna</p>
                    <p>2005176xxx</p>
                </div>
            </div>
            <div className={cn(styles.bottom)}>
                <div className={cn(styles.waves)}>
                    <div className={cn(styles.wave, styles.wave1)}></div>
                    <div className={cn(styles.wave, styles.wave2)}></div>
                    <div className={cn(styles.wave, styles.wave3)}></div>
                    <div className={cn(styles.wave, styles.wave4)}></div>
                </div>
            </div>
        </div>
    )
}