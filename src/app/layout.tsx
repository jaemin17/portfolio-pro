import type { Metadata } from "next";
import Image from "next/image";
import { Caveat, IBM_Plex_Mono, Noto_Sans_SC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "../fonts/Geist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Geist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Jiamin Li — Portfolio Pro",
  description: "Professional portfolio by Jiamin Li.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${ibmPlexMono.variable} ${caveat.variable} ${notoSansSC.variable}`}
    >
      <body>
        <div className="openingLoader" aria-hidden="true">
          <div className="openingLoaderContent">
            <Image
              className="openingLoaderImage"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/opening-loader.gif`}
              alt=""
              width={1536}
              height={2048}
              priority
              unoptimized
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
