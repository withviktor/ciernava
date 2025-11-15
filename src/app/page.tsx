import Footing from "~/components/footing";
import Hero from "~/components/hero";
import TechStack from "~/components/tech-stack";
import { getSEOTags } from "~/lib/seo";

export const metadata = getSEOTags({
  title:
    "Web Designer - Viktor Čierňava | Clean interfaces are music to my ears",
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
      <Hero />
      <div id="sections" className="sections">
        <TechStack />
      </div>
      <Footing />
    </>
  );
}
