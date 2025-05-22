import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="flex px-4 md:px-6 lg:px-16 z-10 relative py-4 justify-between items-center">
      <section className="flex gap-72 items-center">
        <div>
          <span className="text-2xl font-bold">Logo</span>
        </div>
        <ul className="flex text-white font-medium gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Our Course</Link>
          </li>
          <li>
            <Link href="/">Resources</Link>
          </li>
        </ul>
      </section>
      <Button>Sign In</Button>
    </nav>
  );
}

export default Header;
