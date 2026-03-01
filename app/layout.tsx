import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "rockland.news — Civic Transparency for Rockland County",
    template: "%s | rockland.news",
  },
  description:
    "Data-driven local government accountability for Rockland County, NY. Budget analysis, campaign finance tracking, development watch, and more. Every claim sourced. Every number traceable.",
  openGraph: {
    title: "rockland.news",
    description:
      "Civic transparency for Rockland County. Follow the money. Watch the development. Track the accountability.",
    url: "https://rockland.news",
    siteName: "rockland.news",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rockland.news",
    description: "Civic transparency for Rockland County, NY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
