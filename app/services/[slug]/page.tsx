"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { getServiceBySlug, servicesData } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: "1px solid #262626", cursor: "pointer" }}
      onClick={() => setOpen(!open)}
    >
      <div
        className="flex items-center justify-between"
        style={{ padding: "24px 0" }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 16,
            color: "#fff",
            flex: 1,
            paddingRight: 24,
          }}
        >
          {question}
        </span>
        {open ? (
          <ChevronUp size={18} color="#a1a1a1" />
        ) : (
          <ChevronDown size={18} color="#a1a1a1" />
        )}
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          style={{ paddingBottom: 24 }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.65,
              color: "#a1a1a1",
              margin: 0,
            }}
          >
            {answer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const slug = params.slug;
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div
        style={{
          background: "#000",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#a1a1a1" }}>
            Послугу не знайдено
          </p>
          <button
            onClick={() => router.push("/")}
            className="btn-pill"
            style={{ marginTop: 24 }}
          >
            На головну
          </button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const otherServices = servicesData.filter((s) => s.slug !== slug);

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative"
        style={{ minHeight: 560, display: "flex", alignItems: "flex-end" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${service.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.28)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
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
            paddingBottom: 80,
            paddingTop: 140,
          }}
        >
          <button
            onClick={() => router.push("/#services")}
            className="flex items-center"
            style={{
              gap: 8,
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              color: "#a1a1a1",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              marginBottom: 32,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1a1")}
          >
            <ArrowLeft size={14} /> Назад до послуг
          </button>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="flex items-center"
              style={{ gap: 12, marginBottom: 20 }}
            >
              <div
                style={{
                  padding: 10,
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={20} color="#a1a1a1" strokeWidth={1.5} />
              </div>
              <p className="eyebrow">Послуга</p>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(40px, 5vw, 80px)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "#fff",
                margin: "0 0 20px",
                maxWidth: 800,
              }}
            >
              {service.title}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                lineHeight: 1.6,
                color: "#a1a1a1",
                maxWidth: 600,
                margin: 0,
              }}
            >
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tagline */}
      <section
        style={{
          borderTop: "1px solid #262626",
          borderBottom: "1px solid #262626",
          background: "#111",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(20px, 2.5vw, 32px)",
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.01em",
              opacity: 0.9,
            }}
          >
            &ldquo;{service.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* Description + Benefits */}
      <section
        style={{ padding: "96px 24px", borderBottom: "1px solid #262626" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ maxWidth: 1200, margin: "0 auto", gap: 80 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              Про послугу
            </p>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(28px, 3vw, 48px)",
                lineHeight: 1.13,
                letterSpacing: "-0.01em",
                color: "#fff",
                margin: "0 0 24px",
              }}
            >
              Детальніше
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "#a1a1a1",
                margin: "0 0 40px",
              }}
            >
              {service.description}
            </p>
            <button
              className="btn-pill"
              onClick={() => router.push("/#contact")}
            >
              {service.cta} <ArrowRight size={14} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              Переваги
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start" style={{ gap: 14 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: "1px solid #262626",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Check size={11} color="#fff" />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: "#e5e5e5",
                    }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section
        style={{ padding: "96px 24px", borderBottom: "1px solid #262626" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: 64 }}
          >
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              Як це працює
            </p>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(28px, 3vw, 48px)",
                lineHeight: 1.13,
                letterSpacing: "-0.01em",
                color: "#fff",
                margin: 0,
              }}
            >
              Процес крок за кроком
            </h2>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 1, background: "#262626" }}
          >
            {service.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                style={{ background: "#000", padding: "40px 36px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 48,
                    color: "#262626",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: 24,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: 18,
                    color: "#fff",
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "#a1a1a1",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{ padding: "96px 24px", borderBottom: "1px solid #262626" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-5"
          style={{ maxWidth: 1200, margin: "0 auto", gap: 80 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(28px, 3vw, 48px)",
                lineHeight: 1.13,
                letterSpacing: "-0.01em",
                color: "#fff",
                margin: "0 0 24px",
              }}
            >
              Часті запитання
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.65,
                color: "#a1a1a1",
                margin: "0 0 40px",
              }}
            >
              Не знайшли відповідь? Наш консультант готовий відповісти на
              будь-яке питання.
            </p>
            <button
              className="btn-pill"
              onClick={() => router.push("/#contact")}
            >
              Написати нам <ArrowRight size={14} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
            style={{ borderTop: "1px solid #262626" }}
          >
            {service.faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{ padding: "96px 24px", borderBottom: "1px solid #262626" }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            background: "#111",
            borderRadius: 16,
            padding: "64px 48px",
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            textAlign: "center" as const,
          }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            Готові розпочати?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#fff",
              margin: "0 0 20px",
              maxWidth: 640,
            }}
          >
            {service.cta}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "#a1a1a1",
              maxWidth: 480,
              margin: "0 0 40px",
              lineHeight: 1.65,
            }}
          >
            Зв'яжіться з нами сьогодні — ваш персональний консультант
            відповість протягом години.
          </p>
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: 16 }}
          >
            <button
              className="btn-pill"
              onClick={() => router.push("/#contact")}
            >
              Зв'язатися зараз <ArrowRight size={14} />
            </button>
            <a
              href="tel:+380441234567"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              +38 (044) 123-45-67
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            Також пропонуємо
          </p>
          <h3
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(24px, 3vw, 40px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#fff",
              margin: "0 0 48px",
            }}
          >
            Інші послуги
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 1, background: "#262626" }}
          >
            {otherServices.map((s) => {
              const OtherIcon = s.icon;
              return (
                <button
                  key={s.slug}
                  onClick={() => router.push(`/services/${s.slug}`)}
                  style={{
                    background: "#000",
                    padding: "40px 36px",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.25s",
                    width: "100%",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#0a0a0a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#000")
                  }
                >
                  <OtherIcon
                    size={22}
                    color="#a1a1a1"
                    strokeWidth={1.5}
                    style={{ marginBottom: 20 }}
                  />
                  <h4
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: 20,
                      color: "#fff",
                      margin: "0 0 10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: "#a1a1a1",
                      margin: "0 0 24px",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.subtitle}
                  </p>
                  <span
                    className="flex items-center"
                    style={{
                      gap: 6,
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#fff",
                    }}
                  >
                    Дізнатися більше <ArrowRight size={13} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}