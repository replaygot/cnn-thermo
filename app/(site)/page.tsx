import Link from "next/link";
import { Container, Button } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { pageMeta } from "@/lib/seo";
import Certificates from "@/components/Certificates";
import Calculator from "@/components/Calc";
import HomeHero from "@/components/HomeHero";
import ProductionSection from "@/components/ProductionSection";

export const metadata = pageMeta({
  title: "Главная",
  description:
    "Премиальные биметаллические радиаторы Triumph Thermo. Каталог, подбор мощности, заявки и партнёрство в Казахстане.",
  urlPath: "/"
});

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* === VIDEO HERO SECTION === */}
      {/*
        bg-black убран — hero всегда поверх видео, фон не виден.
        Оставляем bg-background как fallback если видео не загрузится.
      */}
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">

        {/* Видео-фон */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-60"
            poster="/hero-poster.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Градиент снизу для плавного перехода в контент */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Контент поверх видео */}
        <Container className="relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">

            {/* Бейдж "Казахстан" */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-white backdrop-blur-md text-sm font-medium">
              <span className="relative flex h-2 w-2">
                {/* Пульсирующая точка — используем CSS переменную акцента (кирпичный) */}
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </span>
              Производство в Казахстане
            </div>

            {/* Заголовок — белый т.к. поверх тёмного видео, акцентное слово через CSS var */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Triumph Thermo — <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, var(--accent), var(--accent-2))",
                }}
              >
                премиальный
              </span>{" "}
              биметалл
            </h1>

            <p className="text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed drop-shadow-md">
              Радиаторы, которые выглядят дорого и работают стабильно.
              Лаконичный дизайн, уверенная теплоотдача, чистая инженерия.
            </p>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/catalog">
                {/* Акцентная кнопка — кирпичный из CSS переменной */}
                <Button
                  className="w-full sm:w-auto text-white border-0 px-8 py-4 text-lg transition-transform hover:scale-105"
                  style={{
                    background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
                    boxShadow: "0 0 20px rgba(178, 34, 34, 0.4)",
                  }}
                >
                  Открыть конфигуратор
                </Button>
              </Link>
              <Link href="/about">
                {/* Стеклянная кнопка — всегда поверх видео, белая */}
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white/40 text-white bg-white/5 hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm transition-colors"
                >
                  Почему мы?
                </Button>
              </Link>
            </div>

            {/* Характеристики (Плашки поверх видео) */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
              {[
                { label: "сделано", val: "в Казахстане" },
                { label: "Гарантия", val: "10 лет" },
                { label: "Секций", val: "2-25 шт" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-md"
                >
                  <div className="text-xs text-white/60 font-bold uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-xl font-bold text-white">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Иконка прокрутки вниз */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 text-white/50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Бегущая строка (Marquee) */}
      <section className="py-10 border-y border-border bg-secondary/30 overflow-hidden">
        <Container className="mb-4 text-center">
          <p className="text-xs text-muted uppercase tracking-widest font-bold">
            Наши радиаторы установлены в ЖК:
          </p>
        </Container>

        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 min-w-full items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16">
                <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">HIGHVILL</span>
                <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">BI GROUP</span>
                <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">BAZIS-A</span>
                <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">RAMS</span>
                <span className="text-2xl font-bold text-foreground/40 hover:text-foreground transition-colors">SENSATA</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <Calculator />

      <Certificates />

      {/* TRUST */}
      <section id="trust" className="bg-background py-20 border-t border-border transition-colors duration-300">
        <Container>
          <div className="mb-12">
            <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">
              Технологии & Доверие
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Настоящий биметалл — без компромиссов
            </h2>

            <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Долгое время биметаллическими называли радиаторы, в конструкции которых присутствовал
                  лишь частичный стальной элемент. При этом теплоноситель всё равно контактировал с
                  алюминием, что со временем могло приводить к коррозии и снижению надёжности.
                </p>
                <p className="font-medium text-foreground">
                  Сегодня стандарт биметаллических радиаторов — это 100% защита от агрессивного теплоносителя.
                </p>
                <p>
                  Именно таким стандартам соответствуют 100% биметаллические радиаторы{" "}
                  <span className="text-heat font-bold italic text-foreground">Thermo</span> с полностью
                  стальным коллектором.
                </p>
              </div>

              <div className="space-y-4 text-muted text-lg leading-relaxed border-l-2 border-heat/20 pl-6">
                <p>
                  В этих радиаторах теплоноситель полностью изолирован от алюминиевого сплава, что
                  гарантирует максимальную устойчивость к коррозии, перепадам давления и гидроударам.
                </p>
                <p>
                  Вертикальные и горизонтальные элементы коллектора соединяются методом контактной сварки на
                  современном высокоточном оборудовании, обеспечивая исключительную прочность конструкции и
                  герметичность на весь срок службы.
                </p>
                <p className="text-sm italic text-foreground">
                  *Thermo* — это настоящий биметалл, созданный для максимальной надёжности и долгой службы
                  без риска.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-16">
            {[
              {
                title: "100% Стальной коллектор",
                text: "Теплоноситель полностью изолирован от алюминия. Радиатор стабильно работает даже с агрессивными антифризами.",
              },
              {
                title: "Надёжность системы",
                text: "Биметалл уверенно держит нагрузки (до 30 атм) и защищен от гидроударов в высотных объектах.",
              },
              {
                title: "Контроль сварки",
                text: "Соединение элементов методом контактной сварки гарантирует герметичность на протяжении всего срока службы.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-3xl border border-border bg-card shadow-sm hover:shadow-md transition-all border-b-4 border-b-heat/30"
              >
                <div className="text-xl font-bold text-foreground mb-3">{b.title}</div>
                <p className="text-sm leading-relaxed text-muted">{b.text}</p>
                <div className="mt-6 pt-6 border-t border-border text-xs text-muted">
                  промышленный стандарт · контроль качества
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PARTNERS */}
      <section className="py-20 bg-background border-t border-border transition-colors duration-300">
        <Container>
          <div className="mb-12">
            <span className="text-heat font-bold uppercase tracking-widest text-xs mb-2 block">B2B</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Поставщикам и партнёрам</h2>
            <p className="mt-4 text-muted max-w-2xl text-lg">
              Работаем как с частными клиентами, так и с дилерами, монтажными организациями и проектными командами.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <div className="p-8 sm:p-10 rounded-3xl border border-border bg-card shadow-lg">
              <div className="text-2xl font-bold text-foreground mb-3">Для дилеров</div>
              <p className="text-muted mb-6">
                Прайс-лист, условия сотрудничества, поддержка продаж и маркетинговые материалы.
              </p>
              <div className="grid gap-3 mb-8">
                {["Индивидуальные условия", "Быстрые отгрузки", "Поддержка проекта"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-foreground bg-secondary/50 p-3 rounded-xl border border-border"
                  >
                    <span className="text-heat">✓</span> {item}
                  </div>
                ))}
              </div>
              <div>
                <Link href="/dealers">
                <Button
                  className="w-full sm:w-auto text-white border-0 px-8 py-4 text-lg transition-transform hover:scale-105"
                  style={{
                    background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
                    boxShadow: "0 0 20px rgba(178, 34, 34, 0.4)",
                  }}
                >
                    Страница партнёрам
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 sm:p-10 rounded-3xl border border-border bg-card shadow-lg">
              <div className="text-2xl font-bold text-foreground mb-3">Для проектных команд</div>
              <p className="text-muted mb-6">
                Подбор радиаторов, расчёт мощности, документация, консультации по подключению.
              </p>
              <div className="grid gap-3 mb-8">
                {["Техподдержка и спецификации", "Подбор под объект", "Коммерческое предложение"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-foreground bg-secondary/50 p-3 rounded-xl border border-border"
                  >
                    <span className="text-heat">✓</span> {item}
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Link href="/contacts">
                  <Button variant="outline" className="bg-transparent border-border text-foreground hover:bg-secondary">
                    Контакты
                  </Button>
                </Link>
                <Link href="/catalog">
                  <Button variant="ghost" className="text-muted hover:text-foreground">
                    Каталог
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}