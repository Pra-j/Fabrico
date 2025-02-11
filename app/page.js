import Hero from "./_components/Hero";
import NewCollection from "./_components/NewCollection";
import ReadyToWear from "./_components/ReadyToWear";
import Sneakers from "./_components/Sneakers";
import NewArrival from "./_components/NewArrival";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="px-12 bg-light_gray relative">
        <ReadyToWear />
        <NewCollection />
        <Sneakers />
        <NewArrival />
      </main>
    </>
  );
}
