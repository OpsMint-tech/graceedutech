import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function FloatButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href="tel:+919655214330"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-primary/50 transition-shadow"
        title="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        href="https://wa.me/919655214330"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-shadow"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
