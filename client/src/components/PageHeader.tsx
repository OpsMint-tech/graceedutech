import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" }: PageHeaderProps) {
  return (
    <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        {/* Abstract office background */}
        <img 
          src={image} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
