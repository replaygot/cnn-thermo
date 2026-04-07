"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { Send } from "lucide-react";

export default function ContactForm({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const whatsappNumber = "77761346303";
    const text = `
👋 *Новая заявка с сайта Triumph Thermo!*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📄 *Цель:* Консультация / Расчет стоимости
    `.trim();

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    setIsLoading(false);
    setName("");
    setPhone("");
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground ml-1">Ваше имя</label>
        <input
          required
          type="text"
          placeholder="Алиаскар"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.target.style.borderColor = "")}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground ml-1">Номер телефона</label>
        <input
          required
          type="tel"
          placeholder="+7 (777) 000-00-00"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.target.style.borderColor = "")}
        />
      </div>

      {/* Кнопка использует дефолтный вариант из ui.tsx — кирпичный через var(--accent) */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full font-bold py-6 rounded-xl text-lg mt-2"
      >
        {isLoading ? (
          "Открываем WhatsApp..."
        ) : (
          <span className="flex items-center gap-2">
            Отправить в WhatsApp <Send className="w-5 h-5" />
          </span>
        )}
      </Button>

      <p className="text-xs text-center text-muted mt-4">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}