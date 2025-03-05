"use client"; // Ensure it's a Client Component

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Poppins, Roboto } from "next/font/google";
import { metadata } from "./metadata"; // Import the metadata
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title) ?? "Crib Hunt - Find Your Perfect Home"}</title>
        <meta
          name="description"
          content={
            metadata.description ??
            "Crib Hunt helps you find and rent homes easily, with verified listings and direct landlord contact."
          }
        />
        <link rel="icon" href="/Logo/logo.svg" sizes="any" />
      </head>
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
          clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
          authorizationParams={{
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI || "http://localhost:3000/callback",
            audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
            scope: "openid profile email",
          }}
        >
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}
