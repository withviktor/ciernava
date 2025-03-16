import Image from "next/image";
import { BlurFade } from "~/components/magicui/blur-fade";
import refactorImage from "../../public/assets/refactor.jpg";

export default function HomePage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <BlurFade inView>
        <div className="relative h-full w-full">
          <Image
            src={refactorImage.src}
            alt="Refactor Meme"
            width={refactorImage.width}
            height={refactorImage.height}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </BlurFade>
    </main>
  );
}
