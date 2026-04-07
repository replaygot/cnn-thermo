"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { FileText, Image as ImageIcon, Download } from "lucide-react";

const certs = [
  { id: 1, title: "Индустриальный сертификат", type: "image", src: "/certs/1.jpg" },
  { id: 2, title: "Сертификат соответствия", type: "image", src: "/certs/2.jpg" },
  { id: 3, title: "Протокол испытаний НИТИ", type: "pdf", src: "/protocol.pdf" },
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section
      className="py-20 border-t transition-colors duration-300"
      style={{
        background: "var(--bg)",
        borderColor: "var(--muted-border)",
      }}
    >
      <Container>
        <div className="mb-12 text-center md:text-left">
          <span
            className="font-bold uppercase tracking-widest text-xs mb-2 block"
            style={{ color: "var(--accent)" }}
          >
            Документация
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-main)" }}
          >
            Сертификаты и протоколы
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              onClick={() => {
                if (cert.type === "image") setSelectedImg(cert.src);
                else window.open(cert.src, "_blank");
              }}
              className="group cursor-pointer"
            >
              <div
                className="h-full min-h-[200px] rounded-2xl border flex flex-col items-center justify-center p-6 text-center transition-all hover:-translate-y-1 relative overflow-hidden"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--muted-border)",
                  boxShadow: "var(--shadow-1)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(178,34,34,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "var(--muted-border)")
                }
              >
                {/* Иконка */}
                <div
                  className="mb-4 w-16 h-16 rounded-full flex items-center justify-center transition-colors"
                  style={
                    cert.type === "pdf"
                      ? { background: "rgba(239,68,68,0.1)", color: "#ef4444" }
                      : { background: "var(--bg)", color: "var(--text-muted)" }
                  }
                >
                  {cert.type === "pdf" ? (
                    <FileText className="w-8 h-8" />
                  ) : (
                    <ImageIcon className="w-8 h-8" />
                  )}
                </div>

                <p
                  className="text-sm font-bold uppercase leading-tight transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cert.title}
                </p>

                {cert.type === "pdf" && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                    PDF <Download className="w-3 h-3" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl transition-colors z-[210]"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
          <div
            className="relative w-full max-w-xl flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg}
              alt="Сертификат"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10 bg-white"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/600x800?text=Нет+изображения";
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}