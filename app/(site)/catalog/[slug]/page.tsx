import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { pageMeta } from "@/lib/seo";
// Вот здесь мы импортируем наш новый компонент
import ProductDetailClient from "@/components/ProductDetailClient";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  // И вот здесь мы его используем вместо старой верстки
  return <ProductDetailClient product={product} />;
}

export const metadata = pageMeta({
  title: "Карточка товара",
  description: "Технические характеристики и цены на радиаторы Triumph Thermo.",
  urlPath: "/catalog"
});