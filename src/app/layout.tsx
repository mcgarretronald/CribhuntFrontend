"use client"; 

import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Gluten, Jost } from "next/font/google"; 
import { metadata } from "./metadata"; 
import "./globals.css";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

const gluten = Gluten({
  variable: "--font-gluten",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${gluten.variable} ${jost.variable} antialiased`}>
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
          clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
          authorizationParams={{
            redirect_uri:"https://cribhunt.vercel.app/callback",
            audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
            scope: "openid profile email",
          }}
        >
          <NavBar/>
          {children}
          <Footer/>
        </Auth0Provider>
      </body>
    </html>
  );
}
