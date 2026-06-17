"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  ArrowRight,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { propertiesData } from "@/data/properties";

const types = [
  "Всі",
  "Апартаменти",
  "Пентхаус",
  "Вілла",
  "Таунхаус",
  "Лофт",
  "Особняк",
  "Котедж",
  "Садиба",
  "Студія",
];

const statuses = [
  { label: "Всі", value: "all" },
  { label: "Продаж", value: "sale" },
  { label: "Оренда", value: "rent" },
];

export default function PropertiesPage() {
  const [activeType, setActiveType] = useState("Всі");
  const [activeStatus, setActiveStatus] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...propertiesData];
    if (activeType !== "Всі") list = list.filter((p) => p.type === activeType);
    if (activeStatus !== "all")
      list = list.filter((p) => p.status === activeStatus);
    if (sortBy === "price-asc") list.sort((a, b) => a.priceNum - b.priceNum);
    if (sortBy === "price-desc") list.sort((a, b) => b.priceNum - a.priceNum);
    if (sortBy === "area") list.sort((a, b) => b.area - a.area);
    return list;
  }, [activeType, activeStatus, sortBy]);

  const pillStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    fontWeight: 400,
    padding: "7px 18px",
    borderRadius: 9999,
    border: active ? "1px solid #fff" : "1px solid #333",
    background: active ? "#fff" : "transparent",
    color: active ? "#000" : "#a1a1a1",
    cursor: "pointer",
    transition: "all 0.2s",
    whiteSpace: "nowrap" as const,
  });

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* Page hero */}
      <div
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            <Link
              href="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              ← Головна
            </Link>
          </p>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(40px, 5vw, 80px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: "0 0 20px",
            }}
          >
            Всі об'єкти
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              fontWeight: 300,
              color: "#a1a1a1",
              margin: 0,
            }}
          >
            {filtered.length} об'єктів знайдено
          </p>
        </motion.div>
      </div>

      {/* Filter bar */}
      <div
        style={{
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
          background: "#000",
          position: "sticky",
          top: 64,
          zIndex: 40,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            className="flex items-center justify-between"
            style={{ gap: 16, height: 64 }}
          >
            {/* Status tabs */}
            <div className="flex items-center" style={{ gap: 4 }}>
              {statuses.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setActiveStatus(s.value)}
                  style={pillStyle(activeStatus === s.value)}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center" style={{ gap: 12 }}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  color: "#a1a1a1",
                  background: "transparent",
                  border: "1px solid #333",
                  borderRadius: 9999,
                  padding: "7px 16px",
                  cursor: "pointer",
                  outline: "none",
                  appearance: "none",
                }}
              >
                <option value="default" style={{ background: "#111" }}>
                  За замовчуванням
                </option>
                <option value="price-asc" style={{ background: "#111" }}>
                  Ціна: зростання
                </option>
                <option value="price-desc" style={{ background: "#111" }}>
                  Ціна: спадання
                </option>
                <option value="area" style={{ background: "#111" }}>
                  Площа
                </option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                style={{
                  ...pillStyle(showFilters),
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <SlidersHorizontal size={13} />
                Фільтри
              </button>
            </div>
          </div>

          {/* Expandable type filter */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ paddingBottom: 16, overflow: "hidden" }}
            >
              <div className="flex flex-wrap items-center" style={{ gap: 8 }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    color: "#555",
                    marginRight: 4,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Тип
                </span>
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    style={pillStyle(activeType === t)}
                  >
                    {t}
                  </button>
                ))}
                {(activeType !== "Всі" || activeStatus !== "all") && (
                  <button
                    onClick={() => {
                      setActiveType("Всі");
                      setActiveStatus("all");
                    }}
                    style={{
                      ...pillStyle(false),
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#ef4444",
                      borderColor: "#3f1010",
                    }}
                  >
                    <X size={12} /> Скинути
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 120px" }}
      >
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p
              style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "#555" }}
            >
              Об'єктів за вибраними фільтрами не знайдено
            </p>
            <button
              className="btn-pill"
              style={{ marginTop: 24 }}
              onClick={() => {
                setActiveType("Всі");
                setActiveStatus("all");
              }}
            >
              Скинути фільтри
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 1, background: "#1a1a1a" }}
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(i * 0.06, 0.4),
                }}
                style={{ background: "#000", cursor: "pointer" }}
                className="group"
              >
                <div
                  style={{
                    overflow: "hidden",
                    height: 260,
                    position: "relative",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s",
                      display: "block",
                    }}
                    className="group-hover:scale-105"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 11,
                        fontWeight: 400,
                        color: "#fff",
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(8px)",
                        padding: "4px 12px",
                        borderRadius: 9999,
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {p.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 11,
                        fontWeight: 400,
                        color: p.status === "rent" ? "#a8e6cf" : "#fff",
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(8px)",
                        padding: "4px 12px",
                        borderRadius: 9999,
                        border: `1px solid ${
                          p.status === "rent"
                            ? "rgba(168,230,207,0.3)"
                            : "rgba(255,255,255,0.1)"
                        }`,
                      }}
                    >
                      {p.status === "rent" ? "Оренда" : "Продаж"}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "28px 28px 32px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 400,
                      color: "#555",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    {p.type}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: 19,
                      lineHeight: 1.3,
                      color: "#fff",
                      margin: "0 0 10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "#555",
                      margin: "0 0 14px",
                      lineHeight: 1.5,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {p.description}
                  </p>
                  <div
                    className="flex items-center"
                    style={{ gap: 6, marginBottom: 20 }}
                  >
                    <MapPin size={12} color="#555" />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 13,
                        color: "#555",
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
                      borderBottom: "1px solid #1a1a1a",
                    }}
                  >
                    <span
                      className="flex items-center"
                      style={{
                        gap: 5,
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        color: "#555",
                      }}
                    >
                      <Bed size={12} color="#555" />
                      {p.beds} кімн.
                    </span>
                    <span
                      className="flex items-center"
                      style={{
                        gap: 5,
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        color: "#555",
                      }}
                    >
                      <Bath size={12} color="#555" />
                      {p.baths} санв.
                    </span>
                    <span
                      className="flex items-center"
                      style={{
                        gap: 5,
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        color: "#555",
                      }}
                    >
                      <Maximize2 size={12} color="#555" />
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
                        color: "#555",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#555")
                      }
                    >
                      Детальніше <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}