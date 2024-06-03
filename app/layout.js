import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
// import TopOfWeb from "@/components/TopOfWeb";
const inter = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
      {/* <TopOfWeb/> */}
      {/* <Navbar/> */}
      {children}</body>
    </html>
    </ClerkProvider>
  );
}
