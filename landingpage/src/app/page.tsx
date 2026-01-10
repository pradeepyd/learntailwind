import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full pointer-events-none">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
      </div>
      <Container>
        <Navbar></Navbar>
        <Hero/>
      </Container>
      <div className="relative w-full">
        <div className="absolute h-px w-full inset-x-0 bg-linear-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
        <div className="max-w-5xl mx-auto mt-4 px-4 rounded-4xl">
        <Image
        src={"/hero-ui-v6.webp"}
        alt="hero-ui"
        className="w-full object-cover border border-neutral-200 mask-b-from-0% to-100% shadow-[0px_0px_0px_1px_rgba(30,31,37,0.04),0px_1.658px_4.145px_0px_rgba(30,31,37,0.08),0px_26.526px_33.158px_-13.263px_rgba(30,31,37,0.10),0px_6.632px_54.711px_0px_rgba(30,31,37,0.06),0px_10.776px_8.289px_-9.947px_rgba(30,31,37,0.15)]"
        height={1000}
        width={1000}/>
        </div>
      </div>
      
    </div>
  );
}

