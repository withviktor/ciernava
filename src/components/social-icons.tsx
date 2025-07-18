import Image from "next/image";
import Link from "next/link";

import GithubIcon from "~/../public/assets/Social Media Icons/github.svg";
import InstagramIcon from "~/../public/assets/Social Media Icons/instagram.svg";
import LinkedInIcon from "~/../public/assets/Social Media Icons/linkedin.svg";
import TwitterIcon from "~/../public/assets/Social Media Icons/x.svg";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function SocialIcons() {
  return (
    <span className="group relative inline-flex">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://linkedin.com/in/withviktor"
            target="_blank"
            className="relative z-10 transition-all duration-200 sm:translate-x-2 sm:-rotate-6 sm:transform sm:group-hover:translate-x-0 sm:group-hover:rotate-0"
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
            href="https://github.com/withviktor"
            target="_blank"
            className="relative z-10 transition-all duration-200 sm:rotate-3 sm:transform sm:group-hover:translate-x-2 sm:group-hover:rotate-0"
            
          >
            <Image
              src={GithubIcon as string}
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
            className="relative z-10 transition-all duration-200 sm:-translate-x-4 sm:-rotate-6 sm:transform sm:group-hover:translate-x-4 sm:group-hover:rotate-0"
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
            className="relative z-10 transition-all duration-200 sm:-translate-x-6 sm:rotate-3 sm:transform sm:group-hover:translate-x-6 sm:group-hover:rotate-0"
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
    </span>
  );
}
