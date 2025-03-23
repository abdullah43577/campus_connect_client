import type { Metadata } from "next";
import "./globals.css";
import Provider from "state/Provider";

export const metadata: Metadata = {
  title: "Campus Connect",
  description: "Campus Connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#F8F8FA]">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
