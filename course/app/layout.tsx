import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import ToastProvider from "@/components/providers/toaster-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Course",
  description: "Created by mtoan",
  icons: {
    icon: "/course.svg", // Path to your favicon file
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
