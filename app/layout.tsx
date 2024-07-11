import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snipia",
  description: "Save your code snippets in one place",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
      variables: { colorPrimary: '#d44700' },
      elements: { card: 'bg-main-700 shadow-none' }
    }}>
      <html lang='en'>
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
