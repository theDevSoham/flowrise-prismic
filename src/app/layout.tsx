import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { nunito, nunitoSans } from "./lib/fonts";
import { PrismicPreview } from "@prismicio/next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowrise",
    description:
      settings.data.meta_description || "Flowrise is the relaxing app for you",
    openGraph: {
      images: [settings.data.og_image.url || ""],
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
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
