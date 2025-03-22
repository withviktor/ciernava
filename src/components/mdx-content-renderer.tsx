"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { Button } from "~/components/ui/button";

export default function MdxContentRenderer({
  content,
}: {
  content: MDXRemoteSerializeResult;
}) {
  return <MDXRemote {...content} components={{ Button }} />;
}
