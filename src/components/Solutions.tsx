import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, Leaf, ShoppingCart, Cpu, X, ArrowRight, ExternalLink } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

export default function Solutions() {
  const { t, language } = useI18n();
  const isEn = language === "en";
  const [selectedPillar, setSelectedPillar] = useState<null | number>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const pillars = [
    {
      icon: Factory,
      tag: isEn ? "SUPPORTING INDUSTRY" : "CÔNG NGHIỆP PHỤ TRỢ",
      title: isEn ? "Manufacturing Excellence" : "Sản Xuất & Công Nghiệp Phụ Trợ",
      desc: isEn ? "Leading provider of high-quality components for global supply chains." : "Cung cấp linh kiện phụ trợ chất lượng cao cho chuỗi cung ứng toàn cầu.",
      img: "/images/pillar-industry.jpg",
      brands: [
        { name: "VimSupply", link: "https://b2b.vimgroup.vn" },
        { name: "AI Homes", link: "https://aihomes.vimgroup.vn" }
      ],
      content: isEn
        ? "VIMGROUP's Supporting Industry pillar is the bedrock of our manufacturing prowess. We specialize in precision engineering and high-volume production of critical components that power global industries. From automotive parts to high-tech electronic casings, our facilities in Pho Noi A Industrial Park utilize state-of-the-art automation and robotic assembly lines. Our commitment to international standards like ISO 9001 and IATF 16949 ensures that every product leaving our factory meets the most stringent quality requirements. We don't just manufacture; we innovate, providing end-to-end solutions from R&D to final delivery, helping our global partners optimize their supply chains and reduce costs. With 18+ years of expertise, we are the trusted partner for leading brands worldwide."
        : "Trụ cột Công nghiệp phụ trợ của VIMGROUP là nền tảng vững chắc cho năng lực sản xuất của chúng tôi. Chúng tôi chuyên về kỹ thuật chính xác và sản xuất khối lượng lớn các linh kiện quan trọng cung cấp cho các ngành công nghiệp toàn cầu. Từ phụ tùng ô tô đến vỏ thiết bị điện tử công nghệ cao, các nhà máy của chúng tôi tại Khu công nghiệp Phố Nối A sử dụng dây chuyền lắp ráp robot và tự động hóa hiện đại nhất. Cam kết của chúng tôi đối với các tiêu chuẩn quốc tế như ISO 9001 và IATF 16949 đảm bảo rằng mọi sản phẩm rời khỏi nhà máy đều đáp ứng các yêu cầu chất lượng khắt khe nhất. Chúng tôi không chỉ sản xuất; chúng tôi đổi mới, cung cấp các giải pháp toàn diện từ R&D đến giao hàng cuối cùng, giúp các đối tác toàn cầu tối ưu hóa chuỗi cung ứng và giảm chi phí. Với hơn 18 năm kinh nghiệm, chúng tôi là đối tác tin cậy của các thương hiệu hàng đầu thế giới.",
      gallery: ["/images/pillar-industry.jpg", "/images/vimgroup-ecosystem.jpg", "/images/pillar-industry.jpg", "/images/vimgroup-banner-v2.png", "/images/pillar-industry.jpg"]
    },
    {
      icon: Leaf,
      tag: isEn ? "GREEN ENERGY" : "NĂNG LƯỢNG XANH",
      title: isEn ? "Sustainable Future" : "Năng Lượng Tái Tạo & Tái Chế",
      desc: isEn ? "Pioneering green energy solutions and innovative recycling technologies." : "Tiên phong trong các giải pháp điện mặt trời và công nghệ tái chế đổi mới.",
      img: "/images/pillar-energy.jpg",
      brands: [
        { name: "VimSolar", link: "https://solar.vimgroup.vn" },
        { name: "IHOME VN", link: "https://energy.vimgroup.vn" }
      ],
      content: isEn
        ? "VIMGROUP Green Energy is dedicated to driving the global transition to sustainable power. As a leader in renewable energy in Vietnam, we specialize in EPC (Engineering, Procurement, and Construction) services for rooftop solar projects, utility-scale solar farms, and advanced energy storage systems. Our subsidiary, VimSolar, has successfully deployed hundreds of megawatts across industrial parks, helping businesses significantly reduce their carbon footprint and electricity costs. Beyond solar, we are investing heavily in circular economy technologies, including high-tech plastic recycling and waste-to-energy solutions. Our goal is to create a zero-emission ecosystem that balances industrial growth with environmental preservation, ensuring a better planet for future generations while delivering high ROI for our investors."
        : "VIMGROUP Green Energy tận tâm thúc đẩy quá trình chuyển đổi toàn cầu sang năng lượng bền vững. Là đơn vị dẫn đầu về năng lượng tái tạo tại Việt Nam, chúng tôi chuyên cung cấp các dịch vụ EPC (Thiết kế, Thu mua và Xây dựng) cho các dự án điện mặt trời áp mái, trang trại năng lượng mặt trời quy mô lớn và hệ thống lưu trữ năng lượng tiên tiến. Công ty thành viên VimSolar đã triển khai thành công hàng trăm Megawatt tại các khu công nghiệp, giúp các doanh nghiệp giảm đáng kể lượng phát thải carbon và chi phí tiền điện. Bên cạnh năng lượng mặt trời, chúng tôi đang đầu tư mạnh mẽ vào các công nghệ kinh tế tuần hoàn, bao gồm tái chế nhựa công nghệ cao và các giải pháp biến chất thải thành năng lượng. Mục tiêu của chúng tôi là tạo ra một hệ sinh thái không phát thải, cân bằng giữa tăng trưởng công nghiệp với bảo tồn môi trường.",
      gallery: ["/images/pillar-energy.jpg", "/images/vimgroup-ecosystem.jpg", "/images/pillar-energy.jpg", "/images/vimgroup-banner-v2.png", "/images/pillar-energy.jpg"]
    },
    {
      icon: ShoppingCart,
      tag: isEn ? "TRADING & SERVICES" : "THƯƠNG MẠI & DỊCH VỤ",
      title: isEn ? "Global Connectivity" : "Thương Mại Đa Kênh",
      desc: isEn ? "Robust multi-channel trading network and professional global services." : "Mạng lưới thương mại đa kênh và dịch vụ chuyên nghiệp toàn cầu.",
      img: "/images/pillar-trading.jpg",
      brands: [
        { name: "VIMGROUP Trading", link: "https://b2b.vimgroup.vn" }
      ],
      content: isEn
        ? "The Trading & Services arm of VIMGROUP bridges the gap between high-quality manufacturers and global consumers. We operate a sophisticated multi-channel distribution network that spans across domestic and international markets. Our expertise lies in supply chain management, international logistics, and strategic marketing for diverse product categories, ranging from industrial equipment to consumer lifestyle brands. VIMGROUP Trading leverages data-driven insights and AI-powered logistics to ensure efficiency and reliability in every transaction. We provide comprehensive business services, including market entry consultancy, distribution management, and after-sales support, enabling our partners to scale rapidly and sustainably. Our focus is on transparency, quality assurance, and building long-term value for all stakeholders in the global trade ecosystem."
        : "Mảng Thương mại & Dịch vụ của VIMGROUP thu hẹp khoảng cách giữa các nhà sản xuất chất lượng cao và người tiêu dùng toàn cầu. Chúng tôi vận hành một mạng lưới phân phối đa kênh tinh vi trải dài trên cả thị trường trong nước và quốc tế. Thế mạnh của chúng tôi nằm ở quản lý chuỗi cung ứng, logistics quốc tế và marketing chiến lược cho nhiều danh mục sản phẩm đa dạng, từ thiết bị công nghiệp đến các thương hiệu phong cách sống tiêu dùng. VIMGROUP Trading tận dụng các phân tích dựa trên dữ liệu và logistics hỗ trợ bởi AI để đảm bảo hiệu quả và độ tin cậy trong mọi giao dịch. Chúng tôi cung cấp các dịch vụ kinh doanh toàn diện, bao gồm tư vấn thâm nhập thị trường, quản lý phân phối và hỗ trợ sau bán hàng, cho phép các đối tác của mình mở rộng quy mô một cách nhanh chóng và bền vững.",
      gallery: ["/images/pillar-trading.jpg", "/images/vimgroup-ecosystem.jpg", "/images/pillar-trading.jpg", "/images/vimgroup-banner-v2.png", "/images/pillar-trading.jpg"]
    },
    {
      icon: Cpu,
      tag: isEn ? "TECHNOLOGY & AI" : "CÔNG NGHỆ & TỰ ĐỘNG HÓA",
      title: isEn ? "Digital Pioneer" : "Chuyển Đổi Số AI",
      desc: isEn ? "Empowering businesses with AI and smart management solutions." : "Đột phá công nghệ AI và giải pháp quản lý doanh nghiệp thông minh.",
      img: "/images/pillar-tech.jpg",
      brands: [
        { name: "VimAI", link: "https://vimai.vimgroup.vn" },
        { name: "Fastman", link: "https://fastman.vimgroup.vn" }
      ],
      content: isEn
        ? "Technology & AI is the visionary core of VIMGROUP, driving innovation across our entire ecosystem. Our tech arm, VimAI, focuses on developing cutting-edge artificial intelligence solutions, automation software, and smart management platforms (SaaS) tailored for the Industry 4.0 era. We specialize in AI-driven predictive maintenance for factories, smart home automation through AI Homes, and sophisticated data analytics for business optimization. Our team of world-class engineers and data scientists are constantly pushing the boundaries of what's possible, integrating IoT and machine learning into traditional industries to enhance productivity and decision-making. At VIMGROUP, we believe technology is the ultimate catalyst for progress. We don't just adopt technology; we create it, shaping the future of how businesses operate and how people live in an increasingly digital world."
        : "Công nghệ & AI là cốt lõi tầm nhìn của VIMGROUP, thúc đẩy sự đổi mới trên toàn bộ hệ sinh thái của chúng tôi. Mảng công nghệ của chúng tôi, VimAI, tập trung vào việc phát triển các giải pháp trí tuệ nhân tạo tiên tiến, phần mềm tự động hóa và các nền tảng quản lý thông minh (SaaS) được thiết kế riêng cho thời đại Công nghiệp 4.0. Chúng tôi chuyên về bảo trì dự đoán dựa trên AI cho các nhà máy, tự động hóa ngôi nhà thông minh thông qua AI Homes và phân tích dữ liệu tinh vi để tối ưu hóa kinh doanh. Đội ngũ kỹ sư và nhà khoa học dữ liệu đẳng cấp thế giới của chúng tôi liên tục đẩy lùi các giới hạn của những điều có thể, tích hợp IoT và học máy vào các ngành công nghiệp truyền thống để nâng cao năng suất và khả năng ra quyết định. Tại VIMGROUP, chúng tôi tin rằng công nghệ là chất xúc tác tối thượng cho sự tiến bộ.",
      gallery: ["/images/pillar-tech.jpg", "/images/vimgroup-ecosystem.jpg", "/images/pillar-tech.jpg", "/images/vimgroup-banner-v2.png", "/images/pillar-tech.jpg"]
    },
  ];

  // Auto slide effect
  useEffect(() => {
    if (selectedPillar !== null) {
      const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % pillars[selectedPillar].gallery.length);
      }, 3000);
      return () => clearInterval(timer);
    } else {
      setCurrentSlide(0);
    }
  }, [selectedPillar]);

  return (
    <section id="solutions" className="py-32 vim-gradient-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-red-600 font-black tracking-[6px] text-sm uppercase mb-4 block">
            {t("sol_badge")}
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            {isEn ? "VIMGROUP " : "4 Trụ Cột "}
            <span className="gradient-text-red">{isEn ? "Strategic Pillars" : "Chiến Lược"}</span>
            {isEn ? "" : " VIMGROUP"}
          </h2>
          <div className="w-24 h-2 bg-red-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pillars.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedPillar(i)}
              className="group relative h-[450px] overflow-hidden rounded-[40px] cursor-pointer shadow-2xl hover:shadow-red-600/20 transition-all duration-500"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${s.img}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:via-red-900/20 transition-colors duration-500"></div>
              </div>

              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                    <s.icon className="text-white" size={28} />
                  </div>
                  <span className="text-white font-black text-sm tracking-widest uppercase">{s.tag}</span>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">{s.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 mb-6">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 text-red-500 font-black uppercase text-xs tracking-tighter">
                  {t("sol_consult")} <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {selectedPillar !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] rounded-[50px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/5"
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all shadow-lg backdrop-blur-md"
              >
                <X size={24} />
              </button>

              {/* Slider Section */}
              <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative bg-gray-900 overflow-hidden group">
                <div 
                  className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {pillars[selectedPillar].gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="w-full h-full object-cover flex-shrink-0"
                      alt={`Gallery ${idx}`}
                    />
                  ))}
                </div>
                {/* Image Counter Overlay */}
                <div className="absolute bottom-10 left-10 flex gap-2">
                  {pillars[selectedPillar].gallery.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                      className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? "w-10 bg-red-600" : "w-2 bg-white/50"}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar bg-gradient-to-br from-[#0a0a0a] to-[#171717]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center border border-red-600/30">
                    {(() => {
                      const Icon = pillars[selectedPillar].icon;
                      return <Icon className="text-red-500" size={24} />;
                    })()}
                  </div>
                  <h4 className="text-red-500 font-black tracking-widest text-sm uppercase">{pillars[selectedPillar].tag}</h4>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none">
                  {pillars[selectedPillar].title}
                </h2>

                <div className="prose prose-invert max-w-none mb-10">
                  <p className="text-gray-300 text-lg leading-relaxed font-medium mb-6 italic border-l-4 border-red-600 pl-6">
                    {pillars[selectedPillar].desc}
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed text-justify">
                    {pillars[selectedPillar].content}
                  </p>
                </div>

                <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                  <h5 className="text-white font-black text-xs uppercase tracking-widest mb-4">{t("sol_invest")}</h5>
                  <div className="flex flex-wrap gap-3">
                    {pillars[selectedPillar].brands.map(b => (
                      <a 
                        key={b.name} 
                        href={b.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 font-bold text-sm shadow-sm hover:border-red-600 hover:text-red-600 hover:bg-red-600/10 transition-all transform hover:scale-105"
                      >
                        {b.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
