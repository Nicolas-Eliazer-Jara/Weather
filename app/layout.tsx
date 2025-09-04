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
      <body
        className="mt-10 mb-10 flex justify-center items-start min-h-screen"
        style={{
          background: "radial-gradient(circle, rgba(238,174,174,1) 16%, rgba(148,220,233,1) 100%)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="w-full max-w-6xl rounded-3xl p-6 ">
          {children}
        </div>
      </body>
    </html>
  );
}
