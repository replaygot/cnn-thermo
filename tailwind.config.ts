import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Включаем режим "class", чтобы next-themes мог переключать классы
  darkMode: "class",
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        // === ДИНАМИЧЕСКИЕ ЦВЕТА (из globals.css) ===
        
        // Акцентный цвет (Кирпичный в светлой / Оранжевый в темной)
        accent: "var(--accent)", 
        "accent-secondary": "var(--accent-2)",
        
        // Старое название для совместимости, если уже юзал bg-heat
        heat: "var(--accent)",          
        
        background: "var(--bg)",        // Белый <-> Темно-синий
        foreground: "var(--text-main)", // Черный <-> Белый
        muted: "var(--text-muted)",     // Серый текст
        
        card: "var(--card-bg)",         
        header: "var(--header-bg)",     
        border: "var(--muted-border)",  

        // Совместимость
        paper: "var(--bg)",        
        ink: "var(--text-main)",   
        
        stone: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
        },
      },
      
      animation: {
        marquee: "marquee 25s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;