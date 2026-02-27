import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Método", href: "#metodo" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Oferta", href: "#oferta" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 18 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/80 backdrop-blur-2xl border-b shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
      style={{ borderColor: scrolled ? "rgba(255,255,255,0.05)" : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.03 }}
        >
          {/* Fitness Logo — abstract flame/body silhouette with "20" */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F593" />
                <stop offset="1" stopColor="#00D47E" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="18" y1="2" x2="18" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00F593" />
                <stop offset="0.6" stopColor="#00D47E" />
                <stop offset="1" stopColor="#00B86B" />
              </linearGradient>
            </defs>
            {/* Rounded square bg */}
            <rect width="36" height="36" rx="10" fill="#0A0A0F" />
            <rect x="0.5" y="0.5" width="35" height="35" rx="9.5" stroke="url(#logoGrad)" strokeOpacity="0.3" />
            {/* Abstract flame / body silhouette */}
            <path
              d="M18 4C18 4 12 10 12 16C12 18.5 13 20.5 14.5 22C13.5 21 13 19.5 13 18C13 15 15.5 11 18 8C20.5 11 23 15 23 18C23 19.5 22.5 21 21.5 22C23 20.5 24 18.5 24 16C24 10 18 4 18 4Z"
              fill="url(#flameGrad)"
              opacity="0.25"
            />
            {/* Inner flame */}
            <path
              d="M18 10C18 10 15 14 15 17C15 18.8 16.3 20.3 18 20.8C19.7 20.3 21 18.8 21 17C21 14 18 10 18 10Z"
              fill="url(#flameGrad)"
              opacity="0.5"
            />
            {/* "20" text */}
            <text
              x="18"
              y="27"
              textAnchor="middle"
              fill="url(#logoGrad)"
              fontSize="10"
              fontWeight="900"
              fontFamily="Inter, sans-serif"
            >
              20
            </text>
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-white text-[17px] tracking-tight" style={{ fontWeight: 800 }}>
              20<span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">Passos</span>
            </span>
            <span className="text-[#9CA3AF]/60 text-[9px] tracking-[0.15em] uppercase" style={{ fontWeight: 500 }}>
              Fitness Method
            </span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="text-[#9CA3AF] text-sm hover:text-white transition-colors"
              style={{ fontWeight: 500 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#oferta"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,245,147,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#00F593] to-[#00D47E] text-[#0A0A0F] px-5 py-2.5 rounded-xl text-sm whitespace-nowrap cursor-pointer"
            style={{ fontWeight: 700 }}
          >
            Quero Agora
          </motion.a>
        </div>

        {/* Mobile menu btn */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="md:hidden bg-[#0A0A0F]/98 backdrop-blur-2xl border-b"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#9CA3AF] py-2 hover:text-white transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#oferta"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-[#00F593] to-[#00D47E] text-[#0A0A0F] px-5 py-3 rounded-xl text-center whitespace-nowrap"
                style={{ fontWeight: 700 }}
              >
                Quero Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}