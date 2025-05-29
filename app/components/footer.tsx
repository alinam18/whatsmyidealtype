"use client";

import React from "react";
import {
  FaGithub,

} from "react-icons/fa6";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
    </div>
  );
}

// export default function oldFooter() {
//   return (
//     <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
//       <time>© {YEAR}</time>{" "}
//       <a>
//         {metaData.title}
//       </a>
//       <style jsx>{`
//         @media screen and (max-width: 480px) {
//           article {
//             padding-top: 2rem;
//             padding-bottom: 4rem;
//           }
//         }
//       `}</style>
//       <p className="text-sm">
//         Built and maintained by{" "}
//         <a
//           href="https://github.com/alinam18/whatsmyidealtype"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline"
//         >
//           Alina and Josh
//         </a>
//         .
//       </p>
//       <SocialLinks />
//     </small>
//   );
// }

export default function Footer() {
  return (
    // <footer className="block mt-16 lg:mt-24 text-[#1C1C1C] dark:text-[#D4D4D4] text-sm">
      
    <footer className="w-full mt-16 lg:mt-24 text-[#1C1C1C] dark:text-[#D4D4D4] text-sm px-5">
      <div className="max-w-[1000px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="w-1/3 sm:text-left">
            <span>
              © {YEAR}{" "}
              <a href="/" className="underline">
                {metaData.title}
              </a>
            </span>
          </div>

          <div className="w-1/3 flex justify-center">
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
          </div>

          <div className="w-1/3 flex justify-center sm:justify-end text-center sm:text-right">
            <a
              href="https://github.com/alinam18/whatsmyidealtype"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center hover:opacity-80 transition"
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
