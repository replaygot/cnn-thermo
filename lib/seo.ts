import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://cnn-thermo.kz");

export const SITE_NAME = "Triumph Thermo";
export const OG_IMAGE = "/og-image.jpg";

export function pageMeta(params: {
  title: string;
  description: string;
  urlPath: string;
  ogImage?: string;
}): Metadata {
  const url = params.urlPath.startsWith("http") ? params.urlPath : params.urlPath;
  const image = params.ogImage ?? OG_IMAGE;

  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      siteName: SITE_NAME,
      locale: "ru_KZ",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: params.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [image],
    },
  };
}
