import type { Metadata } from "next";
import "../../globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%5 - Shopcart online store",
    default: "Shopcart online store",
  },
  description: "Shopcart online store, Your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //Clerk Taking the data
    <ClerkProvider>
      <div className="font-poppins antialiased">
        <Header />
        <main className="flex-1 min-h-screen ">{children}</main>

        <Footer />
      </div>
    </ClerkProvider>
  );
}
