import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import BackToTop from "@/components/shared/BackToTop";

export const metadata: Metadata = {
  title: "NWS Custom Homes | Built for the Way You Live",
  description:
    "Custom homes and whole-home remodels across Richmond, Katy & Sugar Land, crafted since 2007.",
  icons: {
    icon: "/icon.png",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'var(--font-dm-sans)', backgroundColor: '#F7F4EF', color: '#2B2118' }}>
        <NavBar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
