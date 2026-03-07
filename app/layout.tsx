import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PlausibleProvider, OrganizationJsonLd } from "./components/tracking";

export const metadata: Metadata = {
  title: {
    default: "rockland.news — Civic Transparency for Rockland County",
    template: "%s | rockland.news",
  },
  description:
    "Data-driven local government accountability for Rockland County, NY. Budget analysis, school spending, legislative transparency, and more. Every claim sourced. Every number traceable.",
  openGraph: {
    title: "rockland.news",
    description:
      "Civic transparency for Rockland County. Follow the money. Track the accountability.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rockland.news",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <PlausibleProvider />
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* beehiiv subscribe form embed */}
        <script
          async
          src="https://subscribe-forms.beehiiv.com/embed.js"
        />
        {/* Chatbase floating widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "YcpPEoUDSRWvgvyQ6gOyR",
                domain: "www.chatbase.co"
              };
            `,
          }}
        />
        <script
          src="https://www.chatbase.co/embed.min.js"
          data-chatbotid="YcpPEoUDSRWvgvyQ6gOyR"
          data-domain="www.chatbase.co"
          defer
        />
      </body>
    </html>
  );
}
