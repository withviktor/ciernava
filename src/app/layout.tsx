import "highlight.js/styles/tokyo-night-dark.css";
import "~/styles/globals.css";
import { Inter } from 'next/font/google'

import { type Metadata } from "next";
import Providers from "~/components/ui/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viktor Čierňava",
  description:
    "Hi, I’m a software engineer and a solo-preneur based in Czech Republic.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Viktor Čierňava",
    description:
      "Hi, I’m a software engineer and a solo-preneur based in Czech Republic.",
    url: "https://withviktor.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
