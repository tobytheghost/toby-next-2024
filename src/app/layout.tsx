import { Poppins } from "next/font/google";
import { Header } from "~/components/sections/Header";
import { Footer } from "~/components/sections/Footer";

import "~/styles/globals.css";
import "highlight.js/styles/github-dark.css";

const inter = Poppins({
  weight: ["200", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col font-sans ${inter.variable}`}
      >
        <Header />
        <main className="flex flex-grow flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
