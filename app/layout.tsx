import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sae Pos - Aplikasi Kasir Terintegrasi",
  description:
    "Urus bisnis jadi lebih santuy & cuan. Sae Pos bantuin kamu ngurus kasir, stok, sampe laporan keuangan sambil rebahan.",
  icons: {
    icon: "/favicon.ico",
  },
};

import QueryProvider from "@/components/providers/query-provider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased font-sans`}>
        <QueryProvider>
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
        </QueryProvider>
      </body>
    </html>
  );
}
