import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/app/assets/Laban- (1).png";
function Header() {
  return (
    <nav className="flex px-4 md:px-6 lg:px-16 z-10 fixed w-full top-0 left-0 backdrop-blur-lg bg-slate-50 py-4 justify-between items-center">
      <section className="flex gap-72 items-center">
        <div>
          <Image src={logo} alt="logo" height={34} />
        </div>
        <ul className="flex text-black font-medium gap-3">
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
