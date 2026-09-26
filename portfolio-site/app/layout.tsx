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

const description =
  "Cybersecurity & AI engineering student — AI code security, security agents, LLM security and Zero Trust IAM.";

// Vercel injects the production domain at build time
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Safa Hichri — Cybersecurity & AI",
  description,
  keywords: [
    "Safa Hichri",
    "Cybersecurity",
    "AI Security",
    "LLM Security",
    "IAM",
    "Digital Forensics",
  ],
  authors: [{ name: "Safa Hichri" }],
  openGraph: {
    title: "Safa Hichri — Cybersecurity & AI",
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
