import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raymond Hao | Software Engineer",
  description:
    "Raymond Hao (Bunz) — 1st-year CS student & aspiring software engineer. Explore my projects, tech stack, and journey.",
  keywords: [
    "Raymond Hao",
    "Bunz",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "Python",
  ],
  authors: [{ name: "Raymond Hao" }],
  openGraph: {
    title: "Raymond Hao | Software Engineer",
    description:
      "Raymond Hao (Bunz) — aspiring software engineer. Projects, skills, and more.",
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
        className={`${ibmPlexMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
