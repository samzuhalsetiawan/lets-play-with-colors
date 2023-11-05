import GlowingButton from "@/components/buttons/GlowingButton";
import Converter from "@/components/converter/Converter";
import Hero from "@/components/hero/Hero";
import { FullScreenCenterComponentHelper } from "@/lib/components-helper";
import Link from "next/link";

export default async function Home() {

  return (
    <main className="h-screen w-screen flex">
      <div className="pl-[10rem] flex items-center">
        <Hero />
      </div>
      <div className="flex flex-1 flex-col gap-10 justify-center items-start">
        <GlowingButton className="ml-14 hover:scale-110 transition duration-500">
          <Link href={'/docs'}>Apa itu Warna</Link>
        </GlowingButton>
        <GlowingButton className="ml-32 hover:scale-110 transition duration-500">Gradient Playground</GlowingButton>
        <GlowingButton className="ml-48 hover:scale-110 transition duration-500">
          <Link href={'/mixer'}>Color Mixer</Link>
        </GlowingButton>
        <GlowingButton className="ml-32 hover:scale-110 transition duration-500">
          <Link href={'/quiz'}>Color Quiz</Link>
        </GlowingButton>
        <GlowingButton className="ml-14 hover:scale-110 transition duration-500">
          <Link href={'/about'}>About Us</Link>
        </GlowingButton>
      </div>
    </main>
  )
}
