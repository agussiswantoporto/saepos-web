import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sae Pos - Aplikasi Kasir Terintegrasi",
  description:
    "Urus bisnis jadi lebih santuy & cuan. Sae Pos bantuin kamu ngurus kasir, stok, sampe laporan keuangan sambil rebahan.",
  icons: {
    icon: "/favicon.ico",
  },
};

import QueryProvider from "@/components/providers/query-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
