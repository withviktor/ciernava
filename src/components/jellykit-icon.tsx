import Image from "next/image";
import Link from "next/link";

import JellyKit from "~/../public/assets/jellykit.svg";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function JellyKitIcon() {
  return (
    <span className="group relative inline-flex">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://jellykit.dev"
            target="_blank"
            className="relative z-10 transition-all duration-200"
          >
            <Image
              src={JellyKit as string}
              alt="JellyKit Lettermark"
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
