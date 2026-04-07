import DealersClient from "./DealersClient";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Для дилеров / партнёров",
  description:
    "Страница для партнёров Triumph Thermo: условия, прайс, поддержка продаж и проектные поставки в Казахстане.",
  urlPath: "/dealers",
});

export default function Page() {
  return <DealersClient />;
}