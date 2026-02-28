import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
}

export function PageHeader({
  title,
  subtitle,
  description,
  image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
}: PageHeaderProps) {
  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
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
          className="text-4xl md:text-6xl font-black mb-6 text-white"
        >
          {title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-secondary font-bold mb-4 uppercase tracking-widest"
        >
          {subtitle}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
