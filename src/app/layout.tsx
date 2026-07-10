import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
