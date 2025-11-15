import Image from "next/image";
import AudioWave from "./ui/audio-wave";
import { BlurFade } from "./ui/blur-fade";

const Hero = () => {
  return (
    <header className="w-hero">
      <div className="w-container">
        <AudioWave>
          <BlurFade className="group relative h-28 w-28 rounded-3xl bg-muted">
            <Image
              src="/assets/IMG_1910.png"
              width={250}
              height={250}
              alt="Viktor's Memoji"
              className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 select-none transition-all group-hover:rotate-12 group-hover:scale-150"
            />
          </BlurFade>
        </AudioWave>
        <BlurFade className="mt-10 text-center font-semibold tracking-widest">
          <h1 className="text-3xl lg:text-5xl">Hi, I&apos;m Viktor.</h1>
        </BlurFade>
        <BlurFade
          delay={0.233}
          className="text-center font-semibold tracking-widest"
        >
          <p className="text-2xl text-muted-foreground lg:text-5xl">
            Clean interfaces are <br /> music to my ears
          </p>
        </BlurFade>
      </div>
      <div className="h-[300px] w-screen bg-muted mt-20"></div>
    </header>
  );
};

export default Hero;
