import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "../magicui/blur-fade";

export default function Footer() {
  return (
    <div className="container mx-auto pb-16 pt-16">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-start text-lg">
          <BlurFade inView>
            <Image
              src="/assets/memoji.png"
              width={85}
              height={85}
              alt="Viktor's Memoji"
            />
          </BlurFade>
        </div>
        <div className="flex flex-col items-start text-lg">
          <BlurFade inView>
            <p>
              Watch me on{" "}
              <Link
                href="https://www.instagram.com/withviktor_"
                aria-label="Instagram"
                target="_blank"
                className="underline underline-offset-2"
              >
                Instagram
              </Link>
            </p>
          </BlurFade>
          <BlurFade inView>
            <p>
              Business mail{" "}
              <Link
                href="mailto:business@withviktor.com"
                aria-label="business@withvikor.com"
                className="underline underline-offset-2"
              >
                business@withviktor.com
              </Link>
            </p>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
