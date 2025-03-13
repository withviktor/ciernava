import { formatDistance } from "date-fns";
import { type Metadata } from "next";
import Link from "next/link";
import { BlurFade } from "~/components/magicui/blur-fade";
import { Separator } from "~/components/ui/separator";
import { getSortedPostsData } from "~/lib/post";

export const metadata: Metadata = {
  title: "Blog — Viktor",
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  return (
    <main>
      <div className="container mx-auto flex flex-col">
        <BlurFade inView>
          <div>
            <h1 className="max-w-lg text-[2.5rem] leading-snug">
              {
                "Writing about software engineering, running startups, and life."
              }
            </h1>
          </div>
        </BlurFade>
        <div className="mt-16 flex flex-col">
          {allPostsData.map(({ id, date, title, readingTime }, index) => (
            <BlurFade inView key={id}>
              <div className="flex items-center justify-between">
                <Link
                  href={`/blog/${id}`}
                  className="text-lg text-blue-500 underline underline-offset-2"
                >
                  {title}
                </Link>
                <div className="flex flex-row items-center justify-end gap-4 text-gray-500">
                  <span>
                    {formatDistance(new Date(date), new Date(), {
                      addSuffix: true,
                    })}
                  </span>
                  <span>{readingTime} min read</span>
                </div>
              </div>
              {index !== allPostsData.length - 1 && (
                <Separator className="my-6" />
              )}
            </BlurFade>
          ))}
        </div>
      </div>
    </main>
  );
}
