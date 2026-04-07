"use client";

import { X, Check } from "lucide-react";

interface FiltersProps {
  selectedHeight: number | null;
  onHeightChange: (h: number | null) => void;
  selectedDepth: number | null;
  onDepthChange: (d: number | null) => void;
  onReset: () => void;
  totalCount: number;
}

export default function Filters({
  selectedHeight,
  onHeightChange,
  selectedDepth,
  onDepthChange,
  onReset,
  totalCount,
}: FiltersProps) {
  return (
    <div className="bg-card border border-border rounded-3xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-bold text-foreground uppercase tracking-widest">Фильтры</h3>
          <p className="text-xs text-muted mt-1">Быстрый подбор</p>
        </div>
        {(selectedHeight || selectedDepth) && (
          <button
            onClick={onReset}
            className="text-xs font-bold transition-colors flex items-center gap-1 hover:underline"
            style={{ color: "var(--accent)" }}
          >
            Сбросить
          </button>
        )}
      </div>

      <div className="space-y-8">
        {/* Высота */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-muted uppercase tracking-wider">Высота (мм)</div>
          <div className="flex gap-2">
            {[350, 500].map((h) => {
              const active = selectedHeight === h;
              return (
                <button
                  key={h}
                  onClick={() => onHeightChange(active ? null : h)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all"
                  style={
                    active
                      ? {
                          background: "var(--accent)",
                          color: "#fff",
                          borderColor: "var(--accent)",
                          boxShadow: "0 4px 12px rgba(178,34,34,0.25)",
                        }
                      : {}
                  }
                >
                  {h}
                </button>
              );
            })}
          </div>
        </div>

        {/* Глубина */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-muted uppercase tracking-wider">Глубина (мм)</div>
          <div className="flex gap-2">
            {[80, 100].map((d) => {
              const active = selectedDepth === d;
              return (
                <button
                  key={d}
                  onClick={() => onDepthChange(active ? null : d)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all"
                  style={
                    active
                      ? {
                          background: "var(--text-main)",
                          color: "var(--bg)",
                          borderColor: "var(--text-main)",
                        }
                      : {}
                  }
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="text-xs text-muted flex justify-between items-center">
          <span>Найдено моделей:</span>
          <span className="font-bold text-foreground text-base">{totalCount}</span>
        </div>
      </div>
    </div>
  );
}