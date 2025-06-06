import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react";
import ModalProvider from "@/components/modals/modal-providers";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elevate Customer Support",
  description: "Elevate Customer Support App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider
            disableTransitionOnChange
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <ModalProvider>
              {children}
              <Toaster />
            </ModalProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
