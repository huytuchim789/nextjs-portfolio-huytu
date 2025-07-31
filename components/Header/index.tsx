import React from "react";
import Link from "next/link";
import Nav from "../Nav";
import { Button } from "../ui/button";
import MobileNav from "../MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Loki <span className="text-accent">.</span>
          </h1>
        </Link>
        {/*desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*Mobile Navigator */}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
