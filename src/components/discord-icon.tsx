import Image from "next/image";
import Link from "next/link";

import Discord from "~/../public/assets/Social Media Icons/discord.svg";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function DiscordIcon() {
  return (
    <span className="group relative inline-flex">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://discord.gg/xevyBvVedU"
            target="_blank"
            className="relative z-10 transition-all duration-200"
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
        <TooltipContent>Viktor’s dev club 🦄</TooltipContent>
      </Tooltip>
    </span>
  );
}
