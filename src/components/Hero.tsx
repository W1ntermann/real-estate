"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          filter: "brightness(0.35)",
        }}
      />

      {/* Gradient overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)",
        }}
      />

      {/* Iridescent ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(187,222,242,0.07) 0%, rgba(209,170,215,0.04) 40%, transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="flex flex-col justify-center"
          style={{ minHeight: "100vh", paddingTop: 120, paddingBottom: 120, position: "relative" as const }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ maxWidth: 720 }}
          >
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              Нерухомість преміум-класу
            </p>
            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(52px, 7vw, 96px)",
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                color: "#fff",
                margin: "0 0 28px",
              }}
            >
              Знайдіть
              <br />
              своє місце
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: 18,
                lineHeight: 1.65,
                color: "#e5e5e5",
                maxWidth: 520,
                marginBottom: 48,
              }}
            >
              Lumière Estate — бутикове агентство, яке перетворює купівлю
              нерухомості на бездоганний досвід. Ексклюзивні резиденції,
              персональний підхід.
            </p>

            <div
              className="flex flex-wrap items-center"
              style={{ gap: 16, marginBottom: 64 }}
            >
              <button
                className="btn-pill"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Отримати консультацію <ArrowRight size={14} />
              </button>
              <Link
                href="/#properties"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#e5e5e5",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Переглянути об'єкти →
              </Link>
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap"
              style={{ gap: 0, borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              {[
                { v: "1 240+", l: "Проданих об'єктів" },
                { v: "11 років", l: "На ринку" },
                { v: "98%", l: "Задоволених клієнтів" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  style={{
                    padding: "20px 40px 20px 0",
                    borderRight:
                      i < 2 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    paddingRight: i < 2 ? 40 : 0,
                    marginRight: i < 2 ? 40 : 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: 28,
                      color: "#fff",
                      margin: "0 0 4px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.v}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      color: "#a1a1a1",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.083em",
                    }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              position: "absolute",
              bottom: 40,
              left: 24,
              right: 24,
              maxWidth: 1152,
              background: "rgba(17,17,17,0.05)",
              backdropFilter: "blur(16px)",
              borderRadius: 20,
              padding: "8px 12px",
              display: "flex",
              gap: 8,
              flexWrap: "wrap" as const,
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="flex items-center"
              style={{
                flex: "1 1 180px",
                minWidth: 160,
                padding: "10px 18px",
                gap: 12,
              }}
            >
              <Search size={16} color="#555" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Локація або район"
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  width: "100%",
                }}
              />
            </div>
            <div
              style={{
                flex: "1 1 150px",
                minWidth: 130,
                padding: "10px 18px",
                display: "flex",
                alignItems: "center",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <select
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "#a1a1a1",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <option value="" style={{ background: "#111" }}>
                  Тип об'єкту
                </option>
                <option value="villa" style={{ background: "#111" }}>
                  Вілла
                </option>
                <option value="penthouse" style={{ background: "#111" }}>
                  Пентхаус
                </option>
                <option value="apartment" style={{ background: "#111" }}>
                  Апартаменти
                </option>
                <option value="townhouse" style={{ background: "#111" }}>
                  Таунхаус
                </option>
              </select>
            </div>
            <div
              style={{
                flex: "1 1 150px",
                minWidth: 130,
                padding: "10px 18px",
                display: "flex",
                alignItems: "center",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <select
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "#a1a1a1",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  width: "100%",
                  cursor: "pointer",
                  appearance: "none",
                }}
              >
                <option value="" style={{ background: "#111" }}>
                  Бюджет
                </option>
                <option value="1" style={{ background: "#111" }}>
                  до €500 000
                </option>
                <option value="2" style={{ background: "#111" }}>
                  €500К – €1М
                </option>
                <option value="3" style={{ background: "#111" }}>
                  €1М – €3М
                </option>
                <option value="4" style={{ background: "#111" }}>
                  €3М+
                </option>
              </select>
            </div>
            <button
              style={{
                borderRadius: 14,
                background: "#fff",
                border: "none",
                color: "#000",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                padding: "12px 28px",
                cursor: "pointer",
                transition: "background 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e5e5e5")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              Пошук <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}