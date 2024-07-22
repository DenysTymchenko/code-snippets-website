import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-main-700 p-4 flex justify-between h-16">
      <Link href='/'>
        <Image src='/logo.png' alt='Logo' width={150} height={48} />
      </Link>
      <UserButton />
    </header>
  )
}
