'use client'

import { Player } from '@lottiefiles/react-lottie-player';

export default function LoadingPage() {
    return (
        <section className='h-screen w-screen overflow-hidden flex justify-center items-center'>
            <Player
                autoplay
                loop
                src="https://lottie.host/2e539ec0-dce2-4437-abda-08487f94ebfa/oUjBVS1Iui.json"
                style={{ height: '300px', width: '300px' }} />
        </section>
    )
}