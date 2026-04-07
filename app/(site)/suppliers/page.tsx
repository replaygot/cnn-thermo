import { Container, Card } from "@/components/ui";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Поставщики",
  description:
    "Информация для поставщиков и партнёров Triumph Thermo. Совместные проекты, условия и взаимодействие.",
  urlPath: "/suppliers"
});

export default function SuppliersPage() {
  return (
    <>
      <section className="py-10 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow="Поставщики"
            title="Прозрачные условия и быстрые процессы"
            description="Если вы поставляете комплектующие или логистику — мы ценим стабильность, сроки и качество коммуникации."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card className="p-7">
              <div className="text-lg font-semibold tracking-premium text-ink">
                Что нам важно
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-stone-700">
                <li>• Стабильное качество поставок</li>
                <li>• Прозрачные сроки и документы</li>
                <li>• Готовность к масштабированию</li>
                <li>• Быстрая обратная связь</li>
              </ul>
              <div className="mt-4 text-xs text-stone-500">
                Микро-текст доверия: договор · контроль · планирование
              </div>
            </Card>

            <Card className="p-7">
              <div className="text-lg font-semibold tracking-premium text-ink">
                Формат сотрудничества
              </div>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Демо-текст: работа по договору, понятные объёмы, согласование
                спецификаций и контроль качества.
              </p>

              <div className="mt-4 grid gap-2 text-sm text-stone-700">
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Поставка под план и склад
                </div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Контроль входного качества
                </div>
                <div className="rounded-xl bg-stone-50 px-4 py-3">
                  ✅ Долгосрочные партнёрства
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
