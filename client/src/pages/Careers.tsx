import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Users,
  Building2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Calculator,
  FileText,
  UserCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function Careers() {
  const roles = [
    {
      title: "Accounts Executive",
      salary: "₹15,000 - ₹25,000/month",
      description: "Handle day-to-day accounting, bookkeeping, and financial record maintenance.",
      skills: ["Tally Prime", "Bookkeeping", "Reconciliation"],
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "GST Consultant",
      salary: "₹20,000 - ₹35,000/month",
      description: "Manage GST compliance, return filing, and advisory services for clients.",
      skills: ["GST Filing", "Compliance", "Advisory"],
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Payroll Executive",
      salary: "₹18,000 - ₹30,000/month",
      description: "Process payroll, manage EPF/ESI compliance, and handle employee benefits.",
      skills: ["Payroll Processing", "EPF/ESI", "TDS"],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Compliance Officer",
      salary: "₹25,000 - ₹45,000/month",
      description: "Ensure regulatory compliance across all statutory requirements.",
      skills: ["Regulatory Knowledge", "Audit", "Documentation"],
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Tax Consultant",
      salary: "₹25,000 - ₹50,000/month",
      description: "Provide tax planning, ITR filing, and tax advisory services.",
      skills: ["Income Tax", "Tax Planning", "ITR Filing"],
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Accounts Manager",
      salary: "₹35,000 - ₹60,000/month",
      description: "Lead accounting teams, manage financial operations, and strategic planning.",
      skills: ["Team Management", "Financial Analysis", "Strategy"],
      icon: <UserCheck className="w-6 h-6" />
    }
  ];

  const placementServices = [
    "Resume Building & Interview Preparation",
    "Direct Referrals to Partner Companies",
    "Campus Placement Drives",
    "Internship Opportunities",
    "Career Counseling Sessions"
  ];

  const partners = [
    "CA Firms", "Corporate Companies", "Manufacturing Units",
    "Trading Businesses", "Service Companies", "Startups"
  ];

  const growthPath = [
    { year: "Year 1", role: "Accounts Executive", salary: "₹15-20K/month" },
    { year: "Year 2-3", role: "Senior Executive", salary: "₹25-35K/month" },
    { year: "Year 4-5", role: "Supervisor/Consultant", salary: "₹40-50K/month" },
    { year: "Year 6+", role: "Manager/Partner", salary: "₹60K+/month" }
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="Your Future Starts Here"
        subtitle="Career Opportunities"
        description="Discover the exciting career paths that await you after completing our professional coaching and practical training programs."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
      />

      {/* Roles Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Roles After Training</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Career Paths You Can Pursue</h3>
            <p className="text-lg text-slate-600">
              Our training at Grace Edutech opens doors to numerous opportunities in the accounting, finance, and professional sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {role.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{role.title}</h4>
                <p className="text-primary font-bold text-sm mb-4">{role.salary}</p>
                <p className="text-slate-600 mb-6 line-clamp-2">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-500 border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="py-20 md:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-4">Placement Support</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-8 transition-all">We Help You Get Placed</h3>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Our dedicated placement cell at Grace Edutech works tirelessly to connect our trained students with the best opportunities in the market. We have partnerships with corporate companies, educational institutions, and businesses looking for skilled professionals.
              </p>

              <div className="space-y-4 mb-10">
                {placementServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-lg text-slate-200">{service}</span>
                  </div>
                ))}
              </div>

              <Link href="/courses">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 h-14 group">
                  View Courses <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">90%+</div>
                  <p className="text-slate-400 font-medium">Placement Rate</p>
                </div>
                <div className="bg-primary p-8 rounded-3xl text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                  <p className="text-white/80 font-medium">Students Placed</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                  <p className="text-slate-400 font-medium">Partner Firms</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center aspect-square">
                  <Building2 className="w-12 h-12 text-secondary mb-4" />
                  <p className="text-sm text-center text-slate-400">Industry Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Placement Partners Include</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-white px-8 py-4 rounded-xl shadow-sm border border-slate-200 font-bold text-slate-600 hover:text-primary hover:border-primary transition-all">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Growth Path</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Your Career Growth</h3>
          </div>

          <div className="max-w-6xl mx-auto relative px-4">
            {/* Connection Line - Stable positioning behind numbers */}
            <div className="absolute top-[52px] left-0 w-full h-0.5 bg-slate-100 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {growthPath.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center relative hover:shadow-lg transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform ring-[12px] ring-white">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{item.year}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 h-16 flex items-center justify-center leading-snug">
                    {item.role}
                  </h4>
                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Average Salary</div>
                    <p className="text-primary font-bold text-xl">{item.salary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Start Your Career?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Enroll in our courses today and take the first step towards a successful career in accounting and finance.
          </p>
          <Link href="/courses">
            <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-white text-lg px-10 h-16 rounded-full group">
              View Courses <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
