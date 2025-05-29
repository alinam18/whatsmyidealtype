import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="h-full flex flex-col">
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
    // <html lang="en" className={`${inter.className}`}>
    //   <head>
    //     <link
    //       rel="alternate"
    //       type="application/rss+xml"
    //       href="/rss.xml"
    //       title="RSS Feed"
    //     />
    //     <link
    //       rel="alternate"
    //       type="application/atom+xml"
    //       href="/atom.xml"
    //       title="Atom Feed"
    //     />
    //     <link
    //       rel="alternate"
    //       type="application/feed+json"
    //       href="/feed.json"
    //       title="JSON Feed"
    //     />
    //   </head>
    //   <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
    //     <ThemeProvider
    //       attribute="class"
    //       defaultTheme="system"
    //       enableSystem
    //       disableTransitionOnChange
    //     >
    //       {/* <main className="flex-auto w-full flex flex-col px-2 md:px-4"> */}
    //       <main className="flex-1 flex flex-col w-full">

    //       {/* </main> */}
    //         <Navbar />
    //         {children}
    //         <Analytics />
    //         <SpeedInsights />
    //       </main>
    //       <div className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[624px] w-full">
    //         <Footer />
    //       </div>
    //     </ThemeProvider>
    //   </body>
    // </html>
  );
}
