"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Телефон", value: "+38 (044) 123-45-67", href: "tel:+380441234567" },
  { icon: Mail, label: "Електронна пошта", value: "info@lumiere-estate.ua", href: "mailto:info@lumiere-estate.ua" },
  { icon: MapPin, label: "Адреса офісу", value: "вул. Хрещатик, 15, Київ", href: "#" },
];

const inputStyle = {
  width: "100%",
  background: "#111",
  border: "1px solid #262626",
  borderRadius: 8,
  padding: "12px 16px",
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  color: "#fff",
  outline: "none",
  boxSizing: "border-box" as const,
  transition: "border-color 0.2s",
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  return (
    <section id="contact" style={{ background: "#000", padding: "120px 0", borderTop: "1px solid #262626" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>Контакти</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(36px, 4vw, 72px)", lineHeight: 1.11, letterSpacing: "-0.01em", color: "#fff", margin: "0 0 16px" }}>
            Починаємо розмову
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "#a1a1a1", maxWidth: 480, margin: "0 auto" }}>
            Залиште заявку і наш консультант зв'яжеться з вами протягом години
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5" style={{ gap: 40, maxWidth: 960, margin: "0 auto" }}>
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                style={{ background: "#111", border: "1px solid #262626", borderRadius: 8, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16, textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#a1a1a1")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#262626")}
              >
                <Icon size={18} color="#a1a1a1" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#a1a1a1", textTransform: "uppercase", letterSpacing: "0.083em", margin: "0 0 4px" }}>{label}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#fff", margin: 0 }}>{value}</p>
                </div>
              </a>
            ))}
            <div style={{ background: "#111", border: "1px solid #262626", borderRadius: 8, padding: "20px 24px", marginTop: 4 }}>
              <div className="flex items-center" style={{ gap: 8, marginBottom: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#a1a1a1", textTransform: "uppercase", letterSpacing: "0.083em" }}>Доступні зараз</span>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#a1a1a1", margin: 0, lineHeight: 1.6 }}>
                Пн–Пт: 9:00–20:00<br />Сб–Нд: 10:00–18:00
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div style={{ background: "#111", borderRadius: 16, padding: "40px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 9999, border: "1px solid #262626", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <ArrowRight size={20} color="#fff" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 24, color: "#fff", margin: "0 0 12px" }}>Дякуємо!</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#a1a1a1", margin: 0 }}>Наш консультант зв'яжеться з вами найближчим часом.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#a1a1a1", textTransform: "uppercase", letterSpacing: "0.083em", display: "block", marginBottom: 8 }}>Ваше ім'я</label>
                      <input
                        required
                        type="text"
                        placeholder="Іван Іваненко"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "#a1a1a1")}
                        onBlur={e => (e.currentTarget.style.borderColor = "#262626")}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#a1a1a1", textTransform: "uppercase", letterSpacing: "0.083em", display: "block", marginBottom: 8 }}>Телефон</label>
                      <input
                        required
                        type="tel"
                        placeholder="+38 (0__) ___-__-__"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = "#a1a1a1")}
                        onBlur={e => (e.currentTarget.style.borderColor = "#262626")}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#a1a1a1", textTransform: "uppercase", letterSpacing: "0.083em", display: "block", marginBottom: 8 }}>Електронна пошта</label>
                    <input
                      type="email"
                      placeholder="ivan@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "#a1a1a1")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#262626")}
                    />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#a1a1a1", textTransform: "uppercase", letterSpacing: "0.083em", display: "block", marginBottom: 8 }}>Ваш запит</label>
                    <textarea
                      rows={4}
                      placeholder="Опишіть, що вас цікавить — купівля, продаж, оренда або консультація"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#a1a1a1")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#262626")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-pill flex items-center justify-center"
                    style={{ width: "100%", padding: "12px 24px", fontSize: 14, gap: 8 }}
                  >
                    Надіслати запит <ArrowRight size={14} />
                  </button>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "#a1a1a1", textAlign: "center", margin: "16px 0 0" }}>
                    Ми не передаємо ваші дані третім особам
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
