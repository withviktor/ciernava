import type { ConfigProps } from "./types/config";

const config: ConfigProps = {
  // REQUIRED
  appName: "Web Designer - Viktor Čierňava",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Viktor Čierňava - Web Designer Ostrava, tvořím úspěšné webové stránky",
  // REQUIRED (no https://, not trailing slash at the end, just the naked domain)
  domainName: "withviktor.com",
  stripe: {
    plans: [],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  resend: {
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Viktor Čierňava <noreply@marketing.withviktor.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Viktor Čierňava <business@withviktor.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty you won't be able to offer customer support."
    supportEmail: "business@withviktor.com",
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard).
    loginUrl: "/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts.
    callbackUrl: "/dashboard",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export default config;
