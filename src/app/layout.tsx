import type { Metadata } from "next";
import "./globals.css";
import "./normalize.css";
import FullScreenNavigation from "@/components/FullScreenNavigation/FullScreenNavigation";
import Footer from "@/components/Footer/Footer";
import { Montserrat, Poppins } from "next/font/google";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tom Zhang",
  description:
    "Welcome to my personal website! View my projects, prototypes, experiments, integrations, photos, etc. Enjoy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <FullScreenNavigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
