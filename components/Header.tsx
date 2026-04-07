"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "./ModalProvider";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Search, Phone, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Конфигуратор" },
  { href: "/where-to-buy", label: "Где купить" },
  { href: "/dealers", label: "Дилерам" },
  { href: "/contacts", label: "Контакты" },
  { href: "/about", label: "О компании" },
];

export default function Header() {
  const pathname = usePathname();
  const { open } = useModal();

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && searchTerm) {
      (window as any).find(searchTerm);
    }
  };

  return (
    <>
      {/*
        Шапка: bg-[var(--header-bg)] — работает и в светлой, и в тёмной теме из globals.css.
        border-[var(--muted-border)] вместо border-gray-200 / dark:border-white/10.
      */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md border-b"
        style={{
          background: "var(--header-bg)",
          borderColor: "var(--muted-border)",
        }}
      >
        <div className="flex flex-col h-auto">

          {/* === ВЕРХНИЙ ЭТАЖ === */}
          <div
            className="flex items-center justify-between h-16 sm:h-20 px-3 sm:px-8 border-b"
            style={{ borderColor: "var(--muted-border)" }}
          >
            {/* ЛОГОТИП */}
            <div
              className="shrink-0 flex items-center h-full sm:border-r sm:pr-6 xl:w-[260px]"
              style={{ borderColor: "var(--muted-border)" }}
            >
              <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-md shrink-0">
                  <img src="/logo.jpeg" alt="Logo" className="h-full w-full object-cover" />
                </div>
                <div className="hidden sm:flex flex-col justify-center">
                  <div
                    className="text-xl font-black tracking-widest uppercase leading-none"
                    style={{ color: "var(--text-main)" }}
                  >
                    Triumph
                    <span style={{ color: "var(--accent)" }}>Thermo</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* ПРАВАЯ ЧАСТЬ */}
            <div className="flex-1 flex items-center justify-end xl:justify-between gap-2 sm:gap-6 pl-2 sm:pl-10">

              {/* ПОИСК + ТЕМА */}
              <div className="flex items-center gap-1 sm:gap-6">
                {showSearch ? (
                  <form
                    onSubmit={handleSearch}
                    className="flex items-center gap-1 sm:gap-2 animate-in fade-in slide-in-from-right-4 sm:slide-in-from-left-4 duration-300"
                  >
                    <input
                      autoFocus
                      type="text"
                      placeholder="Поиск..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-md text-xs sm:text-sm outline-none border border-transparent w-[110px] sm:w-[200px] transition-colors"
                      style={{
                        background: "var(--card-bg)",
                        color: "var(--text-main)",
                        // focus через onFocus/onBlur если нужно, или просто оставляем CSS var в style
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "transparent")}
                    />
                    <button
                      type="submit"
                      className="hover:scale-110 transition-transform p-1"
                      style={{ color: "var(--accent)" }}
                    >
                      <Search className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSearch(false)}
                      className="p-1 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setShowSearch(true)}
                    className="flex items-center gap-2 transition-colors text-sm font-medium group"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                  >
                    <div className="p-1.5 sm:p-2 rounded-full transition-colors">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="hidden xl:inline">Поиск</span>
                  </button>
                )}

                <div
                  className="h-4 w-[1px] hidden xl:block"
                  style={{ background: "var(--muted-border)" }}
                />

                <div className={cn("shrink-0", showSearch && "hidden sm:block")}>
                  <ThemeToggle />
                </div>
              </div>

              {/* ТЕЛЕФОН + CTA + БУРГЕР */}
              <div className="flex items-center gap-1.5 sm:gap-4 xl:gap-8 shrink-0">
                <a
                  href="tel:+77761346303"
                  className="hidden xl:flex items-center gap-2 font-bold text-sm shrink-0 transition-colors"
                  style={{ color: "var(--text-main)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-main)")}
                >
                  <Phone className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  +7 (776) 134 63 03
                </a>

                <button
                  onClick={() => open("request")}
                  className={cn(
                    "text-white font-bold py-1.5 px-3 sm:py-2.5 sm:px-6 rounded text-[10px] sm:text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0",
                    showSearch ? "hidden sm:block" : "block"
                  )}
                  style={{
                    background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
                    boxShadow: "0 4px 12px rgba(178,34,34,0.3)",
                  }}
                >
                  <span className="sm:hidden">Заявка</span>
                  <span className="hidden sm:inline">Заказать расчет</span>
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="xl:hidden p-1 ml-0.5 sm:ml-2 shrink-0 transition-colors"
                  style={{ color: "var(--text-main)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-main)")}
                >
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
                </button>
              </div>
            </div>
          </div>

          {/* === НИЖНИЙ ЭТАЖ (Меню ПК) === */}
          <div
            className="hidden xl:flex items-center justify-center h-14 backdrop-blur-sm border-t"
            style={{
              background: "var(--header-bg)",
              borderColor: "var(--muted-border)",
            }}
          >
            <nav className="w-full">
              <ul className="flex items-center justify-center gap-16 xl:gap-24 2xl:gap-32 px-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs font-extrabold uppercase tracking-[0.15em] py-3 block relative group transition-all duration-300 ease-out"
                        style={{
                          color: isActive ? "var(--accent)" : "var(--text-muted)",
                          filter: isActive
                            ? "drop-shadow(0 0 10px rgba(178,34,34,0.6))"
                            : undefined,
                          transform: isActive ? "scale(1.05)" : undefined,
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = "var(--accent)";
                          el.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = isActive ? "var(--accent)" : "var(--text-muted)";
                          el.style.transform = isActive ? "scale(1.05)" : "";
                        }}
                      >
                        {link.label}
                        <span
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300"
                          style={{
                            background: "var(--accent)",
                            width: isActive ? "100%" : "0",
                          }}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* === МОБИЛЬНОЕ МЕНЮ === */}
      <div
        className={cn(
          "fixed inset-0 z-[200] flex justify-end xl:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {/* Оверлей */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Панель */}
        <div
          className={cn(
            "relative w-[85%] max-w-[360px] h-full flex flex-col transition-transform duration-300 ease-out shadow-2xl border-l",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--muted-border)",
          }}
        >
          {/* Шапка меню */}
          <div
            className="flex items-center justify-between p-5 sm:p-6 border-b"
            style={{ borderColor: "var(--muted-border)" }}
          >
            <span
              className="font-black text-xl uppercase tracking-widest"
              style={{ color: "var(--text-main)" }}
            >
              Меню
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Ссылки */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all active:scale-[0.98] border"
                  style={
                    isActive
                      ? {
                          background: "rgba(178,34,34,0.08)",
                          color: "var(--accent)",
                          borderColor: "rgba(178,34,34,0.2)",
                        }
                      : {
                          color: "var(--text-main)",
                          borderColor: "transparent",
                        }
                  }
                >
                  {link.label}
                  <ChevronRight
                    className="w-4 h-4"
                    style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Подвал мобильного меню */}
          <div
            className="p-5 sm:p-6 border-t space-y-4"
            style={{
              borderColor: "var(--muted-border)",
              background: "rgba(0,0,0,0.03)",
            }}
          >
            <a
              href="tel:+77761346303"
              className="flex items-center justify-center gap-3 font-bold py-4 rounded-2xl border shadow-sm transition-colors"
              style={{
                color: "var(--text-main)",
                background: "var(--card-bg)",
                borderColor: "var(--muted-border)",
              }}
            >
              <div
                className="p-2 rounded-full"
                style={{ background: "rgba(178,34,34,0.1)" }}
              >
                <Phone className="w-4 h-4" style={{ color: "var(--accent)" }} />
              </div>
              +7 (776) 134 63 03
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                open("request");
              }}
              className="w-full text-white font-black py-4 rounded-2xl text-sm uppercase tracking-widest transition-all active:scale-[0.98]"
              style={{
                background: "linear-gradient(180deg, var(--accent), var(--accent-2))",
                boxShadow: "0 4px 16px rgba(178,34,34,0.3)",
              }}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </>
  );
}