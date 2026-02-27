function JeronimoLogo() {
  return (
    <span className="font-['Inter',sans-serif] text-[16px] text-white tracking-[-0.4px]" style={{ fontWeight: 600 }}>
      Jerônimo<span className="text-[#166534]">.</span>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              {/* Fitness Logo SVG — matching Navbar */}
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F593" />
                    <stop offset="1" stopColor="#00D47E" />
                  </linearGradient>
                  <linearGradient id="footerFlameGrad" x1="18" y1="2" x2="18" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F593" />
                    <stop offset="0.6" stopColor="#00D47E" />
                    <stop offset="1" stopColor="#00B86B" />
                  </linearGradient>
                </defs>
                <rect width="36" height="36" rx="10" fill="#0A0A0F" />
                <rect x="0.5" y="0.5" width="35" height="35" rx="9.5" stroke="url(#footerLogoGrad)" strokeOpacity="0.3" />
                <path
                  d="M18 4C18 4 12 10 12 16C12 18.5 13 20.5 14.5 22C13.5 21 13 19.5 13 18C13 15 15.5 11 18 8C20.5 11 23 15 23 18C23 19.5 22.5 21 21.5 22C23 20.5 24 18.5 24 16C24 10 18 4 18 4Z"
                  fill="url(#footerFlameGrad)"
                  opacity="0.25"
                />
                <path
                  d="M18 10C18 10 15 14 15 17C15 18.8 16.3 20.3 18 20.8C19.7 20.3 21 18.8 21 17C21 14 18 10 18 10Z"
                  fill="url(#footerFlameGrad)"
                  opacity="0.5"
                />
                <text
                  x="18"
                  y="27"
                  textAnchor="middle"
                  fill="url(#footerLogoGrad)"
                  fontSize="10"
                  fontWeight="900"
                  fontFamily="Inter, sans-serif"
                >
                  20
                </text>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-white text-sm tracking-tight" style={{ fontWeight: 800 }}>
                  20<span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">Passos</span>
                </span>
                <span className="text-[#9CA3AF]/60 text-[8px] tracking-[0.15em] uppercase" style={{ fontWeight: 500 }}>
                  Fitness Method
                </span>
              </div>
              <span className="text-[#9CA3AF]/60 text-sm ml-1">
                — Todos os direitos reservados © 2026
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-[#9CA3AF] text-sm hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }} />

          {/* Bottom row: credit */}
          <div className="flex items-center justify-center gap-1.5">
            <span className="text-[#9CA3AF]/50 text-xs">Desenvolvido por:</span>
            <JeronimoLogo />
          </div>
        </div>
      </div>
    </footer>
  );
}