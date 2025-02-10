import Image from "next/image";
import Navigation from "./Navigation";
import UserSection from "./UserSection";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex h-[10%] items-center px-12 py-5 bg-light_gray">
      <Navigation />
      <Link href="/">
        <Image
          className="text-center"
          src="/logo.svg"
          alt="logo"
          width={120}
          height={50}
        />
      </Link>
      <UserSection />
    </div>
  );
}
