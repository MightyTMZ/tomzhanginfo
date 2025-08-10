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
  title: "Tom Zhang - Battleship",
  description: "Play battleship today!",
};

export default function BattleshipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
