import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mar Mathew Kavukatt — Servant of God",
  description:
    "Official website dedicated to the life, legacy, and cause of canonization of Servant of God Mar Mathew Kavukatt, the first Archbishop of Changanacherry.",
  keywords: [
    "Mar Mathew Kavukatt",
    "Servant of God",
    "Archbishop of Changanacherry",
    "Syro-Malabar Church",
    "Catholic Church India",
    "Canonization",
    "Catholic Saint Cause",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-transparent text-[#2A1608] font-sans selection:bg-[#6D1414] selection:text-white">
        {children}
      </body>
    </html>
  );
}
