"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ірина Петренко",
    role: "Підприємець, Київ",
    text: "Lumière Estate перетворила процес купівлі пентхаусу на справжнє задоволення. Команда врахувала кожну деталь — від юридичної перевірки до фінального дизайну.",
  },
  {
    name: "Сергій Гончаренко",
    role: "IT-директор, Харків",
    text: "Ми продали нашу заміську резиденцію на 18% вище ринкової ціни завдяки їхньому маркетингу та мережі покупців. Вражаючий результат за рекордно короткий термін.",
  },
  {
    name: "Марія Ковальська",
    role: "Інвестор, Одеса",
    text: "Управляю портфелем з 7 об'єктів через Lumière Estate вже три роки. Аналітика ринку, рекомендації щодо придбання та управління оренду — все на найвищому рівні.",
  },
  {
    name: "Андрій Литвиненко",
    role: "Архітектор, Львів",
    text: "Знайшли для мене унікальний лофт у центрі міста, який ідеально підходить і для роботи, і для проживання. Враховували всі мої специфічні вимоги.",
  },
];

const logos = [
  "Forbes Ukraine", "The Ukrainians", "Property Times", "Real Estate UA", "Kyiv Post",
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" style={{ background: "#000", padding: "120px 0", borderTop: "1px solid #262626" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Logo strip */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 96 }}
        >
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: 32 }}>У пресі</p>
          <div className="flex flex-wrap items-center justify-between" style={{ gap: 24 }}>
            {logos.map((logo) => (
              <span key={logo} style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 15, color: "#a1a1a1", letterSpacing: "0.02em", whiteSpace: "nowrap" as const }}>
                {logo}
              </span>
            ))}
          </div>
          <div style={{ height: 1, background: "#262626", marginTop: 32 }} />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>Відгуки клієнтів</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(36px, 4vw, 72px)", lineHeight: 1.11, letterSpacing: "-0.01em", color: "#fff", margin: 0 }}>
            Що кажуть клієнти
          </h2>
        </motion.div>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "#111",
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 18,
                  lineHeight: 1.56,
                  color: "#fff",
                  margin: "0 0 28px",
                  textAlign: "center",
                }}>
                  "{testimonials[current].text}"
                </p>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, color: "#fff", margin: "0 0 4px" }}>
                    {testimonials[current].name}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#a1a1a1", margin: 0 }}>
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center" style={{ gap: 16, marginTop: 32 }}>
            <button
              onClick={prev}
              style={{ background: "none", border: "1px solid #262626", borderRadius: 9999, padding: "8px 12px", color: "#a1a1a1", cursor: "pointer", display: "flex", alignItems: "center", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#a1a1a1"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#262626"; e.currentTarget.style.color = "#a1a1a1"; }}
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center" style={{ gap: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    border: "none",
                    borderRadius: 9999,
                    height: 6,
                    width: i === current ? 24 : 6,
                    background: i === current ? "#fff" : "#262626",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              style={{ background: "none", border: "1px solid #262626", borderRadius: 9999, padding: "8px 12px", color: "#a1a1a1", cursor: "pointer", display: "flex", alignItems: "center", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#a1a1a1"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#262626"; e.currentTarget.style.color = "#a1a1a1"; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
