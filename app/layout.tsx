import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StarField } from "@/components/starfield/StarField";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "David McDougal — Senior Full-Stack Engineer | React, Next.js, TypeScript",
    template:
      "%s | David McDougal — Senior Full-Stack Engineer | React, Next.js, TypeScript",
  },
  description:
    "I build solutions for complex problems across the full stack of the web that as resulted in millions of dollars in revenue. I'm located in Provo, Utah and I have a passion for building products that create real value for users and businesses around the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <StarField />
        {/* The design layers content over the canvas with an explicit
            stacking context, rather than pushing the canvas to a negative
            z-index. Matching that keeps sticky headers behaving. */}
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
