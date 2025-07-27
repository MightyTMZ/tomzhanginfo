import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "Tom Zhang - Talking Ben Online",
  description:
    "Talking Ben Online. Type in your question and Ben will answer you!",
};

export default function RandomColorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
