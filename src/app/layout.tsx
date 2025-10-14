import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { createClient } from "@/prismicio";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Flowrise",
    description:
      page.data.meta_description || "Flowrise is the relaxing app for you",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clsx(
          nunito.className,
          nunitoSans.className
        )} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
