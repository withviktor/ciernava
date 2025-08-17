import Image from "next/image";

import myPhoto from "~/../public/assets/2FFDA69D-7ECA-40C5-9E88-34F5C964209B_1_105_c-removebg-preview.png";
import DiscordIcon from "~/components/discord-icon";
import JellyKitIcon from "~/components/jellykit-icon";
import { Highlighter } from "~/components/magicui/highlighter";
import SocialIcons from "~/components/social-icons";

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
              Currently building <JellyKitIcon /> a starter kit for developers
            </p>
            <p className="flex flex-wrap items-center gap-2">
              <Highlighter action="underline" color="#FFCDA3">
                one click install
              </Highlighter>{" "}
              and you are ready to build!
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
