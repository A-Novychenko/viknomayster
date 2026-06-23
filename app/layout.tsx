import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://viknomayster.vercel.app'), 
  title: "Ремонт та встановлення вікон у Києві | ViknoMayster",
  description: "Ремонт та встановлення віконних конструкцій у Києві та передмісті. Безкоштовний виїзд майстра в день звернення. Гарантія на роботи.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="antialiased text-gray-900 bg-gray-50 flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}