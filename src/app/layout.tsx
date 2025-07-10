import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ResizeNavbar } from "./components/ResizeNavbar";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Paul Pacatang - Portfolio",
  description: "A portfolio showcasing my skills, projects, and journey as a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <SmoothScrollProvider >
          <ResizeNavbar />
          <div>
            {children}
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}