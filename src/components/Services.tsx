"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { servicesData } from "@/data/services";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();

  return (
    <section
      id="services"
      style={{
        background: "#000",
        padding: "120px 0",
        borderTop: "1px solid #262626",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            Що ми пропонуємо
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(36px, 4vw, 72px)",
              lineHeight: 1.11,
              letterSpacing: "-0.01em",
              color: "#fff",
              margin: "0 0 16px",
            }}
          >
            Повний спектр послуг
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "#a1a1a1",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Від пошуку першого дому до управління інвестиційним портфелем — ми
            поруч на кожному кроці
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 1, background: "#262626" }}
        >
          {servicesData.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => router.push(`/services/${s.slug}`)}
                className="group"
                style={{
                  background: "#000",
                  padding: "48px",
                  transition: "background 0.3s",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#080808")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#000")
                }
              >
                <div style={{ marginBottom: 28 }}>
                  <Icon size={24} color="#a1a1a1" strokeWidth={1} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 24,
                    lineHeight: 1.33,
                    letterSpacing: "-0.24px",
                    color: "#fff",
                    margin: "0 0 14px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "#a1a1a1",
                    margin: "0 0 28px",
                    maxWidth: 400,
                  }}
                >
                  {s.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0 0 36px",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center"
                      style={{
                        gap: 10,
                        fontFamily: "var(--font-sans)",
                        fontSize: 13,
                        color: "#a1a1a1",
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "#a1a1a1",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  className="flex items-center"
                  style={{
                    gap: 6,
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#fff",
                    transition: "gap 0.2s",
                  }}
                >
                  Детальніше про послугу <ArrowRight size={14} />
                </div>

                {/* Hover indicator line */}
                <div
                  className="group-hover:opacity-100"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background:
                      "linear-gradient(to right, rgba(187,222,242,0.4), rgba(209,170,215,0.4))",
                    opacity: 0,
                    transition: "opacity 0.4s",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}