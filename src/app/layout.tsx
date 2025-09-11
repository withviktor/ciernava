import config from "@/../config";
import "highlight.js/styles/tokyo-night-dark.css";
import { Inter } from "next/font/google";
import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import Providers from "~/components/ui/providers";
import { getSEOTags } from "~/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `${config.appName} | %s`,
    default: config.appName,
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  description: config.appDescription,
  metadataBase: new URL(config.siteUrl),
  openGraph: {
    title: config.appName,
    description: config.appDescription,
    url: config.siteUrl,
    siteName: config.appName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.appName,
    description: config.appDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "freelance",
    "freelancer",
    "withviktor",
    "Viktor Čierňava",
    "Viktor",
    "Čierňava",
    "web",
    "designer",
    "developer",
    "web developer",
    "web designer",
  ],
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FFCDA3",
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
