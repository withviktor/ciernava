import "~/styles/globals.css";

import { type Metadata } from "next";
import Navbar from "~/components/ui/navbar";
import Providers from "~/components/ui/providers";
import Footer from "~/components/ui/footer";

export const metadata: Metadata = {
  title: "Viktor",
  description:
    "Hi, I’m a software engineer and a solo-preneur based in Czech Republic.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
