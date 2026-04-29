"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const translations: Record<string, Record<string, string>> = {
  // Navbar
  nav_home: { vi: "Trang chủ", en: "Home" },
  nav_solutions: { vi: "Lĩnh vực", en: "Ecosystem" },
  nav_benefits: { vi: "Giá trị", en: "Values" },
  nav_projects: { vi: "Dự án", en: "Projects" },
  nav_process: { vi: "Phát triển", en: "Sustain" },
  nav_brands: { vi: "Thương hiệu", en: "Brands" },
  nav_quote: { vi: "Liên hệ", en: "Contact" },
  nav_call: { vi: "Gọi ngay", en: "Call Now" },

  // Hero
  hero_badge: { vi: "🏢 Tập đoàn đầu tư đa ngành VIMGROUP", en: "🏢 VIMGROUP Diversified Investment Group 2026" },
  hero_title_1: { vi: "Kiến Tạo", en: "Building" },
  hero_title_2: { vi: "Nền Tảng", en: "Foundation" },
  hero_title_3: { vi: "Dẫn Dắt Tương Lai", en: "Leading The Future" },
  hero_desc: { vi: "VIMGROUP xây dựng hệ sinh thái doanh nghiệp toàn diện từ Công nghiệp phụ trợ, Năng lượng xanh, Thương mại đến Công nghệ tự động hóa đỉnh cao.", en: "VIMGROUP builds a comprehensive business ecosystem from supporting industries, green energy, trade to advanced automation technology." },
  hero_cta: { vi: "Khám Phá Hệ Sinh Thái", en: "Explore Ecosystem" },
  hero_cta2: { vi: "Liên Hệ Hợp Tác", en: "Business Cooperation" },
  hero_stat1: { vi: "Năm kinh nghiệm", en: "Years Experience" },
  hero_stat1_val: { vi: "18+", en: "18+" },
  hero_stat2: { vi: "Trụ cột chiến lược", en: "Strategic Pillars" },
  hero_stat3: { vi: "Thương hiệu thành viên", en: "Member Brands" },
  hero_card1_title: { vi: "Hệ Sinh Thái Toàn Diện", en: "Comprehensive Ecosystem" },
  hero_card1_desc: { vi: "Một đối tác — đa giải pháp từ sản xuất đến công nghệ số.", en: "One partner — multi-solutions from production to digital technology." },
  hero_card2_title: { vi: "Uy Tín & Thực Chiến", en: "Prestige & Practicality" },
  hero_card2_desc: { vi: "Mạng lưới doanh nhân rộng, kinh nghiệm thực chiến đa ngành.", en: "Wide business network, multi-industry practical experience." },
  hero_card3_title: { vi: "Tư Duy Đổi Mới", en: "Innovative Thinking" },
  hero_card3_desc: { vi: "Ứng dụng AI & tự động hóa vào mọi lĩnh vực kinh doanh.", en: "Applying AI & automation to every business field." },

  // Solutions (Lĩnh vực hoạt động)
  sol_badge: { vi: "Lĩnh Vực Hoạt Động", en: "Our Fields" },
  sol_title: { vi: "4 Trụ Cột Chiến Lược VIMGROUP", en: "VIMGROUP's 4 Strategic Pillars" },
  sol_desc: { vi: "Chúng tôi tập trung nguồn lực vào các ngành công nghiệp mũi nhọn, tạo đà bứt phá cho nền kinh tế số.", en: "We focus resources on leading industries, creating momentum for the digital economy." },
  sol_consult: { vi: "Xem chi tiết →", en: "View Details →" },
  sol_invest: { vi: "Thương hiệu:", en: "Brands:" },

  // Benefits (Giá trị cốt lõi)
  ben_badge: { vi: "Tại Sao Chọn VIMGROUP?", en: "Why VIMGROUP?" },
  ben_title: { vi: "Giá Trị Cốt Lõi Vững Bền", en: "Sustainable Core Values" },
  ben_desc: { vi: "Sứ mệnh của chúng tôi là kiến tạo nền tảng vững chắc để các doanh nghiệp thành viên và đối tác cùng phát triển vượt trội.", en: "Our mission is to create a solid foundation for member businesses and partners to grow together." },
  ben_cta_text: { vi: "Chúng tôi không chỉ đầu tư vốn, chúng tôi đầu tư cả công nghệ và trí tuệ.", en: "We don't just invest capital, we invest technology and intelligence." },
  ben_cta: { vi: "Hợp Tác Cùng VIMGROUP →", en: "Partner with VIMGROUP →" },
  ben_1_t: { vi: "Tâm & Tầm", en: "Heart & Vision" },
  ben_1_d: { vi: "Đặt lợi ích khách hàng và sự phát triển bền vững của cộng đồng lên hàng đầu.", en: "Putting customer interests and community sustainability first." },
  ben_1_s: { vi: "đối tác tin cậy", en: "trusted partners" },
  ben_2_t: { vi: "Tốc Độ & Hiệu Quả", en: "Speed & Efficiency" },
  ben_2_d: { vi: "Quy trình làm việc chuyên nghiệp, ứng dụng công nghệ để tối ưu hóa thời gian.", en: "Professional workflow, applying technology to optimize time." },
  ben_2_s: { vi: "tăng trưởng/năm", en: "growth/year" },
  ben_3_t: { vi: "Sáng Tạo Không Ngừng", en: "Constant Innovation" },
  ben_3_d: { vi: "Luôn tiên phong trong việc áp dụng các xu hướng công nghệ mới nhất vào sản xuất.", en: "Always pioneering in applying the latest technology trends into production." },
  ben_3_s: { vi: "giải pháp công nghệ", en: "tech solutions" },

  // About
  about_badge: { vi: "Về VIMGROUP", en: "About VIMGROUP" },
  about_title: { vi: "Đầu Tư Đa Ngành Hàng Đầu", en: "Leading Multi-Industry Investment Group" },
  about_desc: { vi: "VIMGROUP là biểu tượng của sự khát vọng tiên phong, cam kết mang đến những giá trị khác biệt thông qua hệ sinh thái sản phẩm và dịch vụ đẳng cấp quốc tế.", en: "VIMGROUP is a symbol of pioneering aspiration, committed to delivering unique values through a world-class product and service ecosystem." },
  about_ceo: { vi: "Chủ tịch VIMGROUP", en: "VIMGROUP Chairman" },

  // Projects (Dự án & Thương hiệu)
  gal_badge: { vi: "Hệ Sinh Thái", en: "Ecosystem" },
  gal_title: { vi: "Thương Hiệu Thành Viên", en: "Member Brands" },
  gal_desc: { vi: "Hệ thống các công ty thành viên hoạt động nhịp nhàng, bổ trợ lẫn nhau trong mọi công đoạn.", en: "A system of member companies operating smoothly, complementing each other in every stage." },
  gal_cat_all: { vi: "Tất cả", en: "All" },
  gal_cat_factory: { vi: "Công nghiệp phụ trợ", en: "Industry" },
  gal_cat_family: { vi: "Năng lượng xanh", en: "Energy" },
  gal_cat_hotel: { vi: "Thương mại", en: "Trading" },
  gal_cat_school: { vi: "Công nghệ AI & Tự động hóa", en: "Technology" },
  gal_cat_mall: { vi: "Dịch vụ", en: "Services" },
  gal_cat_office: { vi: "Xây dựng", en: "Construction" },
  gal_modal_power: { vi: "Quy mô", en: "Scale" },
  gal_modal_location: { vi: "Trụ sở", en: "Headquarters" },
  gal_modal_type: { vi: "Lĩnh vực", en: "Industry" },
  gal_modal_cta: { vi: "Hợp Tác Ngay", en: "Partner Now" },
  gal_modal_desc: { vi: "Kết nối cùng các thương hiệu trong hệ sinh thái VIMGROUP để cùng vươn tầm.", en: "Connect with VIMGROUP brands to grow together." },

  // Savings (Chỉ số)
  sav_badge: { vi: "Chỉ Số Tăng Trưởng", en: "Growth Metrics" },
  sav_title: { vi: "Con Số Biết Nói", en: "Speaking Numbers" },
  sav_desc: { vi: "Sự phát triển vượt bậc của VIMGROUP qua các năm là minh chứng cho chiến lược đúng đắn.", en: "VIMGROUP's outstanding growth over the years is a testament to a right strategy." },

  // Process (Phát triển bền vững)
  proc_badge: { vi: "Phát Triển Bền Vững", en: "Sustainability" },
  proc_title: { vi: "Khát Vọng Tiên Phong", en: "Pioneering Aspiration" },
  proc_desc: { vi: "VIMGROUP cam kết xây dựng tương lai xanh thông qua các hoạt động đầu tư có trách nhiệm.", en: "VIMGROUP is committed to building a green future through responsible investment activities." },
  proc_cta: { vi: "LIÊN HỆ HỢP TÁC VIMGROUP →", en: "CONTACT VIMGROUP COOPERATION →" },

  // Contact Form
  form_badge: { vi: "Liên Hệ Hợp Tác", en: "Contact For Cooperation" },
  form_title: { vi: "Kết Nối Cùng VIMGROUP", en: "Connect With VIMGROUP" },
  form_desc: { vi: "Để lại thông tin để chúng tôi có thể tư vấn giải pháp hợp tác tối ưu nhất cho doanh nghiệp của bạn.", en: "Leave your info so we can advise the best cooperation solution for your business." },
  form_name: { vi: "Họ và Tên *", en: "Full Name *" },
  form_phone: { vi: "Số Điện Thoại *", en: "Phone Number *" },
  form_email: { vi: "Email", en: "Email" },
  form_type: { vi: "Lĩnh Vực Quan Tâm", en: "Interest Field" },
  form_submit: { vi: "GỬI YÊU CẦU HỢP TÁC 🤝", en: "SUBMIT COOPERATION REQUEST 🤝" },
  form_sending: { vi: "ĐANG GỬI...", en: "SENDING..." },
  form_success_title: { vi: "Gửi Thành Công!", en: "Submitted Successfully!" },
  form_success_desc: { vi: "Đội ngũ VIMGROUP sẽ phản hồi quý khách trong thời gian sớm nhất.", en: "VIMGROUP team will respond to you as soon as possible." },
  form_messenger: { vi: "💬 Nhắn tin trực tiếp", en: "💬 Message Us" },
  form_opt1: { vi: "Công nghiệp phụ trợ", en: "Supporting Industry" },
  form_opt2: { vi: "Năng lượng xanh", en: "Green Energy" },
  form_opt3: { vi: "Thương mại & Dịch vụ", en: "Trading & Services" },
  form_opt4: { vi: "Công nghệ AI", en: "AI Technology" },
  form_opt5: { vi: "Khác", en: "Other" },
  form_hotline: { vi: "Hotline 24/7", en: "Hotline 24/7" },
  form_office: { vi: "Trụ sở chính", en: "Headquarters" },
  form_factory: { vi: "Nhà máy sản xuất", en: "Manufacturing Plant" },
  form_secure: { vi: "🔒 Bảo mật thông tin đối tác tuyệt đối", en: "🔒 Absolute partner information security" },
  form_message: { vi: "NỘI DUNG", en: "MESSAGE" },

  // Footer
  footer_desc: { vi: "VIMGROUP — Kiến tạo nền tảng, Dẫn dắt tương lai. Tập đoàn đầu tư đa ngành hàng đầu Việt Nam.", en: "VIMGROUP — Building Foundation, Leading Future. Vietnam's leading multi-industry investment group." },
  footer_email: { vi: "vimgroupjsc@gmail.com", en: "vimgroupjsc@gmail.com" },
  footer_hotline: { vi: "098 696 9339", en: "098 696 9339" },
  footer_links: { vi: "Trang Chính", en: "Main Pages" },
  footer_contact: { vi: "Thông Tin", en: "Information" },
  footer_office: { vi: "Địa chỉ", en: "Address" },
  footer_factory: { vi: "Sản xuất", en: "Production" },
  footer_credit: { vi: "Sáng tạo bởi VimAI — Thương hiệu công nghệ VIMGROUP", en: "Created by VimAI — VIMGROUP technology brand" },
};

type I18nCtx = { t: (key: string) => string; language: string; setLanguage: (l: string) => void };
const I18nContext = createContext<I18nCtx>({ t: (k) => k, language: "vi", setLanguage: () => { } });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("vi");
  const t = (key: string) => translations[key]?.[language] || key;
  return <I18nContext.Provider value={{ t, language, setLanguage }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
