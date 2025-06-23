"use client";

import Image from "next/image";

import myPhoto from "~/../public/assets/2FFDA69D-7ECA-40C5-9E88-34F5C964209B_1_105_c-removebg-preview.png";
import Link from "next/link";
import SocialIcons from "~/components/social-icons";

export default function HomePage() {
  return (
    <div className="mt-0 flex w-full flex-col items-center p-8 pt-10 sm:mt-20">
      <div className="flex w-full max-w-[1300px] flex-row items-center justify-center gap-20">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4 text-2xl font-light text-gray-800">
            <p className="mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
              Hi, my name is Viktor Čierňava{" "}
              <span>
                <Image
                  src={myPhoto}
                  height={42}
                  width={42}
                  alt="This is Viktor"
                  className="inline-block rounded-full"
                />
              </span>
            </p>
            <p>I build productivity apps</p>
            <p className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
              and share videos about how I build them <SocialIcons />
            </p>
            <p className="mt-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
              Lastly I run a small company{" "}
              <Link
                href="https://ghostdigital.cz"
                className="text-blue-500 hover:underline"
              >
                Ghost Digital
              </Link>
            </p>
            <p>where we build custom software solutions for our clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
