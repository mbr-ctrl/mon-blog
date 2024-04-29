import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoMmb from "../../public/mmb-rb.png";
import { ModeToggle } from "./model-toggle";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div>
      <nav className="navbar w-full px-20 py-3 shadow-lg bg-gray-400 dark:bg-background">
        <div className="flex items-center">
          <section className="nav-left font-bold mr-auto text-xl">
            <Link href="/">
              <Image src={logoMmb} alt="Logo MmB" width={120} height={120} />
            </Link>
          </section>
          <ul className="nav-links flex gap-16 items-center">
            <Link href="/">
              <li className="hover:underline">Accueil</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contacts">
              <li>Contacts</li>
            </Link>
            <ModeToggle />
          </ul>
        </div>
      </nav>
    </div>
  );
}
