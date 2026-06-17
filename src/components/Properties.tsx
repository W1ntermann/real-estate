"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Bed, Bath, Maximize2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { propertiesData } from "@/data/properties";

const properties = propertiesData.slice(0, 6);

export default function Properties() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();

  return (
    <section id="properties" style={{ background: "#000", padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>
            Наш портфель
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(36px, 4vw, 72px)",
              lineHeight: 1.11,
              letterSpacing: "-0.01em",
              color: "#fff",
              margin: 0,
            }}
          >
            Обрані резиденції
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 1, background: "#262626" }}
        >
          {properties.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ background: "#000", cursor: "pointer" }}
              className="group"
            >
              <div style={{ overflow: "hidden", height: 240 }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 0,
                    transition: "transform 0.7s",
                    display: "block",
                  }}
                  className="group-hover:scale-105"
                />
              </div>
              <div style={{ padding: "28px 28px 32px" }}>
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: 12 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#a1a1a1",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.type}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#a1a1a1",
                      background: "#111",
                      padding: "2px 10px",
                      borderRadius: 9999,
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 20,
                    lineHeight: 1.3,
                    color: "#fff",
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <div
                  className="flex items-center"
                  style={{ gap: 6, marginBottom: 20 }}
                >
                  <MapPin size={13} color="#a1a1a1" />
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "#a1a1a1",
                    }}
                  >
                    {p.location}
                  </span>
                </div>
                <div
                  className="flex items-center"
                  style={{
                    gap: 20,
                    marginBottom: 24,
                    paddingBottom: 20,
                    borderBottom: "1px solid #262626",
                  }}
                >
                  <span
                    className="flex items-center"
                    style={{
                      gap: 6,
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "#a1a1a1",
                    }}
                  >
                    <Bed size={13} color="#a1a1a1" />
                    {p.beds} кімн.
                  </span>
                  <span
                    className="flex items-center"
                    style={{
                      gap: 6,
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "#a1a1a1",
                    }}
                  >
                    <Bath size={13} color="#a1a1a1" />
                    {p.baths} санв.
                  </span>
                  <span
                    className="flex items-center"
                    style={{
                      gap: 6,
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "#a1a1a1",
                    }}
                  >
                    <Maximize2 size={13} color="#a1a1a1" />
                    {p.area} м²
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: 18,
                      color: "#fff",
                    }}
                  >
                    {p.price}
                  </span>
                  <button
                    className="flex items-center"
                    style={{
                      gap: 6,
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "#a1a1a1",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#a1a1a1")
                    }
                  >
                    Детальніше <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 56 }}
        >
          <button
            className="btn-pill"
            onClick={() => router.push("/properties")}
          >
            Всі об'єкти <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}