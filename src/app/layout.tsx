import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ResizeNavbar } from "./components/ResizeNavbar";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import { Toaster } from "react-hot-toast";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Paul Pacatang - Portfolio",
  description:
    "A portfolio showcasing my skills, projects, and journey as a software developer.",
  icons: {
    icon: "/assets/JP.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ style: { marginRight: "10px" } }}
        />
        <SmoothScrollProvider>
          <ResizeNavbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
