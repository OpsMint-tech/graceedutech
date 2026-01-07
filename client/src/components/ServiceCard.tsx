import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, href = "/services", delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24 text-primary" />
      </div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
        
        <Link href={href} className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
          Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
