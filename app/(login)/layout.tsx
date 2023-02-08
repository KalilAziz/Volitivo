import "@/styles/globals.css";
import Toaster from "@/components/toaster";
import { ReactNode } from "react";
import { Header } from "@/components/Header";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
