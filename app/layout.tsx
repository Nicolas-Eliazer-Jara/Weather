import type { Metadata } from "next";
import 'leaflet/dist/leaflet.css';
import "./globals.css";



export const metadata: Metadata = {
  title: "Weather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mt-10 mb-10">
        {children}
      </body>
    </html>
  );
}
