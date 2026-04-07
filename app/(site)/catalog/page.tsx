import CatalogClient from "./CatalogClient";
import { pageMeta } from "@/lib/seo";

// Серверный компонент — можно экспортировать metadata
export const metadata = pageMeta({
  title: "Каталог",
  description:
    "Каталог биметаллических радиаторов Triumph Thermo: фильтры по высоте, секциям, мощности и цене. Запрос расчёта онлайн.",
  urlPath: "/catalog",
});

export default function Page() {
  return <CatalogClient />;
}
