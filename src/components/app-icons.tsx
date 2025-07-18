import Image from "next/image";
import Link from "next/link";

import JellyKitIcon from "~/../public/assets/JellyKit.svg";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function AppIcons() {
  return (
    <span className="group relative inline-flex">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://jellykit.dev"
            target="_blank"
            className="relative z-10 transition-all duration-200 sm:translate-x-2 sm:-rotate-6 sm:transform sm:group-hover:translate-x-0 sm:group-hover:rotate-0"
          >
            <Image
              src={JellyKitIcon as string}
              alt="JellyKit"
              width={42}
              height={42}
              className="block rounded-md"
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent>JellyKit</TooltipContent>
      </Tooltip>
    </span>
  );
}
