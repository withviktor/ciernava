"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const AudioWave = ({ children }: React.PropsWithChildren) => {
  const [heights, setHeights] = useState<number[]>(Array(14).fill(4));

  useEffect(() => {
    const generateRandomHeights = () =>
      Array.from({ length: 14 }, () => 4 + Math.random() * 4);

    setHeights(generateRandomHeights());
  }, []);

  const getRandomDelay = (i: number) => Math.random() * 0.5 + i * 0.1;

  const getRandomHeight = (i: number) => Math.random() * 0.5 + i * 0.1;

  return (
    <div className="flex h-32 w-full items-center justify-between">
      {heights.slice(0, 7).map((height, i) => (
        <motion.div
          key={i}
          className="bar w-2 rounded bg-muted"
          style={{ height: `${height}rem` }}
          animate={{
            height: [
              `${height}rem`,
              `${getRandomHeight(height)}rem`,
              `${height}rem`,
            ],
          }}
          transition={{
            delay: getRandomDelay(i + 7),
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {children}
      {heights.slice(7).map((height, i) => (
        <motion.div
          key={i + 7}
          className="bar w-2 rounded bg-muted"
          style={{ height: `${height}rem` }}
          animate={{
            height: [
              `${height}rem`,
              `${getRandomHeight(height)}rem`,
              `${height}rem`,
            ],
          }}
          transition={{
            delay: getRandomDelay(i + 7),
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AudioWave;
