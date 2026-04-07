"use client";

import { Container, Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";
import { CheckCircle2, TrendingUp, Truck, ShieldCheck, Factory, Building2, Handshake } from "lucide-react";

export default function DealersClient() {
  const { open } = useModal();

  return (
    <section className="pt-32 pb-20 sm:pt-40 relative overflow-hidden min-h-screen bg-background transition-colors duration-300">

      {/* Декоративный блик — нейтральный синий убран, используем accent */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none opacity-20"
        style={{ background: "rgba(178,34,34,0.15)" }}
      />

      <Container className="relative z-10">
        {/* Заголовок */}
        <div className="mb-16">
          <span className="font-bold uppercase tracking-widest text-xs mb-2 block" style={{ color: "var(--accent)" }}>
            Партнёрство
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Почему наши радиаторы надёжнее
          </h1>
          <p className="text-muted max-w-3xl text-lg leading-relaxed font-medium">
            Мы делаем радиаторы так же, как делают оборудование для заводов: с запасом прочности, без компромиссов и с ответственностью за результат.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
          <div className="space-y-16">

            {/* 1. Ключевые преимущества */}
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: <Factory className="w-6 h-6" />, title: "Металлургический опыт", text: "Мы знаем, как ведёт себя металл при нагрузках и температурах. Это промышленная база в каждом изделии." },
                { icon: <ShieldCheck className="w-6 h-6" />, title: "Промышленное производство", text: "Не кустарные решения, а отработанные технологии и качество, подтверждённое испытаниями." },
                { icon: <TrendingUp className="w-6 h-6" />, title: "Маржинальность", text: "Выгодные дилерские цены, позволяющие зарабатывать до 30% с каждой продажи." },
                { icon: <Truck className="w-6 h-6" />, title: "Защита проектов", text: "Регистрируем объект за партнером. Гарантируем неизменность цены под ваш проект." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      background: "rgba(178,34,34,0.07)",
                      borderColor: "rgba(178,34,34,0.15)",
                      color: "var(--accent)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* 2. Что мы предлагаем */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Что мы предлагаем</h3>
              <div className="grid gap-4">
                {[
                  "Надёжный продукт премиум-класса, адаптированный под центральные системы отопления",
                  "Полностью стальной коллектор — без контакта теплоносителя с алюминием",
                  "Высокий запас прочности: устойчивость к гидроударам и агрессивным средам",
                  "Техническую поддержку на этапе подбора и реализации проекта",
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-secondary/50 border border-border">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                    <span className="text-foreground text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Блок для застройщиков — акцентный, кирпичный */}
            <div
              className="p-8 rounded-[32px] text-white"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 opacity-80" />
                <h3 className="text-xl font-bold">Для застройщиков и проектных организаций</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Снижение эксплуатационных рисков",
                  "Соответствие ГОСТ и стандартам",
                  "Работа в высотных зданиях",
                  "Имиджевое усиление объекта",
                ].map((li) => (
                  <li key={li} className="flex items-center gap-2 text-sm font-bold uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Формат сотрудничества */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Формат сотрудничества</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Поставки для жилых и коммерческих объектов",
                  "Участие в тендерах",
                  "Индивидуальные условия",
                  "Долгосрочные программы",
                ].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-border text-xs font-bold text-muted uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted italic text-sm">
                Мы заинтересованы в партнёрстве, основанном на качестве, доверии и результате.
              </p>
            </div>
          </div>

          {/* Правая колонка: CTA */}
          <div className="lg:sticky lg:top-32 h-fit p-8 rounded-[32px] bg-card border border-border shadow-xl">
            <div className="mb-8 text-center lg:text-left">
              <Handshake className="w-10 h-10 mb-4 mx-auto lg:mx-0" style={{ color: "var(--accent)" }} />
              <h3 className="text-2xl font-bold text-foreground mb-2">Начните работу</h3>
              <p className="text-muted text-sm font-medium">
                Получите доступ к оптовому прайс-листу и техническим спецификациям.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Дефолтный Button — кирпичный через ui.tsx */}
              <Button
                onClick={() => open("request")}
                className="w-full text-lg py-7 rounded-2xl"
              >
                Стать партнером
              </Button>

              <Button
                onClick={() => open("price")}
                variant="outline"
                className="w-full py-7 rounded-2xl border-border text-foreground hover:bg-secondary"
              >
                Скачать прайс-лист
              </Button>

              <p className="text-center text-xs text-muted pt-2">
                Заявки обрабатываются в течение 15 минут
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}