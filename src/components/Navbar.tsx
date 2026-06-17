"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Об'єкти", href: "/properties", isRoute: true },
  { name: "Послуги", href: "#services", isRoute: false },
  { name: "Про нас", href: "#about", isRoute: false },
  { name: "Відгуки", href: "#testimonials", isRoute: false },
  { name: "Контакти", href: "#contact", isRoute: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function handleLink(link: { href: string; isRoute: boolean }) {
    setMobileOpen(false);
    if (link.isRoute) {
      router.push(link.href);
    } else {
      const id = link.href.replace("#", "");
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function handleContact() {
    setMobileOpen(false);
    const id = "contact";
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: "rgba(255,255,255,0.1) 0px 1px 1px 0px inset",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="flex items-center justify-between"
          style={{ height: 64 }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: 17,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            LUMIÈRE
          </Link>

          <nav className="hidden md:flex items-center" style={{ gap: 32 }}>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLink(link)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a1a1a1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center" style={{ gap: 16 }}>
            <button className="btn-pill" onClick={handleContact}>
              Зв'язатися <ArrowRight size={14} />
            </button>
          </div>

          <button
            className="md:hidden"
            style={{
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              background: "#000",
              borderTop: "1px solid #262626",
              padding: "24px",
            }}
          >
            <div className="flex flex-col" style={{ gap: 24 }}>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLink(link)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 18,
                    fontWeight: 300,
                    color: "#fff",
                    textDecoration: "none",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    textAlign: "left",
                  }}
                >
                  {link.name}
                </button>
              ))}
              <button
                className="btn-pill"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: 8,
                }}
                onClick={handleContact}
              >
                Зв'язатися <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}