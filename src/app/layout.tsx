import "highlight.js/styles/tokyo-night-dark.css";
import "~/styles/globals.css";

import { type Metadata } from "next";

import Footer from "~/components/ui/footer";
import Navbar from "~/components/ui/navbar";
import Providers from "~/components/ui/providers";

export const metadata: Metadata = {
  title: "Viktor",
  description:
    "Hi, I’m a software engineer and a solo-preneur based in Czech Republic.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Viktor",
    description:
      "Hi, I’m a software engineer and a solo-preneur based in Czech Republic.",
    url: "https://withviktor.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
