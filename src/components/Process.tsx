"use client";

import { motion } from "framer-motion";
import { Search, Ruler, FileText, Wrench, ShieldCheck } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

export default function Process() {
  const { t, language } = useI18n();
  const isEn = language === "en";

  const steps = [
    {
      num: "01",
      icon: Search,
      title: isEn ? "Consultation & Survey" : "Khảo Sát & Tư Vấn",
      desc: isEn ? "Deep dive into your needs. Our experts evaluate the market, site, and requirements to provide the most optimal strategy." : "Nghiên cứu sâu nhu cầu của đối tác. Đội ngũ chuyên gia khảo sát thị trường, mặt bằng và yêu cầu cụ thể để đưa ra chiến lược tối ưu.",
    },
    {
      num: "02",
      icon: Ruler,
      title: isEn ? "Design & Solution" : "Giải Pháp & Thiết Kế",
      desc: isEn ? "Developing detailed technical designs and comprehensive solutions tailored to international standards and efficiency." : "Xây dựng phương án kỹ thuật chi tiết và bộ giải pháp tổng thể, tối ưu hóa theo tiêu chuẩn quốc tế và hiệu quả đầu tư.",
    },
    {
      num: "03",
      icon: FileText,
      title: isEn ? "Partnership Agreement" : "Ký Kết & Hợp Tác",
      desc: isEn ? "Transparent agreements, professional contracts. Commitment to quality, timeline, and mutual growth for long-term success." : "Thỏa thuận minh bạch, hợp đồng chuyên nghiệp. Cam kết về chất lượng, tiến độ và sự đồng hành phát triển bền vững.",
    },
    {
      num: "04",
      icon: Wrench,
      title: isEn ? "Implementation" : "Triển Khai & Vận Hành",
      desc: isEn ? "Rigorous execution by skilled professionals. Advanced technology integration to ensure seamless operation and performance." : "Triển khai quyết liệt bởi đội ngũ chuyên gia giàu kinh nghiệm. Ứng dụng công nghệ tiên tiến đảm bảo vận hành trơn tru.",
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: isEn ? "Sustainability & Support" : "Đồng Hành & Phát Triển",
      desc: isEn ? "Continuous monitoring, dedicated maintenance, and strategic support to ensure your long-term success and sustainability." : "Giám sát liên tục, bảo trì tận tâm và hỗ trợ chiến lược nhằm đảm bảo sự thành công và phát triển bền vững của dự án.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-red-600 font-extrabold tracking-[4px] text-xs uppercase">
            {t("proc_badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">
            {isEn ? "5 Steps to " : "5 Bước Đồng Hành "}
            <span className="text-red-600">{isEn ? "Success" : "Thành Công"}</span>
            {isEn ? "" : " Cùng VIMGROUP"}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("proc_desc")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-900 to-red-600 transform -translate-x-1/2 opacity-20"></div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`lg:flex items-center gap-8 lg:mb-16 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:border-red-100 transition-all duration-500 inline-block max-w-lg">
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
                        <step.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Number circle */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-white text-red-600 font-black text-xl items-center justify-center flex-shrink-0 z-10 shadow-xl border-4 border-red-600/10">
                  {step.num}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold rounded-full hover:shadow-[0_0_40px_rgba(200,16,46,0.3)] transition-all transform hover:scale-105 text-lg"
          >
            {t("proc_cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
