import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ÉLITEmanu | Exclusive Executive Community",
  description: "Red privada para mujeres ejecutivas en Santiago, Nueva York y Miami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="es">
      <body className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
