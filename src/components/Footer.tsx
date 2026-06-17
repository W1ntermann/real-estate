"use client";

import { ArrowUp } from "lucide-react";

const links = {
  "Нерухомість": ["Продаж", "Оренда", "Нові об'єкти", "Інвестиції"],
  "Компанія": ["Про нас", "Команда", "Кар'єра", "Новини"],
  "Послуги": ["Купівля", "Продаж", "Оренда", "Консалтинг"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#000", borderTop: "1px solid #262626", paddingTop: 64, paddingBottom: 32 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: 40, marginBottom: 64 }}>
          <div className="lg:col-span-2">
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 18, color: "#fff", letterSpacing: "-0.01em" }}>LUMIÈRE</span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.65, color: "#a1a1a1", maxWidth: 280, marginBottom: 24 }}>
              Преміальне агентство нерухомості. Понад 11 років ми перетворюємо пошук дому на незабутній досвід.
            </p>
            <div className="flex" style={{ gap: 8 }}>
              {["Ig", "Fb", "Li"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    border: "1px solid #262626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#a1a1a1",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#a1a1a1"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#262626"; e.currentTarget.style.color = "#a1a1a1"; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, color: "#fff", textTransform: "uppercase", letterSpacing: "0.083em", marginBottom: 20 }}>
                {category}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#a1a1a1", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#a1a1a1")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ borderTop: "1px solid #262626", paddingTop: 24, gap: 16 }}
        >
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#a1a1a1", margin: 0 }}>
            © {new Date().getFullYear()} Lumière Estate. Всі права захищено.
          </p>
          <div className="flex items-center" style={{ gap: 24 }}>
            <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#a1a1a1", textDecoration: "none" }}>Конфіденційність</a>
            <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#a1a1a1", textDecoration: "none" }}>Умови</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                width: 32,
                height: 32,
                borderRadius: 9999,
                border: "1px solid #262626",
                background: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a1a1a1",
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#a1a1a1"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#262626"; e.currentTarget.style.color = "#a1a1a1"; }}
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
