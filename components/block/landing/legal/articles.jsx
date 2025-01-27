"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Item = dynamic(
  () => import("@/components/block/landing/legal/article-item"),
  { ssr: false },
);

export default function Articles({ legals, latestUpdateDate }) {
  return (
    <div className="flex flex-col items-center justify-center relative mt-10 pt-20">
      <DotPattern className={cn("z-0 absolute inset-0 fill-neutral-400")} />
      <div className="z-10 grid grid-cols-1 md:grid-cols-4 gap-16 w-full md:max-w-screen-lg min-h-screen">
        {legals.map((data) => (
          <Item key={data.uuid} data={data} />
        ))}
      </div>
      <p className="z-10 bg-white text-sm font-light text-neutral-600 text-center leading-snug mt-6 mb-16 md:max-w-xl font-mono p-1">
        last update on {latestUpdateDate}
      </p>
    </div>
  );
}
