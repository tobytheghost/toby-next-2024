import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { Header } from "~/components/sections/Header";
import { Footer } from "~/components/sections/Footer";

const inter = Poppins({
  weight: ["200", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Toby Gates | Senior Software Engineer",
  description:
    "Senior Software Engineer based in Bedfordshire, UK working on bespoke, fast, responsive and secure web applications.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
