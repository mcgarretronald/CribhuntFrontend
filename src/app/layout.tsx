import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Crib Hunt - Find Your Perfect Home",
  description: "Crib Hunt helps you find and rent homes easily, with verified listings and direct landlord contact.",
  icons: {
    icon: "/Logo/logo.svg", // Ensure you have a favicon in the public directory
  },
  openGraph: {
    title: "Crib Hunt - Find Your Perfect Home",
    description: "Search for homes, view listings, and contact landlords directly with Crib Hunt.",
    url: "https://cribhunt.com",
    siteName: "Crib Hunt",
    images: [
      {
        url: "/Logo/logo.svg", // Replace with your actual logo path
        width: 1200,
        height: 630,
        alt: "Crib Hunt Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo/logo.svg" sizes="any" />
      </head>
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
