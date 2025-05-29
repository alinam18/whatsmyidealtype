import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";

export default function Page() {
  return (
    <section className="relative isolate flex-1 overflow-hidden flex items-center justify-center">
      {/* Foreground content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          What's My Ideal Type
        </h1>
        <Link href="/introduction" 
        className="underline text-lg sm:text-xl block">
          Start Here
        </Link>
      </div>
    </section>

  );
}