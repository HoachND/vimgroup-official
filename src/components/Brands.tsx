"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/context/I18nContext";
import Image from "next/image";

export default function Brands() {
  const { t } = useI18n();
  const [activeBrand, setActiveBrand] = useState<number | null>(null);

  const brands = [
    { name: "VimSupply", logo: "/images/logo-vimsupply.png", link: "https://b2b.vimgroup.vn" },
    { name: "VimSolar", logo: "/images/logo-vimsolar.png", link: "https://solar.vimgroup.vn" },
    { name: "AI Homes", logo: "/images/logo-aihomes.png", link: "https://aihomes.vimgroup.vn" },
    { name: "IHOME VN", logo: "/images/logo-ihome.jpg", link: "https://energy.vimgroup.vn" },
    { name: "VimAI", logo: "/images/logo-vimai.png", link: "https://vimai.vimgroup.vn" },
    { name: "Fastman", logo: "/images/logo-fastman.png", link: "https://fastman.vimgroup.vn" },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">
            {t("gal_title")}
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => {
                setActiveBrand(i);
                window.open(brand.link, "_blank");
              }}
              whileHover={{ scale: 1.1 }}
              animate={{ 
                scale: activeBrand === i ? 1.1 : 1,
                boxShadow: activeBrand === i ? "0 0 30px rgba(220, 38, 38, 0.6)" : "0 0 0px rgba(0,0,0,0)",
                borderColor: activeBrand === i ? "#dc2626" : "transparent"
              }}
              className={`bg-white p-8 h-48 rounded-[2rem] flex items-center justify-center transition-all duration-500 cursor-pointer border-2 group ${
                activeBrand === i ? "z-20" : "z-10"
              }`}
            >
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain p-2 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
