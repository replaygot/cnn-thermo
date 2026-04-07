import Link from "next/link";
import { Product } from "@/data/products";

/*
  ProductCard — серверный компонент, поэтому никаких onMouse* хендлеров.
  Hover-эффекты через CSS-классы и глобальный <style>.
*/

export default function ProductCard({ product }: { product: Product }) {
  const formatPrice = (p: number) =>
    p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <>
      <style>{`
        .product-card:hover { border-color: rgba(178,34,34,0.4); }
        .product-card:hover .card-title { color: var(--accent); }
        .product-card:hover .card-arrow {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }
      `}</style>

      <Link href={`/catalog/${product.slug}`} className="group block h-full">
        <div className="product-card relative h-full flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

          {/* Бейдж наличия */}
          <div className="flex justify-between items-start mb-4">
            <div
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${
                product.inStock
                  ? "border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10"
                  : "border-red-500/30 text-red-600 dark:text-red-400 bg-red-500/10"
              }`}
            >
              {product.inStock ? "В наличии" : "Под заказ"}
            </div>
            {product.inStock && (
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 8px var(--accent)",
                }}
              />
            )}
          </div>

          {/* Картинка */}
          <div className="aspect-[4/3] w-full rounded-xl bg-secondary flex items-center justify-center mb-5 overflow-hidden group-hover:bg-secondary/80 transition-colors">
            <span className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity grayscale group-hover:grayscale-0">
              ☢️
            </span>
          </div>

          {/* Инфо */}
          <div className="mt-auto">
            <h3 className="card-title text-lg font-bold text-foreground line-clamp-2 mb-2 transition-colors">
              {product.name}
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs text-muted mb-4">
              <div className="bg-secondary rounded px-2 py-1">
                Секций: <span className="text-foreground font-medium">{product.sections}</span>
              </div>
              <div className="bg-secondary rounded px-2 py-1">
                Высота: <span className="text-foreground font-medium">{product.heightMm}</span>
              </div>
              <div className="bg-secondary rounded px-2 py-1 col-span-2">
                Мощность: <span className="text-foreground font-medium">{product.powerW} Вт</span>
              </div>
            </div>

            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted">Цена за шт.</div>
                <div className="text-xl font-bold text-foreground">
                  {formatPrice(product.priceKzt)} ₸
                </div>
              </div>
              <div className="card-arrow h-8 w-8 rounded-full border border-border flex items-center justify-center text-foreground transition-all">
                →
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}