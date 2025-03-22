"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { Button } from "~/components/ui/button";
import HeroVideoDialog from "./magicui/hero-video-dialog";
import { BlurFade } from "./magicui/blur-fade";

export default function MdxContentRenderer({
  content,
}: {
  content: MDXRemoteSerializeResult;
}) {
  return <MDXRemote {...content} components={{ Button, HeroVideoDialog, BlurFade }} />;
}
