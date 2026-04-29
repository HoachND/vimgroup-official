"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

export default function ContactForm() {
  const { t, language } = useI18n();
  const isEn = language === "en";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        const confetti = (await import("canvas-confetti")).default;
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C8102E", "#ffffff"]
        });
        setTimeout(() => setSuccess(false), 5000);
        setFormData({ name: "", phone: "", email: "", interest: "", message: "" });
      } else {
        alert(isEn ? "Something went wrong. Please try again." : "Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(isEn ? "Network error. Please check your connection." : "Lỗi kết nối. Vui lòng kiểm tra lại mạng.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 vim-gradient-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-500 font-black tracking-[6px] text-xs uppercase mb-6 block">
              {t("form_badge")}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
              {isEn ? "Ready to " : "Khởi Tạo "}
              <span className="gradient-text-red">{isEn ? "Cơ Hội" : "Cơ Hội"}</span><br />
              {isEn ? "With Us?" : "Cùng VIMGROUP"}
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              {t("form_desc")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-red-600/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-red-600/20 flex items-center justify-center border border-red-600/20 group-hover:bg-red-600 group-hover:scale-110 transition-all">
                  <Mail className="text-red-500 group-hover:text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-gray-400 font-bold">vimgroupjsc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-red-600/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-red-600/20 flex items-center justify-center border border-red-600/20 group-hover:bg-red-600 group-hover:scale-110 transition-all">
                  <Phone className="text-red-500 group-hover:text-white" size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">{t("form_hotline")}</h4>
                  <p className="text-gray-400 font-bold">0986 969 339</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl relative"
          >
            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{t("form_success_title")}</h3>
                <p className="text-gray-400">{t("form_success_desc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-black text-[10px] uppercase tracking-widest mb-3 ml-2">{t("form_name")}</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-all font-bold placeholder:text-gray-600"
                      placeholder={isEn ? "Your Name" : "Họ và tên"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-white font-black text-[10px] uppercase tracking-widest mb-3 ml-2">{t("form_phone")}</label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-all font-bold placeholder:text-gray-600"
                      placeholder="0986..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-black text-[10px] uppercase tracking-widest mb-3 ml-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-all font-bold placeholder:text-gray-600"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-white font-black text-[10px] uppercase tracking-widest mb-3 ml-2">{t("form_type")}</label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-all font-bold appearance-none cursor-pointer"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="" className="bg-gray-900">{isEn ? "Select field" : "Chọn lĩnh vực"}</option>
                      <option value="Supporting Industry" className="bg-gray-900">{t("form_opt1")}</option>
                      <option value="Green Energy" className="bg-gray-900">{t("form_opt2")}</option>
                      <option value="Trading & Services" className="bg-gray-900">{t("form_opt3")}</option>
                      <option value="AI Technology" className="bg-gray-900">{t("form_opt4")}</option>
                      <option value="Other" className="bg-gray-900">{t("form_opt5")}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white font-black text-[10px] uppercase tracking-widest mb-3 ml-2">{t("form_message")}</label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-all font-bold placeholder:text-gray-600"
                    placeholder={isEn ? "Tell us about your project..." : "Nội dung cần tư vấn..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-red-600/30 disabled:opacity-50 text-lg uppercase tracking-widest"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      {t("form_sending")}
                    </>
                  ) : (
                    <>
                      {t("form_submit")}
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
