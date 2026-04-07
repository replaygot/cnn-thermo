"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ArrowRight } from "lucide-react";
import { Container, Button } from "@/components/ui";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    image: "/slide-factory.jpg",
    title: "Лидер металлургии Казахстана с 1998 года",
    subtitle:
      "Завод «СНН» — это 25 лет опыта в промышленном литье. Мы производим 120 000 тонн продукции в год для 8 отраслей экономики.",
  },
  {
    id: 2,
    image: "/slide-tech.jpg",
    title: "Немецкий стандарт: HWS, Laempe, Eirich",
    subtitle:
      "Автоматизированные линии исключают человеческий фактор. Точность отливки до микрон, идеальная геометрия и плотность металла.",
  },
  {
    id: 3,
    image: "/slide-radiator.jpg",
    title: "Triumph Thermo — радиатор с запасом прочности",
    subtitle:
      "Испытательное давление 52.5 атмосферы. Разработан для сурового климата и нестабильных систем отопления.",
  },
];

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[600px] bg-black group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-cover bg-center animate-ken-burns"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />

              <Container className="relative z-10 h-full flex flex-col justify-center pb-12">
                <div className="max-w-4xl space-y-8 animate-fade-in-up">
                  {/* Бейдж */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/90 text-sm backdrop-blur-md w-fit">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: "var(--accent)" }}
                    />
                    Сделано в Казахстане
                  </div>

                  {/* Заголовок */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  {/* Кнопки */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/catalog">
                      <button
                        className="rounded-full px-8 py-4 text-lg font-bold text-white border-0 transition-all hover:opacity-90 hover:scale-105"
                        style={{
                          background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
                          boxShadow: "0 0 20px rgba(178,34,34,0.4)",
                        }}
                      >
                        Смотреть каталог
                      </button>
                    </Link>
                    <Link href="/about">
                      <Button
                        variant="hero"
                        className="rounded-full px-8 py-4 text-lg"
                      >
                        Подробнее о заводе
                      </Button>
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}

        <button className="swiper-prev absolute left-8 top-1/2 z-20 text-white/50 hover:text-white transition-colors hidden md:block p-2 -translate-y-1/2">
          <ArrowRight className="rotate-180 w-12 h-12" />
        </button>
        <button className="swiper-next absolute right-8 top-1/2 z-20 text-white/50 hover:text-white transition-colors hidden md:block p-2 -translate-y-1/2">
          <ArrowRight className="w-12 h-12" />
        </button>
      </Swiper>
    </section>
  );
}