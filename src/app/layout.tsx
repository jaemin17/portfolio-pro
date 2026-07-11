import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interDisplay = localFont({
  src: [
    {
      path: "../fonts/InterDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InterDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/InterDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter-display",
  display: "swap",
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
    <html lang="zh-CN" className={interDisplay.variable}>
      <body>{children}</body>
    </html>
  );
}
