import "~/styles/globals.css";

import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["400", "700"],
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
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
