import "@/styles/globals.css";
import { ReactNode } from "react";
import { Header } from "@/app/(home)/_components/Header";
import { Footer } from "./_components/Footer";
import type { Metadata } from "next";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
