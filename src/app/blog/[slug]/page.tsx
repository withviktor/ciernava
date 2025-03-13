import { formatDistance } from "date-fns";
import { BlurFade } from "~/components/magicui/blur-fade";
import { getPostBySlug } from "~/lib/post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: `${post.title} — Viktor`,
  };
}

export default async function SingePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <main>
      <div className="container mx-auto flex flex-col">
        <BlurFade inView>
          <h1 className="max-w-lg text-[2.5rem] leading-snug">{post.title}</h1>
        </BlurFade>
        <BlurFade inView>
          <div className="flex flex-row items-center gap-2 text-gray-500">
            <p>
              {formatDistance(new Date(post.date), new Date(), {
                addSuffix: true,
              })}
            </p>
            <span>–</span>
            <p>{post.readingTime} min read</p>
          </div>
        </BlurFade>
        <BlurFade inView>
          <div
            className="mt-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </BlurFade>
      </div>
    </main>
  );
}
