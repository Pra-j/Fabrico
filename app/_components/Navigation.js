import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="flex gap-4 flex-1 text-sm uppercase text-black">
      <li>
        <Link href="/category/man">Man</Link>
      </li>
      <li>
        <Link href="/category/woman">Woman</Link>
      </li>
      <li>
        <Link href="/category/kids">Kids</Link>
      </li>
      <li>
        <Link href="/category/explore">Explore</Link>
      </li>
      <li>
        <Link href="/category/new">New</Link>
      </li>
    </ul>
  );
}
