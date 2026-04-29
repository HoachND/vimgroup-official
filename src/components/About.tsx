"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Award, Users, Globe } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

export default function About() {
  const { t, language } = useI18n();
  const isEn = language === "en";
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image + Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
              <Image
                src="/images/vimgroup-ecosystem.jpg"
                alt="VIMGROUP Ecosystem"
                width={800}
                height={1000}
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic">VIMGROUP</h3>
                <p className="text-red-500 font-black text-xl">{isEn ? "18+ Years of Excellence" : "18+ Năm Khát Vọng & Cống Hiến"}</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-red-600 text-white rounded-[2rem] p-10 shadow-2xl hidden md:block border-4 border-black/50">
              <Award className="mx-auto mb-4" size={48} />
              <div className="text-center">
                <strong className="block text-4xl font-black">18+</strong>
                <span className="text-xs font-black uppercase tracking-[4px]">{isEn ? "Years" : "Năm"}</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-red-500 font-black tracking-[6px] text-xs uppercase mb-6 block">
              {t("about_badge")}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-10 text-white leading-tight tracking-tight">
              {isEn ? "Strategic " : "Tập Đoàn Đầu Tư "}
              <span className="gradient-text-red">{isEn ? "Investment" : "Chiến Lược"}</span><br />
              <span className="text-white">{isEn ? "Global Ecosystem" : "Đa Ngành Hàng Đầu"}</span>
            </h2>
            <p
              className="text-gray-400 leading-relaxed mb-12 text-lg font-medium"
              dangerouslySetInnerHTML={{
                __html: isEn
                  ? "<strong>VIMGROUP</strong> is a multi-industry investment group with an 18-year journey of development. We focus on 4 strategic pillars: Supporting Industry, Green Energy, Global Trading, and AI Technology to create sustainable values for the community."
                  : "<strong>VIMGROUP</strong> là tập đoàn đầu tư đa ngành với hành trình hơn 18 năm hình thành và phát triển. Chúng tôi tập trung vào 4 trụ cột chiến lược: Công nghiệp phụ trợ, Năng lượng xanh, Thương mại Dịch vụ và Công nghệ AI Tự động hoá nhằm tạo ra những giá trị bền vững cho cộng đồng."
              }}
            />

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                isEn ? "International Standards" : "Tiêu chuẩn quốc tế",
                isEn ? "Global Supply Chain" : "Chuỗi cung ứng toàn cầu",
                isEn ? "Green Innovation" : "Đổi mới sáng tạo xanh",
                isEn ? "AI-Driven Future" : "Tiên phong công nghệ AI",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-red-600/30 transition-colors group">
                  <CheckCircle className="text-red-600 flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-gray-200 font-bold text-sm tracking-wide">{feat}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-white/10">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-black text-red-600">06+</div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[2px] mt-2">{isEn ? "Brands" : "Thương hiệu"}</div>
              </div>
              <div className="text-center sm:text-left border-x border-white/10 px-8">
                <div className="text-4xl font-black text-red-600">500+</div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[2px] mt-2">{isEn ? "Partners" : "Đối tác"}</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-black text-red-600">100%</div>
                <div className="text-[10px] text-gray-500 font-black uppercase tracking-[2px] mt-2">{isEn ? "Commitment" : "Tận tâm"}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
