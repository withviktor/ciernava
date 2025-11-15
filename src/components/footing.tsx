import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";
import { Button } from "./ui/button";

const Footing = () => {
  return (
    <footer className="w-footer">
      <div className="w-container">
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-sm font-semibold uppercase text-muted-foreground">
            Get in touch
          </p>
          <h2 className="mb-5 text-3xl font-semibold lg:text-5xl">
            Let&apos;s Connect
          </h2>
          <Button variant="brand" size="sm">
            Start Project
          </Button>
        </div>
        <div className="mt-20 grid h-[450px] w-full max-w-[960px] gap-4 lg:grid-cols-3">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-muted">
            <BlurFade className="text-center font-semibold">
              <h1 className="text-lg lg:text-xl">Hi, I&apos;m Viktor.</h1>
            </BlurFade>
            <BlurFade className="text-center font-semibold">
              <p className="text-lg text-muted-foreground lg:text-xl">
                Clean interfaces are <br /> music to my ears
              </p>
            </BlurFade>
            <BlurFade className="group relative h-44 w-44">
              <Image
                src="/assets/IMG_1919.png"
                width={250}
                height={250}
                alt="Viktor's Memoji with Mac"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none transition-all"
              />
            </BlurFade>
          </div>
          <div className="h-full w-full rounded-3xl bg-muted lg:col-span-2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footing;
