"use client";

import { useState } from "react";
import { Container, Button } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { MapPin, Phone, Clock, Navigation, Globe } from "lucide-react";

const locations = [
  {
    city: "Павлодар",
    isFactory: true,
    shops: [
      { name: "ЗАВОД Triumph Thermo (Фирма СНН)", address: "Северная промзона, 16/3", phone: "+7 (7182) 77-01-01", time: "Пн-Пт: 08:00 - 17:00", type: "map", link: "https://go.2gis.com/pavlodar/firm/70000001023982363" },
      { name: "Интернет-магазин IMPERIAL", address: "ул. Астана, 16", phone: "+7 (705) 707-15-55", time: "Ежедневно: 09:00 - 19:00", type: "site", link: "https://imperial-online.kz/" },
      { name: "Гипермаркет «12 Месяцев»", address: "ул. Жаяу Мусы, 6", phone: "+7 (7182) 60-00-67", time: "Ежедневно: 09:00 - 20:00", type: "map", link: "https://go.2gis.com/pavlodar/firm/70000001018889152" },
    ],
  },
  {
    city: "Астана",
    shops: [
      { name: "EVATHERM", address: "ул. Бактыораза Бейсекбаева, 18Б", phone: "+7 (700) 794-85-95", time: "Пн-Пт: 09:00 - 18:00", type: "site", link: "https://www.evatherm.kz/" },
      { name: "Nurai Invest", address: "ул. Бактыораза Бейсекбаева, 18А", phone: "+7 (777) 563-22-33", time: "Пн-Сб: 09:00 - 18:00", type: "site", link: "https://nurai-invest.kz/" },
      { name: "Гипермаркет «12 Месяцев»", address: "шоссе Алаш, 20А", phone: "+7 (7172) 67-77-11", time: "Ежедневно: 09:00 - 21:00", type: "map", link: "https://go.2gis.com/astana/firm/70000001018134207" },
    ],
  },
  {
    city: "Караганда",
    shops: [
      { name: "Гипермаркет «12 Месяцев»", address: "пр. Строителей, 37/2", phone: "+7 (7212) 40-31-06", time: "Ежедневно: 10:00 - 20:00", type: "map", link: "https://go.2gis.com/karaganda/firm/11822477302826771" },
    ],
  },
  {
    city: "Актобе",
    shops: [
      { name: "Nurai Invest", address: "ул. Некрасова, 125", phone: "+7 (777) 185-33-33", time: "Пн-Сб: 09:00 - 18:00", type: "site", link: "https://nurai-invest.kz/" },
    ],
  },
  {
    city: "Алматы",
    shops: [
      { name: "Гипермаркет «12 Месяцев»", address: "пр. Райымбека, 516", phone: "+7 (727) 313-18-20", time: "Ежедневно: 09:00 - 21:00", type: "map", link: "https://go.2gis.com/almaty/firm/9429940000788667" },
    ],
  },
];

export default function WhereToBuyPage() {
  const [activeCity, setActiveCity] = useState("Павлодар");
  const currentCityData = locations.find((l) => l.city === activeCity);
  const mainMapLink = currentCityData?.shops[0]?.link || "#";

  return (
    <div className="bg-background min-h-screen transition-colors duration-300">

      {/* HEADER */}
      <section className="pt-32 pb-12 border-b border-border bg-background">
        <Container>
          <span className="font-bold uppercase tracking-widest text-xs mb-2 block" style={{ color: "var(--accent)" }}>
            Дилерская сеть
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Где купить Triumph Thermo
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Найдите ближайший магазин или официального дилера в вашем городе.
            Мы постоянно расширяем географию присутствия.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">

          {/* ЛЕВАЯ КОЛОНКА: ВЫБОР ГОРОДА */}
          <div className="space-y-2 lg:sticky lg:top-24 h-fit">
            <h3 className="text-lg font-bold text-foreground mb-4 px-2">Выберите город:</h3>
            <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-4 lg:pb-0">
              {locations.map((item) => {
                const active = activeCity === item.city;
                return (
                  <button
                    key={item.city}
                    onClick={() => setActiveCity(item.city)}
                    className="px-4 py-3 rounded-xl text-left font-medium transition-all whitespace-nowrap"
                    style={
                      active
                        ? {
                            background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
                            color: "#fff",
                            boxShadow: "0 4px 12px rgba(178,34,34,0.25)",
                          }
                        : {}
                    }
                  >
                    {active ? (
                      <>
                        {item.city}
                        {item.isFactory && (
                          <span className="ml-2 text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded uppercase">
                            Завод
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-foreground">{item.city}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Нет вашего города */}
            <div className="hidden lg:block mt-8 p-6 rounded-2xl border border-border bg-card">
              <h4 className="font-bold text-foreground mb-2">Нет вашего города?</h4>
              <p className="text-sm text-muted mb-4">
                Закажите доставку напрямую с завода или станьте нашим представителем.
              </p>
              <a href="/contacts">
                <Button variant="outline" className="w-full bg-transparent border-border text-foreground hover:bg-secondary">
                  Связаться с нами
                </Button>
              </a>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: СПИСОК МАГАЗИНОВ */}
          <div className="space-y-6">
            {currentCityData?.shops.map((shop, i) => (
              <div
                key={i}
                className="group p-6 sm:p-8 rounded-3xl border border-border bg-card hover:shadow-lg transition-all"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(178,34,34,0.3)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "")}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{shop.name}</h3>
                        {currentCityData.isFactory && i === 0 && (
                          <span
                            className="text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase"
                            style={{ background: "var(--accent)" }}
                          >
                            Производство
                          </span>
                        )}
                      </div>
                      <div className="flex items-start gap-2 text-muted text-lg">
                        <MapPin className="w-5 h-5 shrink-0 mt-1" style={{ color: "var(--accent)" }} />
                        <span>{shop.address}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted" />
                        <span className="font-medium text-foreground">{shop.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted" />
                        <span className="text-sm text-muted">{shop.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Кнопка */}
                  <div className="shrink-0">
                    <a href={shop.link} target="_blank" rel="noreferrer">
                      <Button variant="secondary" className="w-full md:w-auto gap-2 border border-border">
                        {shop.type === "site"
                          ? <Globe className="w-4 h-4" style={{ color: "var(--accent)" }} />
                          : <Navigation className="w-4 h-4" style={{ color: "var(--accent)" }} />
                        }
                        {shop.type === "site" ? "Перейти на сайт" : "Маршрут"}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {(!currentCityData?.shops || currentCityData.shops.length === 0) && (
              <div className="p-12 text-center border border-dashed border-border rounded-3xl">
                <p className="text-muted">В этом городе пока нет официальных точек продаж.</p>
              </div>
            )}

            {/* КАРТА */}
            <a
              href={mainMapLink}
              target="_blank"
              rel="noreferrer"
              className="flex mt-8 rounded-3xl overflow-hidden border border-border bg-card h-[300px] relative items-center justify-center group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/76.9455,43.2372,12,0/800x400?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

              <div className="relative z-10 bg-card/90 backdrop-blur px-6 py-3 rounded-full shadow-xl border border-border flex items-center gap-2 transition-transform group-hover:scale-105">
                <MapPin style={{ color: "var(--accent)" }} className="animate-bounce" />
                <span className="font-bold text-foreground">Посмотреть на карте (2GIS)</span>
              </div>
            </a>
          </div>
        </div>
      </Container>

      <CTASection />
    </div>
  );
}