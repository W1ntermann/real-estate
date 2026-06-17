"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const team = [
  { name: "Олександр Мельник", role: "Засновник та CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Вікторія Савченко", role: "Директор з продажу", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Дмитро Коваленко", role: "Інвестиційний аналітик", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Наталія Бойко", role: "Юридичний радник", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
];

const values = [
  "Доброчесність у кожній угоді",
  "Клієнт — головний пріоритет",
  "Швидкість та надійність",
  "Юридична безпека",
];

export default function About() {
  const ref = useRef(null);
  const teamRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ background: "#000", padding: "120px 0", borderTop: "1px solid #262626" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80, marginBottom: 120 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow" style={{ marginBottom: 16 }}>Наша Історія</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(36px, 4vw, 72px)", lineHeight: 1.11, letterSpacing: "-0.01em", color: "#fff", margin: "0 0 32px" }}>
              Понад десятиліття досконалості
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "#a1a1a1", marginBottom: 24 }}>
              Lumière Estate заснована у 2013 році з простою, але амбіційною місією — зробити угоди з нерухомістю бездоганними та приємними. Ми не просто агенти — ми ваші партнери у найважливіших рішеннях.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "#a1a1a1", marginBottom: 48 }}>
              За роки роботи ми сформували унікальну мережу контактів, глибокі знання ринку та репутацію, яка говорить сама за себе.
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {values.map(v => (
                <li key={v} className="flex items-center" style={{ gap: 12, fontFamily: "var(--font-sans)", fontSize: 15, color: "#e5e5e5" }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#fff", flexShrink: 0 }} />
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4/3" }}>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                  alt="Lumière Estate офіс"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{
                position: "absolute",
                bottom: -24,
                left: -24,
                background: "#111",
                borderRadius: 8,
                padding: "20px 24px",
                maxWidth: 260,
                border: "1px solid #262626",
              }}>
                <div className="flex items-center" style={{ gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#a1a1a1", textTransform: "uppercase", letterSpacing: "0.08em" }}>Активно працюємо</span>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 18, color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>
                  Більше 500 угод щорічно
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          ref={teamRef}
          initial={{ opacity: 0, y: 24 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>Команда</p>
          <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: 1.13, letterSpacing: "-0.01em", color: "#fff", margin: 0 }}>
            Люди, яким ви довіряєте
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 24 }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
              style={{ textAlign: "center" }}
            >
              <div style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "3/4", marginBottom: 16 }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s" }}
                  className="group-hover:scale-105"
                />
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 15, color: "#fff", margin: "0 0 4px" }}>{member.name}</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#a1a1a1", margin: 0 }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
