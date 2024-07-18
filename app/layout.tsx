import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import { auth } from "@/auth";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import ModalProvider from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Bookworm",
    default: "Welcome | Bookworm",
  },
  description: "Take control of your reading habit and build a better life.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={cn("bg-slate-100", inter.className)}>
          <main>{children}</main>
          <Toaster />
          <ModalProvider />
        </body>
      </html>
    </SessionProvider>
  );
}
