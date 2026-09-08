import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Carlos Rodríguez — Autobiografía",
  description:
    "Autobiografía personal de Carlos Andrés Rodríguez Troncoso: quién soy, mi historia, mi formación y hacia dónde voy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300,0,0&display=swap"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-[104px] lg:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
