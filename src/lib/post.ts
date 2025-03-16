import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { rehype } from "rehype";
import rehypeAddClasses from "rehype-add-classes";
import rehypeHighlight from "rehype-highlight";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

interface PostMetadata {
  title: string;
  date: string;
}

interface PostData extends PostMetadata {
  id: string;
  readingTime: number;
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

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

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const processedHtml = await rehype()
    .use(rehypeParse, { fragment: true })
    .use(rehypeAddClasses, {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-semibold",
      p: "text-lg",
      a: "text-blue-500 underline",
      ul: "list-disc list-inside",
      ol: "list-decimal list-inside",
      li: "mb-2",
      blockquote: "border-l-4 border-gray-300 pl-4 italic",
      img: "max-w-full h-auto",
    })
    .use(rehypeHighlight)
    .use(rehypeHighlightCodeLines, {
      showLineNumbers: true,
    })
    .use(rehypeStringify)
    .process(contentHtml);

  // Calculate reading time in minutes
  const words = matterResult.content.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200);

  return {
    slug,
    readingTime,
    content: processedHtml.toString(),
    ...(matterResult.data as PostMetadata),
  };
}
