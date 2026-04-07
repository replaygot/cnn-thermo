"use client";

import { Container, Button } from "@/components/ui";
import { useModal } from "@/components/ModalProvider";
import { Instagram, MessageCircle, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactsClient() {
  const { open } = useModal();

  return (
    <section className="pt-32 pb-20 sm:pt-40 relative overflow-hidden min-h-screen bg-background transition-colors duration-300">
      
      {/* Фоновый блик */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-heat/10 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          
          {/* ЛЕВАЯ ЧАСТЬ: Заголовок и Контакты (как на референсе) */}
          <div className="flex flex-col h-full">
            <span className="text-heat font-bold uppercase tracking-widest text-xs mb-4 block">
              Контакты
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              Связь с Triumph Thermo
            </h1>
            <p className="text-muted max-w-md text-base md:text-lg mb-12">
              Если вы хотите сделать оптовый заказ, задать вопрос по конфигурации или рассчитать проект — напишите нам, ответим быстро!
            </p>

            {/* Сетка контактов */}
            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8 text-sm">
              {/* Адрес */}
              <div>
                <div className="text-muted mb-2 font-medium">Адрес завода</div>
                <div className="text-foreground font-bold text-lg mb-1">г. Павлодар</div>
                <div className="text-muted">Северная промзона, 52</div>
              </div>

              {/* Телефон */}
              <div>
                <div className="text-muted mb-2 font-medium">Телефон</div>
                <a href="tel:+77761346303" className="text-foreground font-bold text-lg hover:text-heat transition-colors block mb-1">
                  +7 (776) 134 63 03
                </a>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  Сейчас работаем
                </div>
              </div>

              {/* Почта */}
              <div>
                <div className="text-muted mb-2 font-medium">Email</div>
                <a href="mailto:cnn_pavlodar@mail.ru" className="text-foreground font-bold text-lg hover:text-heat transition-colors">
                  cnn_pavlodar@mail.ru
                </a>
              </div>

              {/* Соцсети */}
              <div>
                <div className="text-muted mb-2 font-medium">Социальные сети</div>
                <div className="flex flex-col gap-2">
                  <Link href="https://www.instagram.com/_triumphthermo_" target="_blank" className="text-foreground font-bold hover:text-[#E1306C] transition-colors flex items-center gap-2">
                    <Instagram className="w-4 h-4" /> Instagram
                  </Link>
                  <Link href="https://wa.me/77761346303" target="_blank" className="text-foreground font-bold hover:text-[#25D366] transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Форма заявки (в стиле Evatherm) */}
          <div className="rounded-3xl bg-secondary/20 p-6 sm:p-10 flex flex-col h-full border border-border/50 relative overflow-hidden">
             <form className="flex flex-col gap-4 relative z-10">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full bg-secondary/50 border-0 rounded-xl px-5 py-4 text-foreground placeholder:text-muted focus:ring-2 focus:ring-heat focus:outline-none transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  className="w-full bg-secondary/50 border-0 rounded-xl px-5 py-4 text-foreground placeholder:text-muted focus:ring-2 focus:ring-heat focus:outline-none transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Почта" 
                  className="w-full bg-secondary/50 border-0 rounded-xl px-5 py-4 text-foreground placeholder:text-muted focus:ring-2 focus:ring-heat focus:outline-none transition-all"
                />
                <textarea 
                  placeholder="Сообщение" 
                  rows={4}
                  className="w-full bg-secondary/50 border-0 rounded-xl px-5 py-4 text-foreground placeholder:text-muted focus:ring-2 focus:ring-heat focus:outline-none transition-all resize-none"
                />
                
                <label className="flex items-start gap-3 mt-2 mb-4 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-5 h-5 border-2 border-muted rounded bg-transparent checked:bg-heat checked:border-heat focus:outline-none transition-all cursor-pointer"
                    />
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted group-hover:text-foreground transition-colors leading-snug">
                    Я согласен с <Link href="#" className="text-heat hover:underline">политикой конфиденциальности</Link>
                  </span>
                </label>

                {/* Кнопка как на референсе: прозрачная с контуром и стрелочкой */}
                <div className="flex sm:justify-start">
                  <Button 
                    type="button"
                    className="group bg-transparent border-2 border-heat text-heat hover:bg-heat hover:text-white px-8 py-6 text-sm font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all w-full sm:w-auto"
                  >
                    Связаться
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
             </form>
          </div>

        </div>
      </Container>
    </section>
  );
}