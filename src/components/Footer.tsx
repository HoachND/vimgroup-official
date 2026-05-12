"use client";

import { MapPin, Phone, Mail, Factory, Globe } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

export default function Footer() {
  const { t, language } = useI18n();
  const isEn = language === "en";

  return (
    <footer className="bg-white text-gray-800 pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1 - Brand */}
          <div className="space-y-8 lg:col-span-1">
            <img
              src="/images/logo-vimgroup.png"
              alt="VIMGROUP"
              className="h-28 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              <strong className="text-gray-900 uppercase font-black tracking-wider">VIMGROUP ECOSYSTEM</strong><br/>
              {t("footer_desc")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm border border-gray-100 text-gray-400"><Globe size={20} /></a>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-gray-900 border-l-4 border-red-600 pl-4 uppercase tracking-tighter">{isEn ? "Quick Links" : "Chuyên Mục"}</h4>
            <ul className="space-y-4 text-sm font-bold">
              {[
                { name: t("nav_home"), href: "/#home" },
                { name: t("nav_solutions"), href: "/#solutions" },
                { name: t("nav_benefits"), href: "/#benefits" },
                { name: t("nav_projects"), href: "/#projects" },
                { name: t("nav_process"), href: "/#process" },
                { name: t("nav_quote"), href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-red-600 transition-colors text-gray-500 hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-gray-900 border-l-4 border-red-600 pl-4 uppercase tracking-tighter">{isEn ? "Contact" : "Liên Hệ"}</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                  <MapPin className="text-red-600" size={20} />
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold mb-1">{t("form_office")}</strong>
                  <span className="text-gray-500 leading-relaxed italic">B88, Phố Trúc, KĐT Ecopark, {isEn ? "Phung Cong, Hung Yen" : "Phụng Công, Hưng Yên"}</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                  <Phone className="text-red-600" size={20} />
                </div>
                <a href="tel:0986969339" className="hover:text-red-600 transition-colors text-gray-900 font-black text-lg">
                  0986 969 339
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
                  <Mail className="text-red-600" size={20} />
                </div>
                <a href="mailto:vimgroupjsc@gmail.com" className="hover:text-red-600 transition-colors text-gray-500 font-bold underline decoration-red-200">
                  vimgroupjsc@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 - Map */}
          <div className="h-[280px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.633596706927!2d105.9329718!3d20.9471373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af268f705e4b%3A0xe54191d84e2a6d7f!2sEcopark!5e0!3m2!1svi!2s!4v1713859000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 absolute inset-0"
            ></iframe>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-10 text-center text-xs text-gray-400 space-y-4">
          <p className="font-bold tracking-widest">© {new Date().getFullYear()} VIMGROUP JOINT STOCK COMPANY. ALL RIGHTS RESERVED.</p>
          <a
            href="https://vimgroup.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-red-600 transition-all duration-300 font-medium"
          >
            {t("footer_credit")}
          </a>
        </div>
      </div>
    </footer>
  );
}

