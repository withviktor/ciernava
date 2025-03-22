import fs from "fs";
import matter from "gray-matter";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeAddClasses from "rehype-class-names";
import rehypeHighlight from "rehype-highlight";

const postsDirectory = path.join(process.cwd(), "posts");

interface PostMetadata {
  title: string;
  date: string;
}

interface ListPostData extends PostMetadata {
  id: string;
  readingTime: number;
}

interface SinglePostData extends PostMetadata {
  id: string;
  readingTime: number;
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: ListPostData[] = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Calculate reading time in minutes
      const words = matterResult.content.split(/\s+/).length;
      const readingTime = Math.ceil(words / 200);

      // Combine the data with the id
      return {
        id,
        readingTime,
        ...(matterResult.data as PostMetadata),
      };
    });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<SinglePostData> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse the frontmatter using gray-matter
  const matterResult = matter(fileContents);

  // Calculate reading time
  const words = matterResult.content.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  // Serialize the MDX content for rendering
  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeHighlight,
        [
          rehypeAddClasses,
          {
            h1: "text-4xl font-bold mb-2",
            h2: "text-3xl font-semibold mb-2",
            h3: "text-2xl font-semibold mb-2",
            h4: "text-xl font-semibold mb-2",
            p: "text-lg leading-normal",
            a: "text-blue-500 underline underline-offset-2",
            ul: "list-disc list-inside",
            ol: "list-decimal list-inside",
            "li li": "ml-4",
            blockquote: "border-l-4 border-gray-300 pl-4 italic",
            img: "max-w-full h-auto rounded-md",
          },
        ],
      ],
    },
  });

  return {
    id: slug,
    readingTime,
    content: mdxSource,
    ...(matterResult.data as PostMetadata),
  };
}
