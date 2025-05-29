import Link from "next/link";

export default function AboutPage() {
    return (
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">Introduction</h1>
        <p className="mt-4 text-lg">
          You will get lots of picture. <br />
          Based on how attractive you find the picture, 
          scale them on 1 to 5. <br />
          At the end you will find out what your ideal type is!
        </p>
        <Link href="/game" 
        className="underline text-lg sm:text-xl block p-10">
          Start
        </Link>
      </main>
    );
  }
  