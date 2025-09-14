import Image from "next/image";
import Link from "next/link";

import Discord from "~/../public/assets/Social Media Icons/discord.svg";
import InstagramIcon from "~/../public/assets/Social Media Icons/instagram.svg";
import LinkedInIcon from "~/../public/assets/Social Media Icons/linkedin.svg";
import TwitterIcon from "~/../public/assets/Social Media Icons/x.svg";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function SocialIcons() {
  return (
    <span className="group relative inline-flex gap-4 lg:gap-0">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://linkedin.com/in/withviktor"
            target="_blank"
            className="relative z-10 transition-all duration-200 lg:translate-x-2 lg:-rotate-6 lg:transform lg:group-hover:translate-x-0 lg:group-hover:rotate-0"
          >
            <Image
              src={LinkedInIcon as string}
              alt="@withviktor"
              width={42}
              height={42}
              className="block"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>@withviktor</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://www.instagram.com/withviktor_/"
            target="_blank"
            className="relative z-10 transition-all duration-200 lg:rotate-3 lg:transform lg:group-hover:translate-x-2 lg:group-hover:rotate-0"
          >
            <Image
              src={InstagramIcon as string}
              alt="@withviktor_"
              width={42}
              height={42}
              className="block"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>@withviktor_</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://x.com/vciernava"
            target="_blank"
            className="relative z-10 transition-all duration-200 lg:-translate-x-4 lg:-rotate-6 lg:transform lg:group-hover:translate-x-4 lg:group-hover:rotate-0"
          >
            <Image
              src={TwitterIcon as string}
              alt="@vciernava"
              width={42}
              height={42}
              className="block"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>@vciernava</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://discord.gg/xevyBvVedU"
            target="_blank"
            className="relative z-10 transition-all duration-200 lg:-translate-x-6 lg:rotate-3 lg:transform lg:group-hover:translate-x-6 lg:group-hover:rotate-0"
          >
            <Image
              src={Discord as string}
              alt="Discord Logo"
              width={42}
              height={42}
              className="block rounded-md"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>Viktor&apos;s dev club 🦄</TooltipContent>
      </Tooltip>
    </span>
  );
}
