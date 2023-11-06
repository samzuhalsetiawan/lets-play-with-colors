import GlowingButton from "@/components/buttons/GlowingButton";
import Converter from "@/components/converter/Converter";
import Hero from "@/components/hero/Hero";
import { FullScreenCenterComponentHelper } from "@/lib/components-helper";
import Link from "next/link";

export default async function Home() {

  return (
    <main className="h-screen w-screen flex flex-col lg:flex-row">
      <div className="lg:pl-[10rem] flex items-center">
        <Hero />
      </div>
      <div className="flex flex-1 flex-col gap-5 lg:gap-10 justify-start lg:justify-center items-stretch lg:items-start">
        <GlowingButton className="mx-16 lg:mx-0 max-w-lg lg:ml-14 hover:scale-110 transition duration-500">
          <Link href={'/docs'}>Apa itu Warna</Link>
        </GlowingButton>
        <GlowingButton className="mx-16 lg:mx-0 max-w-lg lg:ml-32 hover:scale-110 transition duration-500">Gradient Playground</GlowingButton>
        <GlowingButton className="mx-16 lg:mx-0 max-w-lg lg:ml-48 hover:scale-110 transition duration-500">
          <Link href={'/mixer'}>Color Mixer</Link>
        </GlowingButton>
        <GlowingButton className="mx-16 lg:mx-0 max-w-lg lg:ml-32 hover:scale-110 transition duration-500">
          <Link href={'/quiz'}>Color Quiz</Link>
        </GlowingButton>
        <GlowingButton className="mx-16 lg:mx-0 max-w-lg lg:ml-14 hover:scale-110 transition duration-500">
          <Link href={'/about'}>About Us</Link>
        </GlowingButton>
      </div>
    </main>
  )
}
