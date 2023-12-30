import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full p-4">
      <nav className="flex flex-grow flex-row justify-between items-center">
        <div className="p-2">
          <p>KINGFRANKCO</p>
        </div>
        <div className="flex flex-row items-center justify-between space-x-6">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/">
            <p>Home</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
