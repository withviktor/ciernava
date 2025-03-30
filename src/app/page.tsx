import Image from "next/image";
import { BlurFade } from "~/components/magicui/blur-fade";
import refactorImage from "../../public/assets/refactor.jpg";

export default function HomePage() {
  return (
    <main>
      <header className="container flex flex-col">
        <BlurFade inView>
          <h1 className="max-w-lg text-[2.35rem] leading-snug">
            {
              "Hi, I’m a software engineer and a solo-preneur based in Czech Republic."
            }
          </h1>
        </BlurFade>
      </header>
    </main>
  );
}
