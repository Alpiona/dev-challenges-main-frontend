import TopNavbar from "@/components/TopNavbar/TopNavbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DistributionStore",
  description: "Test for software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
