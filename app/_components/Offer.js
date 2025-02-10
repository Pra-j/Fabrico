import Link from "next/link";

export default function Offer() {
  return (
    <div className="bg-black px-12 h-[5%] py-2 text-xs flex justify-between items-center text-light_gray">
      <p className="flex-1">EN/UK</p>
      <p className="flex-1 text-center">
        5% discount on subscribing our newsletter
      </p>
      <div className="flex flex-1 justify-end gap-4">
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
    </div>
  );
}
