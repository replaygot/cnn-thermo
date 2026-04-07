import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header"; // Подключаем наш новый Header
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Triumph Thermo",
  description: "Премиальные биметаллические радиаторы",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      {/* Глобальный черный фон для всего сайта */}
      <body className="min-h-screen bg-[#050505] text-white antialiased selection:bg-heat selection:text-white">
        <ScrollProgress />
        <Providers>
          
          {/* Здесь встанет твой хедер (который мы написали выше) */}
          <Header />

          {/* Основной контент */}
          <main>
            {children}
          </main>
          
          <Footer />
          <WhatsAppButton />
          
        </Providers>
      </body>
    </html>
  );
}