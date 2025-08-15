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
  title: "Tom Zhang - Hold the Button",
  description: "Play 'hold the button' today!",
};

export default function HoldTheButtonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
