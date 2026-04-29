"use client";
import { useI18n } from "@/context/I18nContext";
import { motion } from "framer-motion";
import { Heart, Zap, Lightbulb } from "lucide-react";


const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  red: { bg: "bg-red-500/10", text: "text-red-600", border: "border-red-500/20" },
  dark: { bg: "bg-black/10", text: "text-black", border: "border-black/20" },
};

export default function Benefits() {
  const { t, language } = useI18n();
  const isEn = language === "en";

  const benefits = [
    { icon: Heart, titleKey: "ben_1_t", descKey: "ben_1_d", color: "red", stat: isEn ? "Trust" : "Uy tín", statKey: "ben_1_s" },
    { icon: Zap, titleKey: "ben_2_t", descKey: "ben_2_d", color: "red", stat: "20%+", statKey: "ben_2_s" },
    { icon: Lightbulb, titleKey: "ben_3_t", descKey: "ben_3_d", color: "red", stat: "100+", statKey: "ben_3_s" },
  ];
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-red-600 font-extrabold tracking-[4px] text-xs uppercase">{t("ben_badge")}</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">{t("ben_title")}</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">{t("ben_desc")}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const c = colorMap[b.color];
            return (
              <motion.div key={b.titleKey} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:border-red-100 bento-hover shadow-sm hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center mb-6`}><b.icon className={c.text} size={32} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t(b.titleKey)}</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-8">{t(b.descKey)}</p>
                <div className={`rounded-2xl ${c.bg} border ${c.border} p-5`}>
                  <div className={`text-3xl font-black ${c.text}`}>{b.stat}</div>
                  <div className="text-sm text-gray-500 mt-1">{t(b.statKey)}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-20">
          <p className="text-slate-900 font-medium mb-6 text-xl">{t("ben_cta_text")}</p>
          <a href="#contact" className="inline-block px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold rounded-full hover:shadow-[0_0_40px_rgba(200,16,46,0.3)] transition-all transform hover:scale-105 text-lg">{t("ben_cta")}</a>
        </motion.div>
      </div>
    </section>
  );
}
