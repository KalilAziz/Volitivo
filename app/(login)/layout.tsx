import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
