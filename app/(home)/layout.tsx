import "@/styles/globals.css";
import { ReactNode } from "react";
import { Header } from "@/app/(home)/_components/Header";
import { Footer } from "./_components/Footer";

type RootLayoutProps = {
  children: ReactNode;
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
