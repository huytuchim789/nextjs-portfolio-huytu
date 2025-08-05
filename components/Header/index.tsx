import React from "react";
import Link from "next/link";
import Nav from "../Nav";
import { Button } from "../ui/button";
import MobileNav from "../MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py12 text-white" role="banner">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo*/}
        <Link href="/" aria-label="Tran Huy Tu - Home">
          <h1 className="text-4xl font-semibold">
            THT <span className="text-accent">.</span>
          </h1>
        </Link>
        {/*desktop nav */}
        <nav className="hidden xl:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          <Nav />
          <Link href={"/contact"} aria-label="Contact me for hiring">
            <Button>Hire me</Button>
          </Link>
        </nav>

        {/*Mobile Navigator */}

        <div className="xl:hidden" aria-label="Mobile navigation">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
