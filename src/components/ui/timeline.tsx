"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: {
    description: string;
    bulletPoints?: string[];
  };
  emoji?: string;
}

const TimelineContent = ({ content }: { content: TimelineEntry['content'] }) => {
  return (
    <div className="space-y-4">
      <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200">
        {content.description}
      </p>
      {content.bulletPoints && content.bulletPoints.length > 0 && (
        <ul className="list-none space-y-3 pt-2">
          {content.bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-green-500 text-xl mt-1">•</span>
              <span className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-2xl md:text-5xl mb-6 text-black dark:text-white mx-auto font-bold">
          My Process
        </h2>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mx-auto max-w-2xl">
          I follow a structured approach to ensure successful project delivery and client satisfaction.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-6 text-left font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
              <TimelineContent content={item.content} />
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
