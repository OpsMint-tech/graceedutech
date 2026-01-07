import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Calculator, GraduationCap, Building2 } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Professional meeting or office building */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Office background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />

        <div className="container-custom relative z-20 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" /> Trusted Since 2009
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Your Trusted Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Accounting & Compliance</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 max-w-lg leading-relaxed"
            >
              We provide comprehensive financial solutions and practical training to help businesses and careers grow with confidence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/services">
                <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-white rounded-xl shadow-lg shadow-secondary/25">
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white/20 hover:bg-white/10 rounded-xl">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Decorative element or secondary image for desktop */}
          <div className="hidden lg:block relative">
             <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
                 alt="Accounting professional" 
                 className="rounded-[20px] shadow-inner"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">What We Do</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Financial Solutions</h3>
            <p className="text-slate-600 text-lg">
              From day-to-day accounting to complex tax compliance and professional training, we cover all your financial needs under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Accounting" 
              description="Expert bookkeeping and financial reporting to keep your business records pristine." 
              icon={Calculator}
              delay={0}
            />
            <ServiceCard 
              title="GST & Tax" 
              description="Seamless GST filing, income tax returns, and compliance management." 
              icon={FileText}
              delay={0.1}
            />
            <ServiceCard 
              title="Registrations" 
              description="Company incorporation, trademarking, and business setup services." 
              icon={Building2}
              delay={0.2}
            />
            <ServiceCard 
              title="Training" 
              description="Practical courses in Tally, GST, and accounting for aspiring professionals." 
              icon={GraduationCap}
              href="/courses"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "30+" },
              { label: "Happy Clients", value: "500+" },
              { label: "Students Trained", value: "2000+" },
              { label: "Projects Done", value: "100%" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to streamline your finances?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join hundreds of satisfied businesses who trust Grace Associates for their accounting and compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact">
               <Button size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg px-8 py-6 rounded-xl shadow-xl">
                 Get in Touch
               </Button>
             </Link>
             <Link href="/courses">
               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                 Explore Courses
               </Button>
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
