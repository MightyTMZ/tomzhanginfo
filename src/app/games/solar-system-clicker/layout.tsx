import type { Metadata } from "next";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "Tom Zhang - Solar System Clicker",
  description:
    "Solar System Clicker. Start clicking on the planets in our solar system.",
};

export default function SolarSystemClickerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
