"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone } from "lucide-react";

type Message = { id: string; text: string; sender: "bot" | "user"; };

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Chào Sếp! Em là trợ lý AI của VIMGROUP. Sếp cần tìm hiểu về lĩnh vực nào của hệ sinh thái: Năng lượng, Công nghiệp phụ trợ, hay Thương mại ạ?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), text, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      let botReply = "Dạ VIMGROUP đã nhận thông tin. Sếp vui lòng để lại SĐT hoặc gọi Hotline 0986 969 339 để được kết nối với đúng bộ phận ạ!";
      if (text.includes("lĩnh vực")) botReply = "VIMGROUP hoạt động trên 4 trụ cột: Năng lượng xanh (VimSolar, IHOME), Công nghiệp phụ trợ (VimSupply), Thương mại & Xuất nhập khẩu, và Công nghệ AI. Sếp quan tâm mảng nào ạ?";
      if (text.includes("hợp tác")) botReply = "Dạ VIMGROUP luôn chào đón các cơ hội hợp tác chiến lược. Sếp vui lòng liên hệ qua email info@vimgroup.vn hoặc gọi 0986 969 339 để sắp xếp lịch gặp mặt ạ!";
      if (text.includes("thương hiệu")) botReply = "Hệ sinh thái VIMGROUP gồm 6+ thương hiệu thành viên: VimSolar, VimSupply, IHOME Việt Nam, AI Homes, và nhiều thương hiệu khác. Mỗi thương hiệu phục vụ một phân khúc riêng biệt.";
      if (text.includes("tuyển dụng")) botReply = "VIMGROUP luôn tìm kiếm nhân tài! Hiện đang tuyển dụng cho nhiều vị trí tại các công ty thành viên. Sếp vui lòng gửi CV về hr@vimgroup.vn nhé!";
      const botMsg: Message = { id: (Date.now() + 1).toString(), text: botReply, sender: "bot" };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  const suggestions = [
    { q: "Các lĩnh vực hoạt động?", a: "lĩnh vực" },
    { q: "Cơ hội hợp tác?", a: "hợp tác" },
    { q: "Thương hiệu thành viên?", a: "thương hiệu" },
    { q: "Tuyển dụng nhân sự?", a: "tuyển dụng" }
  ];

  return (
    <div className="fixed bottom-32 left-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col origin-bottom-left" style={{ height: "500px" }}>
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">V</div>
                <div><h3 className="font-bold text-sm">VIMGROUP Assistant</h3><p className="text-[10px] text-white/80">⚡ Đang trực tuyến</p></div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg"><X size={20} /></button>
            </div>
            <div className="flex-1 p-4 bg-slate-50 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${msg.sender === "user" ? "bg-red-600 text-white rounded-tr-none" : "bg-white text-slate-700 rounded-tl-none border border-gray-100"}`}>{msg.text}</div>
                </div>
              ))}
              {/* Suggested Questions */}
              {messages.length < 4 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {suggestions.map((s) => (
                    <button 
                      key={s.q}
                      className="bg-white border border-red-500/30 text-red-600 px-3 py-1.5 rounded-full text-[11px] font-bold hover:bg-red-600 hover:text-white transition-all shadow-sm"
                      onClick={() => handleSend(s.q)}
                    >
                      {s.q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="p-4 border-t border-gray-100 bg-white space-y-3">
              <a href="tel:0986969339" className="flex items-center justify-center gap-2 w-full bg-emerald-500 text-white py-2 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors">
                <Phone size={16} /> Gọi VIMGROUP: 0986 969 339
              </a>
              <form onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }} className="flex gap-2">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Nhập tin nhắn..." className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-red-600" />
                <button type="submit" className="bg-red-600 text-white p-2 rounded-xl hover:bg-red-700 transition-transform active:scale-90"><Send size={18} /></button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 text-white p-4 rounded-full shadow-lg shadow-red-600/40 flex items-center justify-center relative">
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
      </motion.button>
    </div>
  );
}
