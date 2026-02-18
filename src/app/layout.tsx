import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raymond Hao | Full Stack Developer",
  description:
    "Raymond Hao (Bunz) — 1st-year CS student & aspiring full-stack developer. Explore my projects, tech stack, and journey.",
  keywords: [
    "Raymond Hao",
    "Bunz",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Python",
  ],
  authors: [{ name: "Raymond Hao" }],
  openGraph: {
    title: "Raymond Hao | Full Stack Developer",
    description:
      "Raymond Hao (Bunz) — aspiring full-stack developer. Projects, skills, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
