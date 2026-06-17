"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1240, suffix: "+", label: "Проданих об'єктів" },
  { value: 11, suffix: "", label: "Років досвіду" },
  { value: 98, suffix: "%", label: "Задоволених клієнтів" },
  { value: 24, suffix: "", label: "Міста та регіони" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const inc = value / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(cur));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(48px, 5vw, 72px)", lineHeight: 1, letterSpacing: "-0.01em", color: "#fff" }}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#111", padding: "96px 0", borderTop: "1px solid #262626", borderBottom: "1px solid #262626" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 1, background: "#262626" }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ background: "#111", padding: "48px 40px", textAlign: "center" }}
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "#a1a1a1", margin: "12px 0 0", textTransform: "uppercase", letterSpacing: "0.083em" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
