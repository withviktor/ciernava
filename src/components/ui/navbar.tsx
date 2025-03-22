import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import routes from "~/lib/routes";
import { BlurFade } from "../magicui/blur-fade";

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto pb-16 pt-16">
        <div className="flex items-center justify-between">
          <BlurFade inView>
            <Link href="/" className="text-3xl">
              Viktor
            </Link>
          </BlurFade>
          <div className="flex flex-row items-center justify-end gap-8 text-lg">
            {Object.values(routes).map((route) => (
              <BlurFade inView key={route.path}>
                <Link href={route.path}>{route.displayName}</Link>
              </BlurFade>
            ))}
            <div className="flex flex-row items-center gap-4">
              <BlurFade inView>
                <Link href="https://www.youtube.com/@withviktor" aria-label="Youtube Channel" target="_blank">
                  <FaYoutube />
                </Link>
              </BlurFade>
              <BlurFade inView>
                <Link href="https://www.instagram.com/withviktor_" aria-label="Instagram" target="_blank">
                  <FaInstagram />
                </Link>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
