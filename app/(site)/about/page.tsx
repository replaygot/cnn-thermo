"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Container, Button } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { ArrowRight, CheckCircle2, Factory, TrainFront, HardHat, Zap, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      {/*
        bg-zinc-900 убран — секция всегда поверх фото, фон не виден.
        Используем bg-background как fallback.
      */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[url('/slide-factory.jpg')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-[2s]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />

        <Container className="relative z-10 text-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">

            {/* Надзаголовок */}
            <div
              className="inline-flex items-center gap-3 font-bold tracking-[0.3em] uppercase text-xs md:text-sm"
              style={{ color: "var(--accent)" }}
            >
              <span className="w-8 h-[2px]" style={{ background: "var(--accent)" }} />
              Философия CNN
              <span className="w-8 h-[2px]" style={{ background: "var(--accent)" }} />
            </div>

            {/* Заголовок — поверх тёмного фото, всегда белый */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
              МЫ УПРАВЛЯЕМ <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(to right, var(--accent), var(--accent-2))" }}
              >
                ТЕПЛОМ
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              25 лет опыта в тяжелой металлургии. Мы взяли технологии для поездов и нефтепроводов, чтобы создать радиатор, который никогда не подведет.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. МАСШТАБ */}
      <section className="py-20 bg-background border-b border-border transition-colors duration-300">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "1998", label: "Год основания" },
              { val: "120K", label: "Тонн литья в год" },
              { val: "8+", label: "Отраслей" },
              { val: "52.5", label: "Атм — давление" },
            ].map((s) => (
              <div key={s.label} className="p-6">
                <div className="text-5xl font-black text-foreground mb-2">{s.val}</div>
                <div
                  className="text-sm font-black uppercase tracking-wider"
                  style={{ color: "var(--accent)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. ПРОМЫШЛЕННЫЙ ОПЫТ */}
      <section className="py-24 bg-background transition-colors duration-300">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span
                className="font-bold uppercase tracking-widest text-xs mb-2 block"
                style={{ color: "var(--accent)" }}
              >
                Инженерный подход
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Мы работаем с металлом <br />
                <span style={{ color: "var(--accent)" }}>там, где нет права на ошибку.</span>
              </h2>

              <div className="text-lg text-foreground font-medium leading-relaxed space-y-4">
                <p>
                  Мы производим сложные металлические изделия для железнодорожной отрасли, нефтегазового сектора и горнодобывающей промышленности — там, где ошибка недопустима, а требования к качеству максимальны.
                </p>
                <p className="text-heat font-bold">Радиаторы — это наша гордость.</p>
                <p>
                  Весь накопленный опыт работы с металлом, высокими температурами и экстремальными нагрузками мы перенесли в производство бытовых радиаторов под брендом{" "}
                  <span className="font-bold" style={{ color: "var(--accent)" }}>Triumph Thermo</span>.
                  Промышленная надёжность, адаптированная для вашего дома.
                </p>
              </div>

              <div className="pt-6">
                <p className="text-sm font-bold uppercase tracking-wider text-muted mb-4">Наши радиаторы рассчитаны на:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Zap className="w-5 h-5" />, label: "Высокое давление и гидроудары" },
                    { icon: <Factory className="w-5 h-5" />, label: "Агрессивные теплоносители" },
                    { icon: <HardHat className="w-5 h-5" />, label: "Длительную эксплуатацию" },
                    { icon: <CheckCircle2 className="w-5 h-5" />, label: "Стандарты тяжелой инженерии" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-sm">
                      <div style={{ color: "var(--accent)" }}>{item.icon}</div>
                      <span className="font-bold text-sm text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm italic text-muted mt-4">
                Triumph Thermo — тепло, сделанное по правилам тяжёлой промышленности.
              </p>
            </div>

            {/* Фото */}
            <div className="grid grid-rows-2 gap-6 h-[600px] md:h-[700px]">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-secondary">
                <div className="absolute inset-0 bg-[url('/photo-1.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xl font-bold mb-1">Высокое доверие</div>
                  <p className="text-white/80 text-sm">Поддержка производства на государственном уровне.</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-secondary">
                <div className="absolute inset-0 bg-[url('/photo-2.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xl font-bold mb-1">Масштабное производство</div>
                  <p className="text-white/80 text-sm">Контроль качества на каждом этапе заводской сборки.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. ТЕХНОЛОГИИ */}
      <section className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
        {/* Декоративный блик — rgba вместо #ff8c00/5 */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none"
          style={{ background: "rgba(178,34,34,0.05)" }}
        />

        <Container className="relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span
              className="font-bold uppercase tracking-widest text-xs mb-4 block"
              style={{ color: "var(--accent)" }}
            >
              Технологии
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--accent)" }}
            >
              Оборудование мирового класса
            </h2>
            <p className="text-foreground text-lg font-medium">
              Мы инвестировали в лучшие немецкие технологии, чтобы исключить брак и гарантировать европейское качество в Казахстане.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HWS (Германия)", desc: "Автоматическая линия безопочной формовки FBO III. Обеспечивает идеальную поверхность.", image: "/tech-hws.jpg" },
              { title: "Eirich (Германия)", desc: "Автоматический смесеприготовительный комплекс. Гарантирует стабильность состава.", image: "/tech-eirich.jpg" },
              { title: "Laempe (Германия)", desc: "Стержневые автоматы для создания идеальных внутренних каналов радиатора.", image: "/tech-laempe.jpg" },
              { title: "FRECH (Германия)", desc: "Литье под высоким давлением. Монолитная конструкция без пор и раковин.", image: "/tech-frech.jpg" },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative h-[300px] rounded-2xl overflow-hidden border border-border bg-card shadow-sm transition-all"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(178,34,34,0.5)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "")}
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3
                    className="text-xl font-bold text-white mb-2 transition-colors"
                    style={{ ["--hover-color" as any]: "var(--accent)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4.5 СМИ О НАС */}
      {/*
        Секция на тёмном фоне — оставляем bg-card (тёмная тема: тёмно-синий, светлая: белый).
        Весь текст внутри — белый т.к. фото даёт тёмный контекст.
        Кнопка "Читать статью" — accent цвет при hover.
      */}
      <section className="py-12 bg-background transition-colors duration-300">
        <Container>
          <div className="relative rounded-[32px] overflow-hidden bg-card border border-border p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 group shadow-2xl">
            <div
              className="absolute -top-32 -right-32 w-96 h-96 blur-[120px] pointer-events-none rounded-full"
              style={{ background: "rgba(178,34,34,0.15)" }}
            />

            <div className="lg:w-1/3 w-full shrink-0 relative z-10">
              <div className="aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden relative border border-border shadow-lg">
                <div className="absolute inset-0 bg-[url('/slide-factory.jpg')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Factory
                    className="w-20 h-20"
                    style={{
                      color: "var(--accent)",
                      filter: "drop-shadow(0 0 15px rgba(178,34,34,0.6))",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 flex flex-col items-start relative z-10">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 border backdrop-blur-md"
                style={{
                  background: "rgba(178,34,34,0.1)",
                  color: "var(--accent)",
                  borderColor: "rgba(178,34,34,0.2)",
                }}
              >
                СМИ о нас • PavlodarNews.kz
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">
                В Павлодаре робот приложил руку к сборке радиаторов
              </h3>
              <p className="text-muted mb-8 max-w-2xl text-lg leading-relaxed">
                На заводе внедрена передовая система автоматизации: в сутки роботизированная линия создаёт сотни изделий с микронной точностью. Инновационный процесс запущен при поддержке государства и фонда «Даму», что выводит локальное производство на мировой уровень качества.
              </p>

              <a
                href="https://pavlodarnews.kz/ru/v-pavlodare-robot-prilozhil-ruku-k-sborke-radiatorov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all shadow-xl hover:-translate-y-1"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                Читать статью
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. ФИЛОСОФИЯ */}
      <section className="py-24 bg-background transition-colors duration-300">
        <Container>
          <div className="rounded-[40px] border border-border bg-card shadow-lg p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/2">
                <div
                  className="inline-block px-4 py-1 rounded-full text-white font-bold text-xs mb-6 uppercase tracking-wider"
                  style={{ background: "var(--accent)" }}
                >
                  Наш подход
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Инженерная конструкция, <br />
                  а не просто бытовое изделие
                </h2>

                <div className="space-y-6 text-foreground text-lg">
                  <p className="leading-relaxed">
                    Мы пришли в производство радиаторов из тяжёлой индустрии — литья, машиностроения и работы с высокими температурами.
                  </p>
                  <p className="text-muted text-base">
                    В основе нашего подхода — металлургическая экспертиза, промышленная культура производства и строгий контроль качества на каждом этапе. Для нас радиатор — это конструкция, от которой зависят безопасность и ресурс вашей системы отопления.
                  </p>

                  <ul className="space-y-4 mt-8">
                    {[
                      "Использование полностью металлических коллекторов",
                      "Расчёт на гидроудары и агрессивные теплоносители",
                      "Контроль геометрии и сварных соединений",
                      "Соответствие требованиям ГОСТ и отраслевых стандартов",
                    ].map((item, index) => (
                      <li key={index} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-6 h-6 mt-1 shrink-0" style={{ color: "var(--accent)" }} />
                        <span className="font-bold border-b border-border pb-2 w-full">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2 w-full space-y-6">
                <div className="rounded-3xl overflow-hidden border border-border shadow-xl aspect-square relative bg-card group">
                  <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <source src="/aboutcompany.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white text-xl font-medium">
                      Презентация радиаторов Triumph Thermo первым лицам государства.
                    </p>
                  </div>
                </div>

                <div
                  className="p-6 rounded-2xl border"
                  style={{
                    background: "rgba(178,34,34,0.05)",
                    borderColor: "rgba(178,34,34,0.2)",
                  }}
                >
                  <p className="text-sm text-foreground italic">
                    «Мы переносим стандарты тяжёлой индустрии в бытовое отопление: запас прочности, точная геометрия и абсолютный контроль качества.»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. КЛИЕНТЫ */}
      <section className="py-20 bg-background border-t border-border transition-colors duration-300">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">Нам доверяют промышленные гиганты</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["BI GROUP", "BAZIS-A", "KAZCHROME", "КТЖ", "ERG", "ARCELORMITTAL", "ПАВЛОДАРЭНЕРГО"].map((name) => (
              <span key={name} className="text-3xl font-black text-foreground">{name}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. ФИНАЛЬНЫЙ МАНИФЕСТ — уже используется var(), оставляем как есть */}
      <section className="py-24 bg-[var(--bg)] border-t border-[var(--muted-border)] transition-colors duration-300 overflow-hidden relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <span className="text-[var(--accent)] font-bold uppercase tracking-[0.3em] text-xs">
                Никаких компромиссов. Только надёжность.
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[var(--text-main)] leading-[1.1]">
                Радиаторы, созданные по законам <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(to right, var(--accent), var(--accent-2))" }}
                >
                  промышленной инженерии
                </span>
              </h2>
              <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Биметаллические радиаторы, разработанные на базе металлургического производства и рассчитанные на экстремальные условия эксплуатации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 text-left">
              {[
                { title: "100% стальной коллектор", desc: "теплоноситель не контактирует с алюминием" },
                { title: "Устойчивость к гидроударам", desc: "защита от критических перепадов давления" },
                { title: "Любые теплоносители", desc: "работа с агрессивной средой и антифризами" },
                { title: "Промышленная сварка", desc: "максимальный контроль герметичности" },
                { title: "Ресурс на десятилетия", desc: "рассчитано на сверхдолгий срок службы" },
                { title: "Запас прочности", desc: "стандарты тяжелой индустрии в вашем доме" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--muted-border)] hover:border-[var(--accent)] transition-all shadow-[var(--shadow-1)]">
                  <div className="text-[var(--text-main)] font-bold text-sm mb-1 uppercase tracking-tight">{item.title}</div>
                  <div className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider leading-tight font-medium">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-[var(--muted-border)] mt-12">
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4">Когда важен результат</h3>
              <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto font-medium">
                Наши радиаторы выбирают там, где цена ошибки высока: центральное отопление, высотные здания, нестабильные системы и повышенные нагрузки.
              </p>
              <div
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-black uppercase tracking-widest shadow-lg transition-transform hover:-translate-y-1 cursor-default"
                style={{ background: "var(--accent)" }}
              >
                Это инженерное решение для вашего дома
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}