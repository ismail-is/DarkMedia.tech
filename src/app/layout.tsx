import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dark Media — Premium Digital Creative Agency",
  description:
    "Dark Media is a premium digital creative agency specializing in websites, branding systems, graphic design, videography, and digital experiences that help ambitious businesses stand out.",
  keywords: "digital agency, web design, branding, videography, graphic design, digital experiences",
  openGraph: {
    title: "Dark Media — Premium Digital Creative Agency",
    description:
      "We create premium websites, branding systems, graphic design, videography, and digital experiences that help ambitious businesses stand out.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
