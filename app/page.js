"use client";

import FeaturedItems from "./_components/FeaturedItems";
import ReadyToWear from "./_components/ReadyToWear";

export default function Home() {
  return (
    <>
      <FeaturedItems />
      <main className="px-12 bg-light_gray">
        <ReadyToWear />
      </main>
    </>
  );
}
