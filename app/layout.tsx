import type { Metadata } from "next";
import { StarField } from "@/components/Layout/Starfield/StarField";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Footer from "@/components/Layout/Footer/Footer";
const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
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
    <html lang="en" className={`${notoSans.variable} antialiased`}>
      {/* Plain top-aligned document flow — no full-height flex column. Content
          that is vertically centred in the viewport re-centres on every height
          change, which turns any reflow into a visible jump. */}
      <body className="flex min-h-dvh flex-col">
        <StarField />
        {/* The design layers content over the canvas with an explicit
            stacking context, rather than pushing the canvas to a negative
            z-index. Matching that keeps sticky headers behaving. */}
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
