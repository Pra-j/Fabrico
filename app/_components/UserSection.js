import Link from "next/link";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function UserSection() {
  return (
    <div className="flex-1 flex justify-end gap-6">
      <Link href="/search">
        <MagnifyingGlassIcon className="size-5 text-black cursor-pointer" />
      </Link>
      <Link href="/profile">
        <UserIcon className="size-5 text-black cursor-pointer" />
      </Link>
      <Link href="/cart">
        <ShoppingBagIcon className="size-5 text-black cursor-pointer" />
      </Link>
      <Link href="/favorites">
        <HeartIcon className="size-5 text-black cursor-pointer" />
      </Link>
    </div>
  );
}
