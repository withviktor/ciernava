import "~/styles/globals.css";

import { type Metadata } from "next";
import Providers from "~/components/ui/providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
