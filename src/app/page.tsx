import Image from "next/image";

import myPhoto from "~/../public/assets/2FFDA69D-7ECA-40C5-9E88-34F5C964209B_1_105_c-removebg-preview.png";
import DiscordIcon from "~/components/discord-icon";
import SocialIcons from "~/components/social-icons";

import { Highlighter } from "~/components/magicui/highlighter";

export default function HomePage() {
  return (
    <div className="mt-0 flex w-full flex-col items-center p-8 pt-10 sm:mt-20">
      <div className="flex w-full max-w-[1300px] flex-row items-center justify-center gap-20">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4 text-2xl font-light text-gray-800">
            <p className="mb-10 flex flex-wrap items-center gap-2">
              Hey, my name is Viktor Čierňava{" "}
              <span>
                <Image
                  src={myPhoto}
                  height={42}
                  width={42}
                  alt="This is Viktor"
                  className="inline-flex rounded-full"
                />
              </span>
            </p>
            <p className="flex flex-wrap items-center gap-2">
              Software Engineer turned Entrepreneur.
            </p>
            <p className="flex flex-wrap items-center gap-2">
              I love building things and helping people.
            </p>
            <p className="mt-10 flex flex-wrap items-center gap-2">
              Working on <Highlighter action="underline" strokeWidth={2} color="#FFCDA3">native applications</Highlighter> for enterprise
            </p>
            <p className="flex flex-wrap items-center gap-2">
              using TypeScript, React, Flutter and Swift.
            </p>
            <p className="mt-10 flex flex-wrap items-center gap-2">
              Exploring the world of microcontrollers
            </p>
            <p className="flex flex-wrap items-center gap-2">
              and crafting IoT devices with C++ and Python.
            </p>
            <p className="mt-10 flex flex-wrap items-center gap-2">
              Check me out on <SocialIcons />
            </p>
            <p className="flex flex-wrap items-center gap-2">
              or join my community on <DiscordIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
