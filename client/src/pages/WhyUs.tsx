import { PageHeader } from "@/components/PageHeader";
import { UserCheck, Clock, ShieldCheck, Zap, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const reasons = [
    {
      icon: UserCheck,
      title: "30+ Years Experience",
      description: "Our team brings decades of combined experience in accounting and taxation to your doorstep."
    },
    {
      icon: BookOpen,
      title: "Practical Training",
      description: "We don't just teach theory; we provide hands-on experience with live projects."
    },
    {
      icon: ShieldCheck,
      title: "100% Compliance",
      description: "Rest easy knowing your business adheres to all statutory regulations and deadlines."
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "For our students, we offer batch timings that suit working professionals and students alike."
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "We value your time. Our services are delivered promptly without compromising quality."
    },
    {
      icon: Users,
      title: "Placement Support",
      description: "We assist our top-performing students in finding the right career opportunities."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Why Choose Grace?" 
        subtitle="Distinguishing factors that make us the preferred partner."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6 text-primary group hover:bg-primary hover:text-white transition-colors duration-300">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-12">Client Success Stories</h2>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-xl relative">
            <div className="text-6xl text-primary/20 absolute top-8 left-8 font-serif">"</div>
            <p className="text-xl text-slate-700 italic mb-8 relative z-10">
              Grace Associates transformed how we manage our company finances. Their attention to detail during our audit was impeccable, and their advice saved us significant tax liability. Truly a partner in growth.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full" />
              <div className="text-left">
                <div className="font-bold text-slate-900">Rajesh Kumar</div>
                <div className="text-sm text-slate-500">Director, TechSolutions Pvt Ltd</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
