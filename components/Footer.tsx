import Link from "next/link";
import { Container, Button } from "@/components/ui";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const links = [
  { label: "Конфигуратор", href: "/catalog" },
  { label: "О компании", href: "/about" },
  { label: "Для дилеров", href: "/dealers" },
  { label: "Контакты", href: "/contacts" },
  { label: "Где купить", href: "/where-to-buy" },
];

export default function Footer() {
  return (
    <>
      {/* CSS-переменные недоступны через Tailwind hover напрямую, используем глобальный style */}
      <style>{`
        .footer-link:hover,
        .footer-contact-link:hover { color: var(--accent); }
      `}</style>

      <footer className="border-t border-border bg-background py-12 sm:py-16 transition-colors duration-300">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {/* 1. Логотип */}
            <div>
              <div className="text-lg font-bold tracking-widest text-foreground uppercase">
                Tengri Thermo
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Первый завод полного цикла в Казахстане.
                Надёжные биметаллические радиаторы для сурового климата.
              </p>
            </div>

            {/* 2. Навигация */}
            <div>
              <div className="text-sm font-bold tracking-widest text-muted uppercase">Навигация</div>
              <ul className="mt-4 grid gap-2 text-sm">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Контакты */}
            <div>
              <div className="text-sm font-bold tracking-widest text-muted uppercase">Контакты</div>
              <ul className="mt-4 grid gap-4 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                  <a href="tel:+77761346303" className="footer-contact-link font-medium transition-colors">
                    +7 (776) 134 63 03
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                  <a href="mailto:cnn_pavlodar@mail.ru" className="footer-contact-link transition-colors">
                    cnn_pavlodar@mail.ru
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                  <span>г. Павлодар,<br />Северная промзона, 52</span>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="https://www.instagram.com/_triumphthermo_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
                >
                  <div className="p-2 rounded-full bg-secondary border border-border group-hover:border-[#E1306C]/50 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Мы в Instagram</span>
                </a>
              </div>
            </div>

            {/* 4. CTA */}
            <div>
              <Link href="/contacts">
                <Button className="w-full font-bold py-6">Оставить заявку</Button>
              </Link>
              <p className="mt-4 text-xs text-muted leading-relaxed">
                Отвечаем в WhatsApp и по телефону в рабочее время.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8 text-xs text-muted flex flex-col sm:flex-row justify-between gap-4">
            <div>© 2026 Tengri Thermo. Все права защищены.</div>
            <div className="flex items-center gap-2">
              Сделано в Казахстане <span className="text-base">🇰🇿</span>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}