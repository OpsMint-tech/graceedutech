import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BookOpen, Calendar, Award } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Courses() {
  const courses = [
    {
      title: "Tally Prime (Advanced)",
      duration: "45 Days",
      features: ["Inventory Management", "Payroll", "GST Integration", "Banking"],
      level: "Intermediate"
    },
    {
      title: "GST with Practical Filing",
      duration: "30 Days",
      features: ["GSTR-1, 3B Filing", "E-Way Bill", "Input Tax Credit", "Reconciliation"],
      level: "Advanced"
    },
    {
      title: "Income Tax Return (ITR)",
      duration: "20 Days",
      features: ["ITR 1-4 Filing", "Tax Planning", "Deductions", "Portal Training"],
      level: "All Levels"
    },
    {
      title: "TDS / ESI / EPF",
      duration: "25 Days",
      features: ["Challan Payment", "Quarterly Returns", "Employee Compliance", "PF Withdrawal"],
      level: "Professional"
    },
    {
      title: "Master Diploma in Accounting",
      duration: "90 Days",
      features: ["All-in-one Package", "Live Projects", "Placement Assistance", "Certification"],
      level: "Expert",
      featured: true
    },
    {
      title: "Form 15G & 15H Filing",
      duration: "1 Week",
      features: ["Eligibility Check", "Online Submission", "Bank Coordination", "Documentation"],
      level: "Beginner"
    }
  ];

  return (
    <>
      <PageHeader 
        title="Training Courses" 
        subtitle="Bridging the gap between theory and practice."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 ${
                  course.featured 
                    ? "border-primary shadow-xl scale-105 relative z-10 bg-white" 
                    : "border-slate-200 shadow-sm hover:shadow-lg bg-slate-50"
                }`}
              >
                {course.featured && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${course.featured ? 'bg-secondary/10 text-secondary' : 'bg-slate-200 text-slate-600'}`}>
                       {course.level}
                     </span>
                     <span className="flex items-center text-slate-500 text-sm">
                       <Calendar className="w-4 h-4 mr-1" /> {course.duration}
                     </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{course.title}</h3>
                  
                  <ul className="space-y-4 mb-8">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-secondary mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact">
                    <Button className={`w-full ${course.featured ? 'bg-primary hover:bg-primary/90' : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex items-center gap-6">
             <div className="bg-white/10 p-6 rounded-full">
               <Award className="w-16 h-16 text-secondary" />
             </div>
             <div>
               <h2 className="text-3xl font-bold mb-2">Get Certified</h2>
               <p className="text-slate-400 max-w-lg">
                 Receive a recognized certification upon completion of your course, validating your skills to future employers.
               </p>
             </div>
           </div>
           
           <div className="flex items-center gap-6">
             <div className="bg-white/10 p-6 rounded-full">
               <BookOpen className="w-16 h-16 text-secondary" />
             </div>
             <div>
               <h2 className="text-3xl font-bold mb-2">Practical Focus</h2>
               <p className="text-slate-400 max-w-lg">
                 Our curriculum is 80% practical, ensuring you are job-ready from day one.
               </p>
             </div>
           </div>
        </div>
      </section>
    </>
  );
}
