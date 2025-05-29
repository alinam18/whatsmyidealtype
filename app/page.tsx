import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      
      <h1 className="text-center text-5xl font-bold mt-4">
        What's My Ideal Type
      </h1>

      <div className="text-center mt-4">
        <a href="#" className="underline">
          Click here
        </a>
      </div>

      <footer className="text-center mt-10 text-sm text-gray-600">
        <p>
          Built and maintained by{" "}
          <a
            href="https://github.com/alinam18/whatsmyidealtype"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Alina and Josh
          </a>
          .
        </p>
      </footer>
    </section>
  );
}