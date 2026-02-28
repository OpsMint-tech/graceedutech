import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function FloatButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-5">
      {/* Call Button */}
      <motion.a
        href="tel:+919047933484"
        initial={{ scale: 0, x: 20 }}
        animate={{ scale: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        className="group relative flex items-center justify-end"
        title="Call Us"
      >
        <div className="mr-3 bg-white text-slate-900 px-3 py-1.5 rounded-lg shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 border border-slate-100 pointer-events-none">
          Call Us
        </div>
        <div className="bg-primary text-white p-4 rounded-full shadow-[0_10px_30px_-5px_rgba(30,58,138,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(30,58,138,0.5)] transition-all duration-300">
          <Phone className="w-6 h-6" />
        </div>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919047933484"
        initial={{ scale: 0, x: 20 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="group relative flex items-center justify-end"
        title="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mr-3 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-2xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 border border-slate-100 pointer-events-none flex flex-col items-start gap-1">
          <span className="text-[10px] text-green-600 uppercase tracking-widest leading-none">WhatsApp</span>
          <span>Chat with us</span>
        </div>
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center relative">
          <FaWhatsapp className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        </div>
      </motion.a>
    </div>
  );
}
