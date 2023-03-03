import "@/styles/globals.css";
import { ReactNode } from "react";

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
