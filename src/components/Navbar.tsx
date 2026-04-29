"use client";

import { useI18n } from "@/context/I18nContext";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => setLanguage(language === "vi" ? "en" : "vi");

  const navLinks = [
    { name: t("nav_home"), href: "#home" },
    { name: t("nav_solutions"), href: "#solutions" },
    { name: t("nav_brands"), href: "#projects" },
    { name: t("nav_benefits"), href: "#benefits" },
    { name: t("nav_process"), href: "#process" },
    { name: t("nav_quote"), href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white shadow-lg py-1.5" : "bg-transparent py-3.5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo-vimgroup.png"
                alt="VIMGROUP"
                width={1200}
                height={400}
                className={`w-auto object-contain transition-all duration-500 ${
                  scrolled ? "h-14 md:h-18" : "h-20 md:h-24 lg:h-28"
                }`}
                priority
              />
            </a>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href + link.name} href={link.href} className={`${scrolled ? "text-gray-900" : "text-white"} hover:text-red-600 transition-colors font-bold text-sm tracking-wide uppercase`}>
                {link.name}
              </a>
            ))}
            <button onClick={toggleLanguage} className={`flex items-center gap-1 ${scrolled ? "text-red-600 bg-red-600/5" : "text-white bg-white/10"} hover:bg-red-600/20 px-3 py-1.5 rounded-full transition-all border border-red-600/10`}>
              <Globe size={16} />
              <span className="font-bold text-sm">{language.toUpperCase()}</span>
            </button>
            <a href="tel:0986969339" className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold px-6 py-2.5 rounded-full hover:shadow-[0_8px_25px_rgba(200,16,46,0.4)] transition-all transform hover:scale-105">
              <Phone size={18} fill="currentColor" />
              <span>0986 969 339</span>
            </a>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleLanguage} className={`${scrolled ? "text-red-600" : "text-white"}`}><Globe size={20} /></button>
            <a href="tel:0986969339" className="flex items-center gap-1 bg-red-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-md">
              <Phone size={16} fill="currentColor" /><span>{t("nav_call")}</span>
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? "text-gray-900" : "text-white"}`}>{isOpen ? <X size={32} /> : <Menu size={32} />}</button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="px-4 pt-4 pb-10 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href + link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-6 py-4 rounded-2xl text-white hover:text-red-600 hover:bg-white/5 font-bold transition-all border-b border-white/5 last:border-0">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
