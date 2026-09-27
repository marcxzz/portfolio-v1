import { Geist, Geist_Mono } from "next/font/google"
// import { ThemeProvider } from "next-themes";
import "./globals.css";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Developer Portfolio | Marco Angioni",
  description: "Young Web Developer based in Cagliari, Sardinia (Italy)",
};

const geist = Geist({
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  display: "swap",
  variable: "--font-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {/* <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />

          {children}
          
          <Footer />
        </ThemeProvider> */}

        <ComingSoon />
      </body>
    </html>
  );
}