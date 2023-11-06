'use client'

import { Player } from '@lottiefiles/react-lottie-player';

export default function LoadingPage() {
    return (
        <section className='h-screen w-screen overflow-hidden flex justify-center items-center'>
            <Player
                autoplay
                loop
                src="/loading.json"
                style={{ height: '300px', width: '300px' }} />
        </section>
    )
}