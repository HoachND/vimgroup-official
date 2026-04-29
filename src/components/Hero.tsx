"use client";

import { useI18n } from "@/context/I18nContext";
import { motion } from "framer-motion";
import { Layers, Rocket, Globe } from "lucide-react";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/vimgroup-banner-v2.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#0a0a0a]/85 to-black/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-500/15 text-red-500 font-bold tracking-wider text-xs mb-6 border border-red-500/30 uppercase">
              {t("hero_badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {t("hero_title_1")}<br className="hidden sm:block" />
              {t("hero_title_2")} <span className="gradient-text-red">{t("hero_title_3")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300/90 mb-8 max-w-xl leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: t("hero_desc") }} />
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold rounded-full hover:shadow-[0_0_30px_rgba(200,16,46,0.5)] transition-all transform hover:scale-105 text-center text-lg">
                {t("hero_cta")}
              </a>
              <a href="#solutions" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/60 transition-all text-center">
                {t("hero_cta2")}
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-black text-red-600">{t("hero_stat1_val")}</div>
                <div className="text-sm text-gray-400 mt-1">{t("hero_stat1")}</div>
              </div>
              <div className="text-center sm:text-left border-l border-white/10 pl-6">
                <div className="text-3xl md:text-4xl font-black text-red-600">04</div>
                <div className="text-sm text-gray-400 mt-1">{t("hero_stat2")}</div>
              </div>
              <div className="text-center sm:text-left border-l border-white/10 pl-6">
                <div className="text-3xl md:text-4xl font-black text-red-600">06+</div>
                <div className="text-sm text-gray-400 mt-1">{t("hero_stat3")}</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:flex flex-col gap-4">
            <div className="glass rounded-2xl p-6 bento-hover">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center"><Layers className="text-red-500" size={28} /></div>
                <div><h3 className="text-white font-bold text-lg">{t("hero_card1_title")}</h3><p className="text-gray-400 text-sm">{t("hero_card1_desc")}</p></div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 bento-hover">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center"><Rocket className="text-red-500" size={28} /></div>
                <div><h3 className="text-white font-bold text-lg">{t("hero_card2_title")}</h3><p className="text-gray-400 text-sm">{t("hero_card2_desc")}</p></div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 bento-hover">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center"><Globe className="text-red-500" size={28} /></div>
                <div><h3 className="text-white font-bold text-lg">{t("hero_card3_title")}</h3><p className="text-gray-400 text-sm">{t("hero_card3_desc")}</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
