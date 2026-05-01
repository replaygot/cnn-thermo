import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header"; // Подключаем наш новый Header
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — премиальные биметаллические радиаторы`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Биметаллические радиаторы Triumph Thermo от завода СНН в Павлодаре. 100% стальной коллектор, давление 30 атм, гарантия 10 лет.",
  applicationName: SITE_NAME,
  keywords: [
    "биметаллические радиаторы",
    "радиаторы отопления",
    "Triumph Thermo",
    "Казахстан",
    "Павлодар",
    "СНН",
    "радиаторы оптом",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: `${SITE_NAME} — премиальные биметаллические радиаторы`,
    description:
      "Биметаллические радиаторы из Казахстана. Промышленное производство, 100% стальной коллектор, гарантия 10 лет.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ru_KZ",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — премиальные биметаллические радиаторы`,
    description:
      "Биметаллические радиаторы из Казахстана. Промышленное производство, гарантия 10 лет.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Завод СНН",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description:
    "Завод полного цикла биметаллических радиаторов в Казахстане. 25 лет металлургического опыта, 120 000 тонн литья в год.",
  telephone: "+7-776-134-63-03",
  email: "cnn_pavlodar@mail.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Северная промзона, 52",
    addressLocality: "Павлодар",
    addressCountry: "KZ",
  },
  sameAs: [
    "https://www.instagram.com/_triumphthermo_",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
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