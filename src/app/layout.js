import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDSC Chandigarh University",
  image: "",
  type: "website",
  description: "This is the leaderboard for the GDSC CU Jams.",
  keywords: ["gccp", "jams", "pu", "gdscpu"],
  robots: "index,follow",

  "og:title": "GDSC CU Leaderboard",
  "og:image": "",
  "og:description": "This is the leaderboard for the GDSC CU Jams.",
  "twitter:card": "summary_large_image",
  "twitter:title": "GDSC CU Leaderboard",
  "twitter:description": "This is the leaderboard for the GDSC CU Jams.",
  "twitter:image": "",
  "twitter:site": "@gdsccu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head></head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
