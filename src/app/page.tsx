import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import myPhoto from "~/../public/assets/2FFDA69D-7ECA-40C5-9E88-34F5C964209B_1_105_c-removebg-preview.png";
import { BlurFade } from "~/components/magicui/blur-fade";
import SocialIcons from "~/components/social-icons";
import { Button } from "~/components/ui/button";
import { getSEOTags } from "~/lib/seo";

export const metadata = getSEOTags({
  title: "Web Designer - Viktor Čierňava | Tvořím úspěšné weby",
  canonicalUrlRelative: "/",
  keywords: [
    "freelance",
    "freelancer",
    "withviktor",
    "Viktor Čierňava",
    "Viktor",
    "Čierňava",
    "web",
    "designer",
    "developer",
    "web developer",
    "web designer",
  ],
});

export default function HomePage() {
  return (
    <>
      <BlurFade>
        <SocialIcons />
      </BlurFade>
      <BlurFade
        delay={0.1}
        className="mb-10 items-center gap-2 text-4xl font-bold sm:text-7xl"
      >
        UI/UX Designer <br /> & Developer{" "}
        <span>
          <Image
            src={myPhoto}
            height={64}
            width={64}
            alt="This is Viktor"
            className="inline-flex h-12 w-12 rounded-full sm:h-16 sm:w-16"
          />
        </span>
      </BlurFade>

      <BlurFade delay={0.2} className="mb-10 text-2xl font-light">
        Zaobírám se tvorbou webových stránek a růstem Vaší značky.
      </BlurFade>

      <BlurFade delay={0.3}>
        <Button variant="brand" asChild>
          <Link href="mailto:business@withviktor.com">
            Žádost o spolupráci
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </BlurFade>
    </>
  );
}
