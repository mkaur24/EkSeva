import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "EkSeva® | Thoughtful Food for Community Kitchens",
    template: "%s | EkSeva®"
  },
  description:
    "EkSeva® is a values-led food brand focused on thoughtful sourcing and long-term care for community kitchens and households.",
  openGraph: {
    title: "EkSeva®",
    description:
      "Thoughtful sourcing. Better ingredients. Long-term care for community kitchens and households.",
    type: "website",
    siteName: "EkSeva®"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
