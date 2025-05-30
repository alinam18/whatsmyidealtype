import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5 px-5">

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
        <Image
          src="/logo.png"        // Make sure this path is correct
          alt="Logo"
          width={52}             // Adjust size as needed
          height={52}
        />

        <Link href="/" className="text-2xl font-light">
          {metaData.title}
        </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          <a>
            <span className="font-light">Mode</span>
          </a>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
