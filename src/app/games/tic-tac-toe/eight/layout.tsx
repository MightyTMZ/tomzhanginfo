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
  title: "Tom Zhang - 8x8 Tic Tac Toe",
  description: "Play tic tac toe today!",
};

export default function TicTacToeEightLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
